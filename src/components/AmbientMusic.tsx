/**
 * ═══════════════════════════════════════════════════════
 * MUSIQUE D'AMBIANCE SITE-WIDE
 * 
 * Ce composant gère la lecture d'une musique d'ambiance
 * sur l'ensemble du site avec un bouton toggle discret.
 * 
 * Pour activer :
 * 1. Remplacer REMPLACER_PAR_URL_MUSIQUE par l'URL du fichier audio
 * 2. Décommenter le contenu du return
 * 3. Ajouter <AmbientMusic /> dans Layout.tsx
 * 
 * Format recommandé : MP3 ou OGG, boucle fluide, < 3 Mo
 * ═══════════════════════════════════════════════════════
 */

// import { useState, useRef, useEffect } from "react";
// import { Volume2, VolumeX } from "lucide-react";

const AmbientMusic = () => {
  // ── État et refs (décommenter quand le fichier audio est prêt) ──
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);
  //
  // useEffect(() => {
  //   audioRef.current = new Audio("REMPLACER_PAR_URL_MUSIQUE");
  //   audioRef.current.loop = true;
  //   audioRef.current.volume = 0.15; // Volume bas par défaut
  //
  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.pause();
  //       audioRef.current = null;
  //     }
  //   };
  // }, []);
  //
  // const toggleMusic = () => {
  //   if (!audioRef.current) return;
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play().catch(() => {});
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return null;

  // ── Bouton toggle (décommenter quand prêt) ──
  // return (
  //   <button
  //     onClick={toggleMusic}
  //     className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-card hover:scale-110 transition-transform duration-300"
  //     aria-label={isPlaying ? "Couper la musique" : "Activer la musique"}
  //     title={isPlaying ? "Couper la musique" : "Activer la musique"}
  //   >
  //     {isPlaying ? (
  //       <Volume2 className="w-5 h-5 text-primary" />
  //     ) : (
  //       <VolumeX className="w-5 h-5 text-muted-foreground" />
  //     )}
  //   </button>
  // );
};

export default AmbientMusic;
