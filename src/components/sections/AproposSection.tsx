import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

const AproposSection = () => {
  const [showFace, setShowFace] = useState(false);

  return (
    <section id="apropos" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E8E8E3] text-center mb-16">
          Qui est derrière Beneloo ?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          
          <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] flex-shrink-0 mx-auto">
            <div 
              className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer"
              style={{ boxShadow: '0 0 30px rgba(201,168,76,0.08)' }}
              onMouseEnter={() => setShowFace(true)}
              onMouseLeave={() => setShowFace(false)}
              onClick={() => setShowFace(!showFace)}
            >
              <img
                src="/bendos.jpg"
                alt="Qui est derrière Beneloo ?"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: showFace ? 0 : 1,
                  transition: 'opacity 0.7s ease'
                }}
              />
              <img
                src="/ben.png"
                alt="Benjamin de Bruijne — Fondateur de Beneloo"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: showFace ? 1 : 0,
                  transition: 'opacity 0.7s ease'
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-base md:text-lg text-[#aaa] leading-relaxed">
              <strong className="text-[#E8E8E3]">Benjamin de Bruijne.</strong> Développeur web, stratège digital et entrepreneur basé à Rhode-Saint-Genèse. Spécialisé dans la production de sites premium par intelligence artificielle. Fondateur de Pulse Noir (2 000+ membres, croissance 100% organique), créateur d'outils SaaS utilisés dans 7 pays (Bibliopulse, Pulsar), et producteur de sites immersifs pour des cinéastes, auteurs et professionnels de santé.
            </p>
            <p className="text-base md:text-lg text-[#aaa] leading-relaxed mt-4">
              Expert en SEO, GEO/AEO et architectures web optimisées pour l'ère des agents IA. Convaincu que chaque entreprise mérite d'exister dans le monde qui vient — pas seulement dans celui qui s'en va.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/benjamindebruijne" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#C9A84C] transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://www.instagram.com/pulsenoirbe/" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#C9A84C] transition-colors">
                <Instagram size={22} />
              </a>
            </div>
            <a 
              href="https://linktree.benjamindebruijne.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#C9A84C] hover:text-[#D4B65A] transition-colors mt-4 inline-block"
            >
              Découvrir tous mes projets →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AproposSection;
