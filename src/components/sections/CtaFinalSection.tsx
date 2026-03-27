import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const CtaFinalSection = () => (
  <section id="contact" className="section-py relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 60%)",
      }}
    />
    <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
      <FadeIn>
        <p className="text-punchline mb-8">
          "Ne soyez pas le dernier à comprendre. Soyez le premier à agir."
        </p>
      </FadeIn>
      <FadeIn delay={100}>
        <h2 className="heading-h2 text-foreground mb-10">
          Votre diagnostic IA gratuit. 30 secondes.
        </h2>
      </FadeIn>
      <FadeIn delay={200}>
        <Button variant="cta" size="lg" className="text-lg px-12 py-7" asChild>
          <a href="#diagnostic">Tester ma visibilité IA</a>
        </Button>
        <p className="text-muted-foreground text-sm mt-6">
          Ou réservez directement un appel stratégique :{" "}
          <a href="mailto:hello@beneloo.com" className="text-primary hover:underline">
            hello@beneloo.com
          </a>
        </p>
      </FadeIn>
    </div>
  </section>
);

export default CtaFinalSection;
