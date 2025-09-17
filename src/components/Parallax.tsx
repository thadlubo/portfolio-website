import "../style.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function ParallaxText({
  children,
  speed,
  className,
}: {
  children: string;
  speed: number;
  className: string;
}) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, speed]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });

  return (
    <motion.div className={className} style={{ x }}>
      {children}
    </motion.div>
  );
}

export default function Parallax() {
  return (
    <section className="parallax-container" id="parallax">
      {/* Foreground top text */}
      <ParallaxText speed={-200} className="parallax-text top-text">
        UI/UX
      </ParallaxText>

      {/* Center image */}
      <div className="image-box">
        <img src="/hero-bg.jpg" alt="Centered" />
      </div>

      {/* Background bottom text */}
      <ParallaxText speed={200} className="parallax-text bottom-text">
        DESIGNER
      </ParallaxText>
    </section>
  );
}
