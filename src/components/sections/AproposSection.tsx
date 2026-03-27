import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useIsMobile } from "@/hooks/use-mobile";

const AproposSection = () => {
  const isMobile = useIsMobile();
  const [revealed, setRevealed] = useState(false);

  return (
  <section className="bg-section-alt section-py">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-16">
          Qui est derrière Beneloo ?
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <FadeIn delay={100}>
            <div className="w-full max-w-[400px] mx-auto lg:mx-0 group cursor-pointer"
              onClick={() => setRevealed(!revealed)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_0_30px_rgba(201,168,76,0.08)]">
                <img
                  src="/bendos.jpg"
                  alt="Qui est derrière Beneloo ?"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${revealed ? 'opacity-0' : 'opacity-100'} lg:group-hover:opacity-0`}
                />
                <img
                  src="/ben.png"
                  alt="Benjamin de Bruijne — Fondateur de Beneloo"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${revealed ? 'opacity-100' : 'opacity-0'} lg:group-hover:opacity-100`}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={200}>
            <p className="text-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Benjamin de Bruijne.</strong> Développeur web, stratège digital et entrepreneur basé à Rhode-Saint-Genèse. Spécialisé dans la production de sites premium par intelligence artificielle. Fondateur de Pulse Noir (2 000+ membres, croissance 100% organique), créateur d'outils SaaS utilisés dans 7 pays (Bibliopulse, Pulsar), et producteur de sites immersifs pour des cinéastes, auteurs et professionnels de santé.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mt-4">
              Expert en SEO, GEO/AEO et architectures web optimisées pour l'ère des agents IA. Convaincu que chaque entreprise mérite d'exister dans le monde qui vient — pas seulement dans celui qui s'en va.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/benjamindebruijne" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://www.instagram.com/pulsenoirbe/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
            </div>
            <a 
              href="https://linktree.benjamindebruijne.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors mt-4 inline-block"
            >
              Découvrir tous mes projets →
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AproposSection;
