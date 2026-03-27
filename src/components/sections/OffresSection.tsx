import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const offers = [
  {
    name: "Le Patch IA",
    level: "STARTER",
    color: "#00A878",
    badge: "POPULAIRE",
    price: "497 €",
    priceSub: "unique",
    desc: "Votre site actuel rendu visible pour les IA en 24h. Sans refonte. Sans stress.",
    features: [
      "Audit de visibilité IA complet",
      "Configuration robots.txt IA-ready",
      "Injection JSON-LD (Organization + FAQ)",
      "Meta tags et Open Graph optimisés",
      "Soumission Google Search Console",
    ],
    cta: "Commander le Patch IA",
    ctaLink: "/starter",
    ctaSub: "Livré en 24h · Sans engagement",
  },
  {
    name: "Le Site Agent-Ready",
    level: "PREMIUM",
    color: "#7B2FBE",
    badge: null,
    price: "à partir de 2 500 €",
    priceSub: "",
    desc: "Un site premium complet, conçu de zéro pour être trouvé par Google ET recommandé par les IA.",
    features: [
      "Tout le Starter inclus",
      "Site premium glassmorphism sur mesure",
      "Vidéo hero IA + musique d'ambiance",
      "Contenu GEO/AEO rédigé et optimisé",
      "Déploiement Vercel + Cloudflare + domaine",
      "Formation utilisation (1h visio)",
    ],
    cta: "Réserver un appel stratégique",
    ctaLink: "/premium",
    ctaSub: "Livré en 48h · Démo avant engagement",
  },
  {
    name: "La Machine à Clients",
    level: "ÉCOSYSTÈME",
    color: "#FF6B35",
    badge: null,
    price: "sur devis",
    priceSub: "à partir de 5 000 €/an",
    desc: "Site + acquisition + contenu + suivi. L'écosystème digital complet qui génère des clients chaque mois.",
    features: [
      "Tout le Premium inclus",
      "Google Ads (setup + gestion mensuelle)",
      "Contenu mensuel optimisé GEO/AEO",
      "Dashboard de performance",
      "Suivi et optimisation continue",
      "Account manager dédié",
    ],
    cta: "Demander un devis",
    ctaLink: "/ecosysteme",
    ctaSub: "Engagement 6 mois · KPI garantis",
  },
  {
    name: "La Transformation Complète",
    level: "LOCOMOTIVE",
    color: "#C9A84C",
    badge: "SUR MESURE",
    price: "sur devis",
    priceSub: "à partir de 20 000 €",
    desc: "Audit, stratégie, refonte, formation, automatisation. La transformation digitale IA complète de votre entreprise.",
    features: [
      "Tout l'Écosystème inclus",
      "Audit digital complet (site, process, outils)",
      "Formation équipe à l'IA (workshops)",
      "Automatisations internes (workflows IA)",
      "Stratégie d'acquisition multicanal",
      "Accompagnement stratégique 12 mois",
    ],
    cta: "Prendre rendez-vous",
    ctaLink: "/locomotive",
    ctaSub: "Pour les PME ambitieuses · Places limitées",
  },
];

const OffresSection = () => (
  <section id="offres" className="section-py">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-4">
          Quel siège prenez-vous dans la locomotive ?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16">
          4 niveaux d'accompagnement. Du patch rapide à la transformation complète.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {offers.map((o, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden">
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: o.color }} />
              
              {o.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded"
                  style={{ background: o.color, color: "#0a0a0f" }}
                >
                  {o.badge}
                </span>
              )}

              <p className="label-mono text-xs mt-2">{o.level}</p>
              <h3 className="heading-h3 text-foreground mt-2">{o.name}</h3>
              <p className="text-3xl font-black text-primary mt-3">{o.price}</p>
              {o.priceSub && (
                <p className="text-xs text-muted-foreground">{o.priceSub}</p>
              )}
              <p className="text-muted-foreground text-sm mt-4 mb-6">{o.desc}</p>

              <div className="space-y-3 flex-1">
                {o.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="text-success shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="cta" className="w-full" asChild>
                  <Link to={o.ctaLink}>{o.cta}</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {o.ctaSub}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default OffresSection;
