import { Linkedin, Instagram } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const AproposSection = () => (
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
            <img
              src="/ben.png"
              alt="Benjamin de Bruijne, fondateur de Beneloo"
              className="w-full max-w-[300px] aspect-square object-cover rounded-2xl"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 0 30px rgba(201,168,76,0.08)',
              }}
              loading="lazy"
            />
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={200}>
            <p className="text-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Benjamin de Bruijne.</strong> Développeur web, stratège digital et entrepreneur basé à Bruxelles. Spécialisé dans la production de sites premium par intelligence artificielle. Fondateur de Pulse Noir (2 000+ membres, croissance 100% organique), créateur d'outils SaaS utilisés dans 7 pays (Bibliopulse, Pulsar), et producteur de sites immersifs pour des cinéastes, auteurs et professionnels de santé.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mt-4">
              Expert en SEO, GEO/AEO et architectures web optimisées pour l'ère des agents IA. Convaincu que chaque entreprise mérite d'exister dans le monde qui vient — pas seulement dans celui qui s'en va.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/benjamindebruijne" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://www.instagram.com/beneloo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default AproposSection;
