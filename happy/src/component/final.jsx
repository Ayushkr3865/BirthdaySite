import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- CONFETTI ---------------- */
const ConfettiPiece = ({ left, delay, size }) => (
  <motion.div
    className="absolute"
    style={{ left, fontSize: size }}
    initial={{ y: "-10%", rotate: 0, opacity: 0 }}
    animate={{ y: "110%", rotate: 360, opacity: [0, 1, 1, 0] }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: "linear" }}
  >
    🎊
  </motion.div>
);

function Confetti() {
  const count = 25;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <ConfettiPiece
          key={i}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 3}
          size={`${Math.random() * 14 + 14}px`}
        />
      ))}
    </div>
  );
}

/* ---------------- FLOATING HEART ---------------- */
const FloatingHeart = () => (
  <motion.div
    className="text-8xl"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    ❤️
  </motion.div>
);

/* ----------------- CAKE LAYERS ----------------- */
const cakeLayers = [
  { color: "#F59E0B", height: 40 }, // Bottom layer
  { color: "#FBBF24", height: 35 }, // Middle layer
  { color: "#FEF3C7", height: 30 }, // Top layer
  { color: "#F472B6", height: 15 }, // Frosting
];

const Cake = () => {
  return (
    <div className="relative flex flex-col items-center mt-8">
      {cakeLayers.map((layer, i) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.5, type: "spring", stiffness: 120 }}
          style={{ backgroundColor: layer.color, height: layer.height }}
          className="w-40 rounded-t-lg mb-1"
        />
      ))}

      {/* Candle on top */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: cakeLayers.length * 0.5 }}
        className="relative w-2 h-12 bg-red-600 rounded-sm mt-2"
      >
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-400 text-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          🔥
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ---------------- PAGE 4 ---------------- */

export default function Final() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative min-h-screen
        bg-gradient-to-br from-[#1e3a8a] via-[#7c3aed] to-[#ec4899]
        flex flex-col items-center justify-center
        text-white p-6 overflow-hidden
      "
    >
      {/* Confetti */}
      <Confetti />

      {/* Heart */}
      <FloatingHeart />

      {/* Heading */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl font-extrabold mt-6 mb-4 text-center"
      >
        Happy Birthday! 🎂
      </motion.h1>

      {/* Cake */}
      <Cake />

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-lg text-white/90 mt-6 text-center max-w-md"
      >
        May your life be filled with love, laughter, success, and endless
        beautiful moments. You truly deserve all the happiness in the world 💖
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/"
          className="bg-white text-pink-600 px-6 py-3 rounded-2xl font-semibold shadow-xl"
        >
          Replay 🎉
        </Link>

        <a
          href="https://wa.me/"
          className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-semibold shadow-xl"
        >
          Send Love 💌
        </a>
      </motion.div>
    </motion.div>
  );
}
