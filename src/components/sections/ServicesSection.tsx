import { Globe, Search, Sparkles, BarChart3, Video, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  { Icon: Globe, title: "Site premium agent-ready", desc: "Conçu pour être lu par les humains ET compris par les IA. Livré en 48h sur votre domaine." },
  { Icon: Search, title: "SEO nouvelle génération", desc: "Robots.txt IA-ready, sitemap, meta tags, Core Web Vitals. Le socle technique que 90% des sites n'ont pas." },
  { Icon: Sparkles, title: "GEO/AEO intégré", desc: "JSON-LD, FAQ Schema, contenu d'autorité. Ce qui fait que ChatGPT, Perplexity et Gemini vous citent." },
  { Icon: BarChart3, title: "Diagnostic & audit IA", desc: "On mesure votre visibilité IA actuelle. On identifie les failles. On corrige." },
  { Icon: Video, title: "Identité immersive", desc: "Vidéo hero IA, musique d'ambiance, design glassmorphism. Une expérience qui marque." },
  { Icon: Zap, title: "Acquisition & croissance", desc: "Google Ads, LinkedIn, contenu stratégique. On amène les clients, pas juste les visiteurs." },
];

const ServicesSection = () => (
  <section className="bg-section-alt section-py">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-4">
          On ne fait pas des sites web. On connecte votre business à l'IA.
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-3xl mx-auto">
          Un site Beneloo n'est pas une brochure en ligne. C'est une interface entre votre entreprise et les machines qui influencent vos clients.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="glass-card p-8 h-full">
              <s.Icon className="text-primary mb-4" size={32} />
              <h3 className="heading-h3 text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-body">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
