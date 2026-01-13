import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";

const Heart = ({ left, delay, size }) => (
  <motion.div
    className="absolute text-pink-200"
    style={{ left, fontSize: size }}
    initial={{ y: "-10%", opacity: 0 }}
    animate={{ y: "110%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
   
  </motion.div>
);

function FallingHearts() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const heartCount = isMobile ? 8 : 20;

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
    </div>
  );
}




const FloatingIcon = ({ icon, left, delay }) => (
  <motion.div
    className="absolute  text-2xl"
    style={{ left }}
    initial={{ y: "110%", opacity: 0 }}
    animate={{ y: "510%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {icon}
  </motion.div>
);

function FloatingIcons() {
  const icons = ["📸", "💖", "✨", "😂","⭐"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
     
        {Array.from({ length: 8 }).map((_, i) => (
          <FloatingIcon
            key={i}
            icon={icons[i % icons.length]}
            left={`${Math.random() * 100}%`}
          />
        ))}
     
    </div>
  );
}

function Moments() {
  return (
    <>
      <motion.div className="relative min-h-screen  bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 overflow-hidden">
        {/* Background icons */}
        <FloatingIcons />
        <div className="flex items-center justify-center">
          <motion.img
            src="/teddy-hug.gif"
            alt="teddy"
            className=" md:hidden   h-60 w-60"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        {/* Heading */}
        <div className="md:mt-20">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl font-bold text-center mb-4 z-10 relative"
          >
            Our Memories 💭
          </motion.h2>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-white/80 mb-10 z-10 relative"
          >
            Moments that mean everything to me 💖
          </motion.p>

          {/* Slider */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative max-w-xl mx-auto z-10"
          >
            {/* Top Left */}
            <motion.img
              src="/teddy-hug.gif"
              alt="teddy"
              className="hidden md:block absolute -top-25 -left-25 h-40 w-40"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Top Right */}
            <motion.img
              src="/teddy-hug.gif"
              alt="teddy"
              className="hidden md:block absolute -top-25 -right-25 h-40 w-40 "
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />

            {/* Bottom Left */}
            <motion.img
              src="/teddy-hug.gif"
              alt="teddy"
              className="hidden md:block absolute -bottom-25 -left-25 h-40 w-40"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
            />

            {/* Bottom Right */}
            <motion.img
              src="/teddy-hug.gif"
              alt="teddy"
              className="hidden md:block absolute -bottom-20 -right-25 h-40 w-40"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
            />

            {/* Slider */}
            <ImageSlider />
          </motion.div>

          {/* Next button */}
          <motion.div
            className="flex justify-center mt-12 z-10 relative"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/Letter"
              className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-xl"
            >
              Read mt heart 💖
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            src="/teddy-hug.gif"
            alt="teddy"
            className=" md:block   h-60 w-60"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default Moments;





