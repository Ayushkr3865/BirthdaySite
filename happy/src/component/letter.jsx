import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* -------------------- STAR BACKGROUND -------------------- */

const Star = ({ left, size, delay }) => (
  <motion.div
    className="absolute text-white/70"
    style={{ left, fontSize: size }}
    initial={{ y: "110%", opacity: 0 }}
    animate={{ y: "-10%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    ⭐
  </motion.div>
);

function StarsBackground() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const count = isMobile ? 10 : 20;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 6}
          size={`${Math.random() * 10 + 10}px`}
        />
      ))}
    </div>
  );
}

/* -------------------- TYPEWRITER LETTER -------------------- */

const letter = `
Dear You 💖,

I just want you to know how special you are to me.
From the smallest laughs to the biggest memories,
every moment with you means more than words can say.

You bring light, warmth, and happiness into my life,
and I’m so grateful to have you by my side.

On your birthday and always,
I wish you endless smiles, love, and dreams come true.

Happy Birthday 🎂💝
`;

export default function Letter() {
  const [displayedText, setDisplayedText] = useState("");
  const speed = 60; // typing speed (lower = faster)

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(letter.slice(0, i));
      i++;
      if (i > letter.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="
        relative min-h-screen
        bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#9333ea]
        flex flex-col items-center justify-center
        p-6 text-white overflow-hidden
      "
    >
      {/* Stars */}
      <StarsBackground />
      {/* Letter Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
          relative z-10
          bg-white/15 backdrop-blur-md
          rounded-2xl p-6 max-w-xl
          shadow-2xl mt-10
        "
      >
        <img src="/teddy-giving-flower.gif" className="w-44 h-44" alt="" />
        <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed">
          {displayedText}
          <span className="animate-pulse">|</span>
        </pre>
      </motion.div>

      {/* Next Button */}
      <motion.div
        className="mt-10 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/final"
          className="
            bg-white text-purple-700
            px-6 py-3 rounded-2xl
            font-semibold shadow-lg
          "
        >
          One Last Surprise 🎁 →
        </Link>
      </motion.div>
    </motion.div>
  );
}
