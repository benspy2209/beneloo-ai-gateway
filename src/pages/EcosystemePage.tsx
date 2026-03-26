import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const features = [
  "Tout le Premium inclus",
  "Google Ads (setup + gestion mensuelle)",
  "Contenu mensuel optimisé GEO/AEO",
  "Dashboard de performance",
  "Suivi et optimisation continue",
  "Account manager dédié",
];

const EcosystemePage = () => (
  <Layout>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <p className="label-mono mb-6">ÉCOSYSTÈME · SUR DEVIS</p>
          <h1 className="heading-h1 text-foreground mb-6">
            On ne vous donne pas un site. On vous donne un système qui génère des clients.
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Site + acquisition + contenu + suivi. Tout ce qu'il faut pour que votre présence digitale travaille pendant que vous dormez.
          </p>
          <Button variant="cta" size="lg" className="text-base px-10 py-6" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Demander un devis personnalisé</a>
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
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeIn>
          <h2 className="heading-h2 text-foreground mb-6">ROI estimé</h2>
          <p className="text-body text-muted-foreground">
            Combien de clients votre site doit-il vous rapporter pour rentabiliser ? Un seul client supplémentaire par mois suffit souvent à couvrir l'investissement. L'Écosystème est conçu pour en générer bien plus.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <FadeIn>
          <h2 className="heading-h2 text-foreground mb-6">Engagement et garanties</h2>
          <p className="text-body text-muted-foreground">
            Engagement minimum de 6 mois. KPI définis ensemble dès le départ. Dashboard de suivi en temps réel. Reporting mensuel. Si les résultats ne sont pas au rendez-vous, on ajuste la stratégie.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20 text-center">
      <FadeIn>
        <Button variant="cta" size="lg" className="text-lg px-12 py-7" asChild>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Demander un devis</a>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default EcosystemePage;
