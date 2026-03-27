import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_URL = "/audio/beneloo.mp3";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const startPlayback = useCallback(() => {
    if (started || !audioRef.current) return;
    audioRef.current.play().then(() => setStarted(true)).catch(() => {});
  }, [started]);

  useEffect(() => {
    const events = ["click", "touchstart", "scroll"] as const;
    const handler = () => {
      startPlayback();
      events.forEach((e) => document.removeEventListener(e, handler, true));
    };
    events.forEach((e) => document.addEventListener(e, handler, { once: false, capture: true }));
    return () => {
      events.forEach((e) => document.removeEventListener(e, handler, true));
    };
  }, [startPlayback]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    const next = !isMuted;
    audioRef.current.muted = next;
    setIsMuted(next);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value) / 100;
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
      if (v === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-2xl w-[120px] md:w-[160px]"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={toggleMute}
        className="shrink-0 text-primary hover:scale-110 transition-transform"
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(volume * 100)}
        onChange={handleVolume}
        className="w-full h-1 appearance-none rounded-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, #C9A84C ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%)`,
          accentColor: "#C9A84C",
        }}
        aria-label="Volume"
      />
    </div>
  );
};

export default AudioPlayer;
