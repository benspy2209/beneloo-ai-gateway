import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientMusic from "@/components/AmbientMusic";
import AudioPlayer from "@/components/AudioPlayer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>{children}</main>
    <Footer />
    <AmbientMusic />
    <AudioPlayer />
  </div>
);

export default Layout;
