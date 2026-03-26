import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const MentionsLegales = () => (
  <Layout>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="heading-h1 text-foreground mb-10">Mentions légales</h1>
          <div className="space-y-6 text-body text-muted-foreground">
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Éditeur</h2>
              <p>Hakuna Matata SRL<br />Uccle, Bruxelles, Belgique<br />Représentant légal : Benjamin de Bruijne<br />Email : hello@beneloo.com</p>
            </div>
            <div>
              <h2 className="heading-h3 text-foreground mb-2">Hébergeur</h2>
              <p>Vercel Inc., San Francisco, USA<br />Cloudflare Inc., San Francisco, USA</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default MentionsLegales;
