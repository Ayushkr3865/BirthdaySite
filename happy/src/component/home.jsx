import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, scale } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js"

const Heart = ({ left, delay, size }) => (
  <motion.div
    className="absolute text-pink-200 "
    style={{ left, fontSize: size }}
    initial={{ y: "-10%", opacity: 0 }}
    animate={{ y: "1110%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    💖
  </motion.div>
);
const Star = ({ left, delay, size }) => (
  <motion.div
    className="absolute text-pink-200"
    style={{ left, fontSize: size }}
    initial={{ y: "-10%", opacity: 0 }}
    animate={{ y: "1110%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    ⭐
  </motion.div>
);


function FallingHearts() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const heartCount = isMobile ? 10 : 12;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: heartCount }).map((_, i) => (
        <Heart
          key={i}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 5}
          size={
            isMobile
              ? `${Math.random() * 14 + 12}px`
              : `${Math.random() * 24 + 16}px`
          }
        />
      ))}
      {Array.from({ length: heartCount }).map((_, i) => (
        <Star
          key={i}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 5}
          size={
            isMobile
              ? `${Math.random() * 14 + 12}px`
              : `${Math.random() * 24 + 16}px`
          }
        />
      ))}
    </div>
  );
}


function Home() {
   const audioRef = useRef(null);

   const startMusic = () => {
     audioRef.current.play();
   };
  const typedref = useRef(null);
  const typedInstance = useRef(null);
  useEffect(() => {
    typedInstance.current = new Typed(typedref.current, {
      strings: ["Happy Birthday"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      backDelay: 1000,
      showCursor: true,
    });
    return () => {
      typedInstance.current.destroy();
    };
  }, []);
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-purple-600 text-white text-center p-6 overflow-hidden"
        onClick={startMusic}
      >
        <FallingHearts />
        <audio ref={audioRef} src="/audio.mp3" loop preload="auto" />
        <motion.div>
          <img src="./teddy-walking.gif" className="h-80 z-10" alt="" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold  font-['DynaPuff'] mb-4 z-10"
        >
          <span>🎉</span>
          <span ref={typedref}></span>
          <span>🎉</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl mb-8 font-['DynaPuff'] max-w-xl z-10"
        >
          Today is all about celebrating you. I made this little website just to
          remind you how special you are 💖
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
          className="z-10 hover:shadow-2xl "
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/moments"
              className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
            >
              Start the Surprise →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}



export default Home
