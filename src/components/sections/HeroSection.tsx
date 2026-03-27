import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* ═══════════════════════════════════════════════════════
        VIDÉO HERO BACKGROUND
        Décommenter et remplacer l'URL quand le fichier est prêt.
        Format recommandé : MP4 H.264, 1920x1080, < 10 Mo
        ═══════════════════════════════════════════════════════ */}
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        poster="https://media.publit.io/file/w_1280/vidu-video-3223683748430716.jpg"
      >
        <source src="https://media.publit.io/file/h_480/vidu-video-3223683748430716.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" 
           style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <FadeIn>
        <p className="label-mono mb-6 hidden md:block">LA PASSERELLE IA DES ENTREPRISES BELGES</p>
      </FadeIn>
      <FadeIn delay={100}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground mb-2">
          Tout le monde finira dans le train.
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-primary">
          Nous, on vous met dans la locomotive.
        </h1>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-muted-foreground text-base md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed px-2">
          L'IA ne demande pas la permission. Elle avance. Beneloo vous place aux commandes — pas dans le wagon, pas sur le quai.
        </p>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="cta" size="lg" className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6" asChild>
            <a href="#diagnostic">Testez votre visibilité IA — Gratuit</a>
          </Button>
          <Button variant="cta-outline" size="lg" className="text-sm md:text-base px-6 md:px-8 py-5 md:py-6" asChild>
            <a href="#offres">Découvrir nos offres</a>
          </Button>
        </div>
      </FadeIn>

      {/* Trust bar */}
      <FadeIn delay={400}>
        <div className="mt-14 md:mt-20">
          <p className="label-mono text-xs mb-4">PROPULSÉ PAR</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-10">
            {["Claude AI", "Lovable", "Vercel", "Supabase", "Cloudflare"].map((name) => (
              <span
                key={name}
                className="text-xs md:text-sm text-foreground/35 hover:text-foreground/70 transition-opacity duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
