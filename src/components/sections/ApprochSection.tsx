import FadeIn from "@/components/FadeIn";

const rows = [
  ["Livraison en 4 à 8 semaines", "Livré en 48h"],
  ["Site brochure statique", "Site agent-ready pour les IA"],
  ["SEO basique (meta tags)", "SEO + GEO + AEO complet"],
  ["Pas de données structurées", "JSON-LD Organization, FAQ, Service"],
  ["Invisible pour ChatGPT/Perplexity", "Conçu pour être cité par les IA"],
  ["Devis à 5 000-15 000 €", "À partir de 497 €"],
  ["Maintenance = ticket de support", "Optimisation continue incluse"],
];

const ApprochSection = () => (
  <section className="bg-section-alt section-py">
    <div className="container mx-auto px-4 max-w-4xl">
      <FadeIn>
        <h2 className="heading-h2 text-foreground text-center mb-16">
          Pourquoi Beneloo et pas une agence web classique ?
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 label-mono text-xs text-destructive/70">
                  Classique
                </th>
                <th className="text-left p-4 label-mono text-xs text-gold">
                  Beneloo
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([left, right], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 text-sm" style={{ background: "rgba(230,57,70,0.03)" }}>
                    <span className="text-muted-foreground">{left}</span>
                  </td>
                  <td className="p-4 text-sm" style={{ background: "rgba(201,168,76,0.03)" }}>
                    <span className="text-foreground">{right}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {rows.map(([left, right], i) => (
            <div key={i} className="glass-card p-5 space-y-3">
              <div>
                <span className="label-mono text-xs text-destructive/70">Classique</span>
                <p className="text-sm text-muted-foreground mt-1">{left}</p>
              </div>
              <div className="border-t border-border pt-3">
                <span className="label-mono text-xs text-gold">Beneloo</span>
                <p className="text-sm text-foreground mt-1">{right}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="text-punchline text-center mt-12">
          "Les agences construisent des sites. Nous construisons des passerelles."
        </p>
      </FadeIn>
    </div>
  </section>
);

export default ApprochSection;
