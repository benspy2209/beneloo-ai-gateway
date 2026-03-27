import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X as XIcon, Loader2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { supabase } from "@/integrations/supabase/client";

interface DiagResult {
  score: number;
  robots_ok: boolean;
  jsonld_ok: boolean;
  faq_ok: boolean;
  og_ok: boolean;
  meta_ok: boolean;
}

const AnimatedScore = ({ score, scoreColor }: { score: number; scoreColor: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * score));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [score]);

  return (
    <div className="space-y-6 text-center">
      <p className={`text-7xl font-black ${scoreColor}`}>{display}</p>
    </div>
  );
};

const getScoreMessage = (score: number): string => {
  if (score <= 20) return "Votre site est invisible pour les IA. Agissez maintenant.";
  if (score <= 60) return "Des bases sont là, mais les IA ne vous trouvent pas encore efficacement.";
  return "Bon travail ! Quelques optimisations et vous serez en pole position.";
};

const DiagnosticSection = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagResult | null>(null);
  const [error, setError] = useState("");

  const runDiagnostic = async () => {
    if (!url || !email) return;
    setLoading(true);
    setError("");

    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/analyze-site`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        }
      );

      if (!res.ok) {
        throw new Error("Analysis failed");
      }

      const data: DiagResult = await res.json();
      setResult(data);

      // Save to Supabase
      await supabase.from("diagnostics").insert({
        url,
        email,
        score: data.score,
        robots_ok: data.robots_ok,
        jsonld_ok: data.jsonld_ok,
        faq_ok: data.faq_ok,
        og_ok: data.og_ok,
        meta_ok: data.meta_ok,
      });

      // Send lead to Brevo (silent — never blocks the user)
      try {
        const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
        await fetch(
          `https://${projectId}.supabase.co/functions/v1/send-to-brevo`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, url, score: data.score }),
          }
        );
      } catch (_) {
        // Brevo sync failed — non-blocking
      }
    } catch {
      setError(
        "Nous n'avons pas pu analyser ce site automatiquement. Laissez votre email, un expert vous contactera sous 24h."
      );
      // Save email + url with null score
      await supabase.from("diagnostics").insert({ url, email });

      // Send lead to Brevo even on failure (silent)
      try {
        const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
        await fetch(
          `https://${projectId}.supabase.co/functions/v1/send-to-brevo`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, url, score: null }),
          }
        );
      } catch (_) {
        // Brevo sync failed — non-blocking
      }
    } finally {
      setLoading(false);
    }
  };

  const criteria = result
    ? [
        { label: "Robots.txt IA-friendly", ok: result.robots_ok },
        { label: "Données structurées (JSON-LD)", ok: result.jsonld_ok },
        { label: "FAQ Schema", ok: result.faq_ok },
        { label: "Open Graph configuré", ok: result.og_ok },
        { label: "Meta description complète", ok: result.meta_ok },
      ]
    : [];

  const scoreColor = result
    ? result.score <= 30
      ? "text-destructive"
      : result.score <= 60
      ? "text-yellow-500"
      : "text-success"
    : "";

  return (
    <section id="diagnostic" className="section-py">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h2 className="heading-h2 text-foreground text-center mb-4">
            Votre site parle aux humains. Parle-t-il aux machines ?
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12">
            Entrez votre URL. On vous dit en 30 secondes si l'IA vous connaît.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="glass-card-static p-8 md:p-10">
            {!result ? (
              <div className="space-y-4">
                <Input
                  type="url"
                  placeholder="https://votre-site.be"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-transparent border-primary/30 text-foreground placeholder:text-muted-foreground h-12 text-base focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-primary/30 text-foreground placeholder:text-muted-foreground h-12 text-base focus:border-primary"
                />
                <p className="text-xs text-muted-foreground">
                  Pour recevoir votre rapport complet
                </p>
                <Button
                  variant="cta"
                  className="w-full h-12 text-base"
                  onClick={runDiagnostic}
                  disabled={loading || !url || !email}
                >
                  {loading ? (
                    <Loader2 className="animate-spin mr-2" size={18} />
                  ) : null}
                  {loading ? "Analyse en cours..." : "Lancer le diagnostic"}
                </Button>
                {error && <p className="text-destructive text-sm">{error}</p>}
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <AnimatedScore score={result.score} scoreColor={scoreColor} />
                <p className="text-muted-foreground">Score de visibilité IA sur 100</p>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      result.score <= 30
                        ? "bg-destructive"
                        : result.score <= 60
                        ? "bg-yellow-500"
                        : "bg-success"
                    }`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>

                <div className="space-y-3 text-left mt-6">
                  {criteria.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {c.ok ? (
                        <Check className="text-success shrink-0" size={18} />
                      ) : (
                        <XIcon className="text-destructive shrink-0" size={18} />
                      )}
                      <span className="text-sm text-foreground">{c.label}</span>
                    </div>
                  ))}
                </div>

                {/* Score message */}
                <p className="text-sm text-foreground font-medium mt-4 px-4 py-3 rounded-lg bg-secondary/50">
                  {getScoreMessage(result.score)}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  Votre rapport complet a été envoyé à {email}
                </p>

                <Button variant="cta" className="w-full h-12 text-base mt-4" asChild>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Corriger mon score — Parler à un expert
                  </a>
                </Button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiagnosticSection;
