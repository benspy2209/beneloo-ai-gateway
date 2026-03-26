import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X as XIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const includes = [
  { title: "Audit de visibilité IA complet", desc: "Nous analysons votre site sur les 5 critères essentiels de visibilité IA : robots.txt, JSON-LD, FAQ Schema, Open Graph et meta description. Vous recevez un rapport détaillé avec un score sur 100." },
  { title: "Configuration robots.txt IA-ready", desc: "Nous configurons votre fichier robots.txt pour autoriser explicitement GPTBot, ClaudeBot, PerplexityBot et tous les crawlers IA majeurs à indexer votre contenu." },
  { title: "Injection JSON-LD (Organization + FAQ)", desc: "Nous injectons les données structurées schema.org directement dans votre site : Organization pour votre identité, FAQ pour vos questions fréquentes. Les IA peuvent enfin vous comprendre." },
  { title: "Meta tags et Open Graph optimisés", desc: "Titre, description, og:image, og:title, twitter:card — tous les signaux que les moteurs de recherche et les IA utilisent pour comprendre et afficher votre site." },
  { title: "Soumission Google Search Console", desc: "Nous soumettons votre sitemap à Google Search Console pour accélérer l'indexation de vos pages optimisées." },
];

const before = ["Robots.txt bloque les bots IA", "Aucune donnée structurée", "Pas de FAQ exploitable", "Open Graph absent ou incomplet", "Meta description manquante"];
const after = ["Robots.txt autorise tous les bots IA", "JSON-LD Organization + FAQ", "FAQ Schema exploitable", "Open Graph complet", "Meta description optimisée"];

const StarterPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <p className="label-mono mb-6">STARTER · 497 €</p>
          <h1 className="heading-h1 text-foreground mb-6">
            Votre site actuel, visible pour les IA. En 24h.
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Pas de refonte. Pas de stress. On prend votre site tel qu'il est et on le rend compréhensible pour ChatGPT, Perplexity et Gemini.
          </p>
          <Button variant="cta" size="lg" className="text-base px-10 py-6">
            Commander le Patch IA — 497 €
          </Button>
        </FadeIn>
      </div>
    </section>

    {/* Ce qui est inclus */}
    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="heading-h2 text-foreground text-center mb-12">Ce qui est inclus</h2>
        </FadeIn>
        <div className="space-y-8">
          {includes.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="glass-card-static p-6">
                <h3 className="heading-h3 text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-body">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Avant / Après */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="heading-h2 text-foreground text-center mb-12">Avant / Après</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="label-mono text-xs text-destructive/70 mb-4">Aujourd'hui</p>
              {before.map((b, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <XIcon className="text-destructive shrink-0" size={16} />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="label-mono text-xs mb-4">Après le Patch</p>
              {after.map((a, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <Check className="text-success shrink-0" size={16} />
                  <span className="text-sm text-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Pour qui */}
    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeIn>
          <h2 className="heading-h2 text-foreground mb-6">Pour qui ?</h2>
          <p className="text-body text-muted-foreground">
            Vous avez déjà un site (WordPress, Wix, Squarespace, autre). Il fonctionne. Mais il est invisible pour les IA. Le Patch IA corrige ça sans toucher à votre design ni à votre contenu.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Processus */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="heading-h2 text-foreground text-center mb-12">Le processus</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Vous commandez", "On analyse et on implémente (24h)", "Votre site est IA-ready"].map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-black text-primary mb-3">{i + 1}</p>
                <p className="text-foreground font-semibold">{step}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <Button variant="cta" size="lg" className="text-lg px-12 py-7">
            Commander maintenant — 497 €
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default StarterPage;
