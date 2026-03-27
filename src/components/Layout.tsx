import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientMusic from "@/components/AmbientMusic";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>{children}</main>
    <Footer />
    {/* Musique d'ambiance — actuellement désactivée (return null), 
        décommenter le contenu dans AmbientMusic.tsx quand le fichier audio est prêt */}
    <AmbientMusic />
  </div>
);

export default Layout;
