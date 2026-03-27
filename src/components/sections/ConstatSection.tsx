import FadeIn from "@/components/FadeIn";

const stats = [
  {
    number: "87%",
    text: "des sites web belges sont invisibles pour ChatGPT, Perplexity et Gemini. Aucune donnée structurée. Aucun signal d'autorité. L'IA les ignore.",
  },
  {
    number: "2028",
    text: "C'est l'année où les agents IA choisiront pour vos clients. Plus de recherche manuelle. L'IA recommandera directement. Si elle ne vous connaît pas, vous n'existez pas.",
  },
  {
    number: "48h",
    text: "C'est le temps qu'il nous faut pour rendre votre entreprise visible, compréhensible et recommandable par toutes les intelligences artificielles.",
  },
];

const ConstatSection = () => (
  <section className="bg-section-alt section-py">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-4">
          Vos clients ne vous cherchent plus sur Google. Ils demandent à l'IA.
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Et l'IA ne recommande que ceux qu'elle comprend.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="glass-card p-8 h-full">
              <p className="text-5xl font-black text-primary mb-4">{s.number}</p>
              <p className="text-muted-foreground text-body">{s.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <p className="text-punchline text-center mt-12 max-w-2xl mx-auto">
          "Vous n'êtes pas en retard. Vous êtes encore dans le bon wagon. La question : pour combien de temps ?"
        </p>
      </FadeIn>
    </div>
  </section>
);

export default ConstatSection;
