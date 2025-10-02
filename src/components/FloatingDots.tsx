import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pistachio palette
const colors = ["#84B067", "#A4EDA5", "#C6D67E", "#A8E6CF", "#948F4E"];

interface Dot {
  id: number;
  top: number;    // %
  left: number;   // %
  size: number;   // vw
  color: string;
  delay: number;
  duration: number;
}

interface FloatingDotsProps {
  count?: number;
  floatX?: number; // max horizontal movement in vw
  floatY?: number; // max vertical movement in vh
}

export default function FloatingDots({
  count = 36,
  floatX = 2,
  floatY = 2,
}: FloatingDotsProps) {
  const [dots] = useState<Dot[]>(() =>
    Array.from({ length: count }, (_, i) => createDot(i))
  );

  // Create a single dot with random properties
  function createDot(id: number): Dot {
    const size = 0.8 + Math.random() * 1.2; // vw
    return {
      id,
      top: Math.random() * 100,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 6,
    };
  }

  return (
    <AnimatePresence>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="fixed rounded-full cursor-pointer z-19"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}vw`,
            height: `${dot.size}vw`,
            backgroundColor: dot.color,
            filter: "blur(2px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.5 }}
          animate={{
            x: [
              0,
              floatX * (Math.random() > 0.5 ? 1 : -1),
              -floatX * (Math.random() > 0.5 ? 1 : -1),
              0,
            ],
            y: [
              0,
              floatY * (Math.random() > 0.5 ? 1 : -1),
              -floatY * (Math.random() > 0.5 ? 1 : -1),
              0,
            ],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
          // whileHover={{
          //   scale: 2,
          //   filter: "blur(0px)",
          //   opacity: 1,
          //   zIndex: 60,
          //   transition: { duration: 0.2 },
          // }} Makes hover effect too jarring and laggy
        />
      ))}
    </AnimatePresence>
  );
}
