import { Link } from "react-router-dom";
import { Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-section-alt border-t border-border py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Left */}
      <div>
        <span className="text-xl font-black text-foreground">
          Benel<span style={{ color: "#C9A84C" }}>oo</span>
        </span>
        <p className="text-muted-foreground text-sm mt-3">
          La passerelle IA des entreprises belges.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Hakuna Matata SRL — Bruxelles, Belgique
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          © 2026 Beneloo. Tous droits réservés.
        </p>
      </div>

      {/* Center */}
      <div className="space-y-6">
        <div>
          <h4 className="label-mono mb-3">Navigation</h4>
          <div className="flex flex-col gap-2">
            {["Diagnostic", "Offres", "Résultats", "FAQ", "Contact"].map((l) => (
              <a
                key={l}
                href={`/#${l.toLowerCase().replace("é", "e")}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="label-mono mb-3">Légal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link>
            <Link to="/confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link>
            <Link to="/cgv" className="text-sm text-muted-foreground hover:text-foreground transition-colors">CGV</Link>
          </div>
        </div>
      </div>

      {/* Right */}
      <div>
        <h4 className="label-mono mb-3">Contact</h4>
        <a href="mailto:hello@beneloo.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
          hello@beneloo.com
        </a>
        <p className="text-sm text-muted-foreground mt-1">Bruxelles, Belgique</p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/benjamindebruijne" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/beneloo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
