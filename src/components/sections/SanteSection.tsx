import { Shield, Calendar, MapPin, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const points = [
  { Icon: Shield, text: "Conformité déontologique intégrée dans chaque site" },
  { Icon: Calendar, text: "Prise de rendez-vous connectée (Doctolib, Calendly)" },
  { Icon: MapPin, text: "Visibilité locale maximisée (Google Business, JSON-LD LocalBusiness)" },
  { Icon: Bot, text: "Référencement par les assistants IA santé et les agents vocaux" },
];

const SanteSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <FadeIn>
            <h2 className="heading-h2 text-foreground mb-4">
              Professionnels de santé : vos patients demandent déjà à l'IA.
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Quand un patient demande à ChatGPT "trouve-moi un ostéopathe à Uccle", est-ce que vous apparaissez ?
            </p>
          </FadeIn>

          <div className="space-y-6">
            {points.map((p, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <p.Icon className="text-primary" size={20} />
                  </div>
                  <p className="text-foreground">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <Button variant="cta" className="mt-10" asChild>
              <a href="#diagnostic">Diagnostic gratuit pour votre cabinet</a>
            </Button>
          </FadeIn>
        </div>

        <div className="lg:col-span-2">
          <FadeIn delay={200}>
            <div className="glass-card-static aspect-square rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Visuel santé</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default SanteSection;
