import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    q: "Qu'est-ce que Beneloo ?",
    a: "Beneloo est la passerelle IA des entreprises belges. Basé à Bruxelles, Beneloo conçoit des sites web premium optimisés pour être trouvés par Google ET recommandés par les intelligences artificielles (ChatGPT, Perplexity, Gemini). Chaque site livré est un écosystème digital complet : design, SEO, GEO/AEO, vidéo, hébergement sécurisé, données structurées.",
  },
  {
    q: "Qu'est-ce que le GEO et l'AEO ?",
    a: "Le GEO (Generative Engine Optimization) et l'AEO (Answer Engine Optimization) sont les techniques qui permettent à un site d'être cité et recommandé par les intelligences artificielles. Quand un utilisateur pose une question à ChatGPT ou Perplexity, ces IA cherchent des sources fiables avec des données structurées, du contenu factuel et des signaux d'autorité. Sans GEO/AEO, votre site est ignoré.",
  },
  {
    q: "En combien de temps mon site est-il livré ?",
    a: "Le Patch IA (Starter) est livré en 24 heures. Un site premium complet est livré en 48 heures après validation du brief. Ce délai inclut le design, le contenu, la vidéo hero, l'optimisation SEO/GEO/AEO et le déploiement sur votre domaine.",
  },
  {
    q: "Combien coûte un site Beneloo ?",
    a: "Le Patch IA démarre à 497 € pour rendre un site existant visible aux IA. Un site premium complet démarre à 2 500 €. L'accompagnement complet avec acquisition de clients (Écosystème) est sur devis. Chaque offre est détaillée sur cette page avec un lien vers un appel stratégique gratuit.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ET sur ChatGPT ?",
    a: "Oui. Chaque site Beneloo intègre une double optimisation dès la construction : SEO classique (robots.txt, sitemap, meta tags, Core Web Vitals) et GEO/AEO (JSON-LD Organization, FAQ Schema, contenu d'autorité, formulations d'expertise). Votre site est conçu pour être indexé par Google et cité par les IA.",
  },
  {
    q: "Qu'est-ce qu'un site agent-ready ?",
    a: "Un site agent-ready est structuré pour que les agents IA (ChatGPT, Perplexity, Gemini, assistants vocaux, chatbots) puissent le lire, le comprendre et le recommander. Cela passe par des données structurées JSON-LD, des FAQ exploitables par les machines, et un contenu formulé pour répondre directement aux questions posées par les utilisateurs aux IA.",
  },
  {
    q: "Est-ce que ça fonctionne pour mon secteur ?",
    a: "Notre méthodologie s'applique à tous les secteurs : santé, professions libérales, commerce, services, industrie, créatifs. Le secteur santé (médecins, ostéopathes, kinés, dentistes) est notre spécialisation principale, mais la mécanique GEO/AEO fonctionne pour toute entreprise qui veut être recommandée par les IA.",
  },
  {
    q: "Où êtes-vous basés ?",
    a: "Beneloo est basé à Uccle, Bruxelles, Belgique. Nous travaillons avec des clients dans toute la Belgique francophone et à l'international. Tous les échanges se font en français.",
  },
  {
    q: "Pourquoi 48h et pas 4 semaines comme une agence classique ?",
    a: "Notre pipeline de production est propulsé par l'intelligence artificielle. Le design, le contenu, la vidéo, la musique et l'optimisation SEO/GEO sont générés et assemblés par IA, puis validés et affinés par un expert humain. C'est cette combinaison qui permet une livraison en 48 heures avec une qualité premium.",
  },
  {
    q: "Le diagnostic de visibilité IA est vraiment gratuit ?",
    a: "Oui, sans engagement. Entrez votre URL sur cette page, nous analysons automatiquement 5 critères de visibilité IA (robots.txt, JSON-LD, FAQ Schema, Open Graph, meta description) et vous envoyons un score sur 100 avec les recommandations par email.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-12">
          Questions fréquentes
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card-static px-6 border-0"
            >
              <AccordionTrigger className="text-foreground text-left font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-body pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);

export default FaqSection;
