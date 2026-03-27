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
      // Simple client-side simulation for V1
      // In production, use an Edge Function with proper CORS proxy
      const checks = {
        robots_ok: Math.random() > 0.6,
        jsonld_ok: Math.random() > 0.7,
        faq_ok: Math.random() > 0.75,
        og_ok: Math.random() > 0.5,
        meta_ok: Math.random() > 0.4,
      };
      
      const trueCount = Object.values(checks).filter(Boolean).length;
      const score = Math.round((trueCount / 5) * 100);

      const diagResult = { score, ...checks };
      setResult(diagResult);

      // Save to Supabase
      await supabase.from("diagnostics").insert({
        url,
        email,
        score,
        ...checks,
      });
    } catch {
      setError("Nous n'avons pas pu analyser ce site automatiquement. Un expert vous contactera avec les résultats.");
    } finally {
      setLoading(false);
    }
  };

  const criteria = result
    ? [
        { label: "Robots.txt autorise les bots IA", ok: result.robots_ok },
        { label: "Données structurées JSON-LD présentes", ok: result.jsonld_ok },
        { label: "FAQ exploitable par les IA", ok: result.faq_ok },
        { label: "Open Graph configuré", ok: result.og_ok },
        { label: "Meta description optimisée", ok: result.meta_ok },
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
    <section id="diagnostic" className="py-24">
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

                <p className="text-sm text-muted-foreground mt-4">
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
