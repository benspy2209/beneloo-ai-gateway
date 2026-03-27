const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    if (!url || typeof url !== 'string') {
      return new Response(JSON.stringify({ error: 'URL is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Normalize URL
    let baseUrl: URL;
    try {
      baseUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const fetchOpts: RequestInit = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.5',
      },
      signal: AbortSignal.timeout(10000),
    };

    // Fetch HTML
    let html = '';
    try {
      const res = await fetch(baseUrl.href, fetchOpts);
      html = await res.text();
    } catch {
      return new Response(JSON.stringify({ error: 'Could not fetch the site' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch robots.txt
    let robotsTxt = '';
    let robotsFound = false;
    try {
      const robotsUrl = `${baseUrl.origin}/robots.txt`;
      const res = await fetch(robotsUrl, { ...fetchOpts, signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        robotsTxt = await res.text();
        robotsFound = true;
      }
    } catch {
      // robots.txt not available
    }

    // 1. robots_ok: allows at least one AI bot, or no robots.txt = true
    let robots_ok = true;
    if (robotsFound && robotsTxt.length > 0) {
      const lower = robotsTxt.toLowerCase();
      const aiBots = ['gptbot', 'claudebot', 'perplexitybot', 'anthropic-ai'];
      // Check if any AI bot is explicitly disallowed
      const lines = lower.split('\n');
      let currentAgent = '';
      const disallowedBots = new Set<string>();

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('user-agent:')) {
          currentAgent = trimmed.replace('user-agent:', '').trim();
        } else if (trimmed.startsWith('disallow:') && trimmed.replace('disallow:', '').trim() === '/') {
          // This agent is fully blocked
          if (currentAgent === '*') {
            disallowedBots.add('*');
          }
          for (const bot of aiBots) {
            if (currentAgent === bot) {
              disallowedBots.add(bot);
            }
          }
        }
      }

      // If wildcard blocks all AND no specific allow for AI bots, check if any AI bot has its own section that allows
      if (disallowedBots.has('*')) {
        // All blocked by default — check if at least one AI bot has its own section without disallow /
        const hasAllowedBot = aiBots.some(bot => {
          // Find if this bot has its own user-agent section
          let inBotSection = false;
          let botBlocked = false;
          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('user-agent:')) {
              inBotSection = trimmed.replace('user-agent:', '').trim() === bot;
            } else if (inBotSection && trimmed.startsWith('disallow:') && trimmed.replace('disallow:', '').trim() === '/') {
              botBlocked = true;
            }
          }
          return !botBlocked && !disallowedBots.has(bot);
        });
        robots_ok = hasAllowedBot;
      } else {
        // No wildcard block — check if any AI bot is specifically blocked
        const allAiBlocked = aiBots.every(bot => disallowedBots.has(bot));
        robots_ok = !allAiBlocked;
      }
    }

    // 2. jsonld_ok: HTML contains <script type="application/ld+json">
    const jsonld_ok = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>/i.test(html);

    // 3. faq_ok: JSON-LD contains FAQPage
    let faq_ok = false;
    const ldJsonRegex = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = ldJsonRegex.exec(html)) !== null) {
      if (match[1] && /FAQPage/i.test(match[1])) {
        faq_ok = true;
        break;
      }
    }

    // 4. og_ok: has og:title AND og:description AND og:image
    const hasOgTitle = /<meta[^>]*property\s*=\s*["']og:title["'][^>]*>/i.test(html);
    const hasOgDesc = /<meta[^>]*property\s*=\s*["']og:description["'][^>]*>/i.test(html);
    const hasOgImage = /<meta[^>]*property\s*=\s*["']og:image["'][^>]*>/i.test(html);
    const og_ok = hasOgTitle && hasOgDesc && hasOgImage;

    // 5. meta_ok: <meta name="description" with content > 50 chars
    let meta_ok = false;
    const metaDescMatch = html.match(/<meta[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/i)
      || html.match(/<meta[^>]*content\s*=\s*["']([^"']*)["'][^>]*name\s*=\s*["']description["'][^>]*>/i);
    if (metaDescMatch && metaDescMatch[1] && metaDescMatch[1].length > 50) {
      meta_ok = true;
    }

    const checks = { robots_ok, jsonld_ok, faq_ok, og_ok, meta_ok };
    const score = Object.values(checks).filter(Boolean).length * 20;

    return new Response(JSON.stringify({ score, ...checks }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Analysis failed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
