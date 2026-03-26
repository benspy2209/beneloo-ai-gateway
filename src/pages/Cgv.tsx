import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Cgv = () => (
  <Layout>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="heading-h1 text-foreground mb-10">Conditions générales de vente</h1>
          <div className="space-y-6 text-body text-muted-foreground">
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Prestataire</h2>
              <p>Hakuna Matata SRL, Uccle, Bruxelles, Belgique.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Services</h2>
              <p>Création de sites web, audit de visibilité IA, optimisation SEO/GEO/AEO, acquisition digitale.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Paiement</h2>
              <p>À la commande pour le Starter (497 €). Selon devis pour les autres offres. Paiement par virement bancaire ou carte.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Livraison</h2>
              <p>Starter : 24h. Premium : 48h après validation du brief. Écosystème et Locomotive : selon planning convenu.</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Droit applicable</h2>
              <p>Droit belge. Tribunal compétent : Bruxelles.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Cgv;
