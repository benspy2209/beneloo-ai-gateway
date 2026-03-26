import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Confidentialite = () => (
  <Layout>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="heading-h1 text-foreground mb-10">Politique de confidentialité</h1>
          <div className="space-y-6 text-body text-muted-foreground">
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Données collectées</h2>
              <p>Email et URL via le diagnostic de visibilité IA.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Finalité</h2>
              <p>Envoi du rapport de diagnostic. Contact commercial uniquement si consentement explicite. Aucune revente de données à des tiers.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Vos droits</h2>
              <p>Droit d'accès, de rectification et de suppression : hello@beneloo.com</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Cookies</h2>
              <p>Analytiques uniquement. Aucun cookie publicitaire.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Confidentialite;
