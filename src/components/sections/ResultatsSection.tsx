import FadeIn from "@/components/FadeIn";

const results = [
  { number: "481", label: "visiteurs en 7 jours", detail: "renemanzor.com — lancé sans aucune publicité" },
  { number: "26:47", label: "durée moyenne de session", detail: "renemanzor.com — expérience immersive glassmorphism + vidéo IA" },
  { number: "2 015", label: "membres communauté", detail: "Pulse Noir — croissance 100% organique, zéro euro de publicité" },
];

const ResultatsSection = () => (
  <section id="resultats" className="bg-section-alt py-24">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-4">
          Des résultats. Pas des promesses.
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16">
          Chiffres réels. Clients réels. Zéro bullshit.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((r, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="glass-card p-8 text-center">
              <p className="text-6xl font-black text-primary mb-2">{r.number}</p>
              <p className="text-foreground font-semibold mb-2">{r.label}</p>
              <p className="text-sm text-muted-foreground">{r.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <p className="text-sm text-center text-muted-foreground italic mt-10">
          Tous les chiffres sont réels et vérifiables. On ne vend pas du rêve. On livre des résultats.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default ResultatsSection;
