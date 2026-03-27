import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const features = [
  "Tout l'Écosystème inclus",
  "Audit digital complet (site, process, outils)",
  "Formation équipe à l'IA (workshops)",
  "Automatisations internes (workflows IA)",
  "Stratégie d'acquisition multicanal",
  "Accompagnement stratégique 12 mois",
];

const LocomotivePage = () => (
  <Layout>
    <Helmet>
      <title>Transformation Digitale IA pour PME | Beneloo</title>
      <meta name="description" content="Audit, stratégie, refonte, formation, automatisation IA. Accompagnement 12 mois pour les PME qui veulent 5 ans d'avance. Bruxelles." />
      <meta property="og:title" content="Transformation Digitale IA pour PME | Beneloo" />
      <meta property="og:description" content="Audit, stratégie, refonte, formation, automatisation IA. Accompagnement 12 mois pour les PME qui veulent 5 ans d'avance. Bruxelles." />
    </Helmet>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <p className="label-mono mb-6">LOCOMOTIVE · SUR MESURE</p>
          <h1 className="heading-h1 text-foreground mb-6">
            La transformation digitale IA de votre entreprise. De A à Z.
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Audit, stratégie, refonte, formation, automatisation. Pour les dirigeants de PME qui veulent prendre 5 ans d'avance.
          </p>
          <Button variant="cta" size="lg" className="text-base px-10 py-6" asChild>
            <a href="https://calendly.com/debruijneb/appel-strategique-beneloo" target="_blank" rel="noopener noreferrer">Prendre rendez-vous avec Benjamin</a>
          </Button>
        </FadeIn>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn><h2 className="heading-h2 text-foreground text-center mb-6">Pour qui ?</h2></FadeIn>
        <FadeIn delay={80}>
          <p className="text-body text-muted-foreground text-center">
            PME de 10 à 200 employés. Dirigeants qui savent qu'ils doivent bouger vers l'IA mais ne savent pas par où commencer. Entreprises qui veulent un avantage concurrentiel durable, pas un coup de peinture.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20">
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

    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeIn>
          <h2 className="heading-h2 text-foreground mb-6">Le format</h2>
          <p className="text-body text-muted-foreground">
            12 mois d'accompagnement stratégique. Workshops mensuels. Livrables concrets chaque mois. Un interlocuteur unique : Benjamin.
          </p>
          <p className="text-body text-muted-foreground mt-4">
            Nous proposons aussi des immersions de 48h pour dirigeants — contactez-nous.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20 text-center">
      <FadeIn>
        <Button variant="cta" size="lg" className="text-lg px-12 py-7" asChild>
          <a href="https://calendly.com/debruijneb/appel-strategique-beneloo" target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default LocomotivePage;
