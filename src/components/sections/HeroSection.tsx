import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Video placeholder / gradient fallback */}
    <div className="absolute inset-0">
      {/* <!-- VIDÉO HERO : décommenter et remplacer l'URL pour activer --> */}
      {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30" fetchPriority="high">
        <source src="REMPLACER_PAR_URL_PUBLIT_IO" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" 
           style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <FadeIn>
        <p className="label-mono mb-6">LA PASSERELLE IA DES ENTREPRISES BELGES</p>
      </FadeIn>
      <FadeIn delay={100}>
        <h1 className="heading-h1 text-foreground mb-2">
          Internet a donné la parole à tout le monde.
        </h1>
        <h1 className="heading-h1 text-primary">
          L'IA va décider qui elle écoute.
        </h1>
      </FadeIn>
      <FadeIn delay={200}>
        <p className="text-muted-foreground text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Votre site web est votre API* vers l'intelligence artificielle. Sans elle, vous êtes invisible pour les machines qui conseillent vos futurs clients.
        </p>
        <p className="text-muted-foreground text-xs mt-3 max-w-2xl mx-auto opacity-60">
          *API&nbsp;: Application Programming Interface — Un intermédiaire invisible qui permet à deux applications de se parler.
        </p>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#diagnostic">Testez votre visibilité IA — Gratuit</a>
          </Button>
          <Button variant="cta-outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#offres">Découvrir nos offres</a>
          </Button>
        </div>
      </FadeIn>

      {/* Trust bar */}
      <FadeIn delay={400}>
        <div className="mt-20">
          <p className="label-mono text-xs mb-4">PROPULSÉ PAR</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Claude AI", "Lovable", "Vercel", "Supabase", "Cloudflare"].map((name) => (
              <span
                key={name}
                className="text-sm text-foreground/35 hover:text-foreground/70 transition-opacity duration-300 cursor-default"
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
