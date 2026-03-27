import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const features = [
  "Tout le Starter inclus",
  "Site premium glassmorphism sur mesure",
  "Vidéo hero IA + musique d'ambiance",
  "Contenu GEO/AEO rédigé et optimisé",
  "Déploiement Vercel + Cloudflare + domaine",
  "Formation utilisation (1h visio)",
];

const steps = [
  { n: "1", title: "Appel stratégique", desc: "30 min pour comprendre votre activité, vos objectifs, votre cible." },
  { n: "2", title: "Brief & validation", desc: "Nous vous proposons une direction. Vous validez." },
  { n: "3", title: "Production (48h)", desc: "Design, contenu, vidéo, SEO, GEO/AEO. Tout est produit et assemblé." },
  { n: "4", title: "Livraison & formation", desc: "Votre site est déployé. 1h de formation visio incluse." },
];

const faqsPremium = [
  { q: "Puis-je voir une démo avant de m'engager ?", a: "Oui. Nous vous montrons des exemples de réalisations lors de l'appel stratégique. Aucun engagement avant validation du brief." },
  { q: "Le contenu est-il rédigé par vous ?", a: "Oui, entièrement. Nous rédigeons le contenu optimisé GEO/AEO à partir des informations que vous nous fournissez lors du brief." },
  { q: "Puis-je modifier le site après livraison ?", a: "Oui. Vous recevez une formation de 1h et un accès complet à votre site." },
];

const PremiumPage = () => (
  <Layout>
    <Helmet>
      <title>Site Premium Agent-Ready — Conçu pour Google et les IA | Beneloo</title>
      <meta name="description" content="Site web premium livré en 48h. Design glassmorphism, vidéo IA, SEO + GEO/AEO complet. À partir de 2 500 €. Bruxelles." />
      <meta property="og:title" content="Site Premium Agent-Ready — Conçu pour Google et les IA | Beneloo" />
      <meta property="og:description" content="Site web premium livré en 48h. Design glassmorphism, vidéo IA, SEO + GEO/AEO complet. À partir de 2 500 €. Bruxelles." />
    </Helmet>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <p className="label-mono mb-6">PREMIUM · À PARTIR DE 2 500 €</p>
          <h1 className="heading-h1 text-foreground mb-6">
            Un site conçu pour les humains ET les machines.
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Design premium, vidéo IA, musique, SEO, GEO/AEO. L'expérience complète, livrée en 48h.
          </p>
          <Button variant="cta" size="lg" className="text-base px-10 py-6" asChild>
            <a href="https://calendly.com/debruijneb/appel-strategique-beneloo" target="_blank" rel="noopener noreferrer">Réserver un appel stratégique</a>
          </Button>
        </FadeIn>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn><h2 className="heading-h2 text-foreground text-center mb-10">Ce qui est inclus</h2></FadeIn>
        <div className="space-y-4">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="flex items-center gap-3">
                <Check className="text-success shrink-0" size={18} />
                <span className="text-foreground">{f}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn><h2 className="heading-h2 text-foreground text-center mb-12">Le processus en 4 étapes</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="glass-card p-6">
                <p className="text-2xl font-black text-primary mb-2">{s.n}</p>
                <h3 className="heading-h3 text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn><h2 className="heading-h2 text-foreground text-center mb-10">FAQ Premium</h2></FadeIn>
        <div className="space-y-6">
          {faqsPremium.map((f, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="glass-card-static p-6">
                <h3 className="heading-h3 text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-body">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 text-center">
      <FadeIn>
        <Button variant="cta" size="lg" className="text-lg px-12 py-7" asChild>
          <a href="https://calendly.com/debruijneb/appel-strategique-beneloo" target="_blank" rel="noopener noreferrer">Réserver un appel stratégique</a>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default PremiumPage;
