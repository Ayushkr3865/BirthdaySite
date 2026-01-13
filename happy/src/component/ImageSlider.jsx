import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/image4.png", "/image5.png", "/image6.png", "/image7.png"];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ImageSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full h-64 object-cover"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -100) paginate(1);
            if (offset.x > 100) paginate(-1);
          }}
        />
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
