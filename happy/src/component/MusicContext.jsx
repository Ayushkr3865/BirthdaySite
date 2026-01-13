import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    audio.volume = 0.7;

    audio
      .play()
      .then(() => {
        setStarted(true);
      })
      .catch(() => {
        // Browser blocked autoplay – ignore silently
      });
  };

  return (
    <MusicContext.Provider value={{ startMusic, started }}>
      <audio
        ref={audioRef}
        src="/audio.mp3"
        loop
        preload="auto"
        playsInline // important for iOS
      />
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
