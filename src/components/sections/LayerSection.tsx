import FadeIn from "@/components/FadeIn";
import { User, Globe, Bot } from "lucide-react";

const layers = [
  {
    icon: User,
    label: "HUMAIN",
    title: "Votre expertise",
    description:
      "Votre savoir-faire, votre réputation, vos années de terrain. C'est le moteur. Sans ça, rien ne tient.",
    accent: false,
  },
  {
    icon: Globe,
    label: "SITE",
    title: "Votre vitrine digitale",
    description:
      "Un site rapide, structuré, lisible par les humains ET par les machines. Le pont entre vous et l'IA.",
    accent: true,
  },
  {
    icon: Bot,
    label: "IA",
    title: "Ce que l'IA voit de vous",
    description:
      "Données structurées, signaux d'autorité, réponses claires. C'est ici que ChatGPT décide de vous recommander — ou pas.",
    accent: false,
  },
];

const LayerSection = () => (
  <section className="section-py relative overflow-hidden">
    <div className="container mx-auto px-4 max-w-4xl">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-4">
          Trois couches. Un seul objectif.
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Pour que l'IA vous recommande, il faut aligner trois niveaux. Beneloo
          les connecte pour vous.
        </p>
      </FadeIn>

      <div className="relative flex flex-col items-center gap-0">
        {/* Ligne verticale dorée de connexion */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px opacity-30 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #C9A84C 15%, #C9A84C 85%, transparent 100%)",
          }}
        />

        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <FadeIn key={layer.label} delay={i * 150}>
              <div className="relative flex items-center w-full mb-6 last:mb-0">
                {/* Numéro de couche - desktop */}
                <div className="hidden md:flex flex-col items-center mr-8 min-w-[60px]">
                  <span
                    className="text-xs font-mono tracking-widest mb-1"
                    style={{ color: "#C9A84C" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: layer.accent ? "#C9A84C" : "rgba(201,168,76,0.3)",
                      background: layer.accent
                        ? "rgba(201,168,76,0.15)"
                        : "rgba(201,168,76,0.05)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: layer.accent ? "#C9A84C" : "rgba(201,168,76,0.7)",
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`glass-card p-6 md:p-8 flex-1 transition-all duration-300 ${
                    layer.accent
                      ? "ring-1 ring-primary/30 shadow-[0_0_30px_rgba(201,168,76,0.08)]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icône mobile */}
                    <div
                      className="md:hidden w-8 h-8 rounded-full flex items-center justify-center border"
                      style={{
                        borderColor: layer.accent
                          ? "#C9A84C"
                          : "rgba(201,168,76,0.3)",
                        background: layer.accent
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(201,168,76,0.05)",
                      }}
                    >
                      <Icon
                        size={14}
                        style={{
                          color: layer.accent ? "#C9A84C" : "rgba(201,168,76,0.7)",
                        }}
                      />
                    </div>
                    <p
                      className="text-xs font-mono tracking-[0.2em]"
                      style={{ color: "#C9A84C" }}
                    >
                      {layer.label}
                    </p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-muted-foreground text-body leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>

              {/* Flèche entre les couches */}
              {i < layers.length - 1 && (
                <div className="flex justify-center my-2 md:ml-[60px] md:pl-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-40"
                  >
                    <path
                      d="M12 4L12 20M12 20L6 14M12 20L18 14"
                      stroke="#C9A84C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={500}>
        <p className="text-punchline text-center mt-12 max-w-2xl mx-auto">
          "Beneloo aligne vos trois couches. Pour que l'IA ne vous ignore plus."
        </p>
      </FadeIn>
    </div>
  </section>
);

export default LayerSection;
