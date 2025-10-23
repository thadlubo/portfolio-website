import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const hoverInfo = {
  none: {
    title: "Creative Developer",
    subtitle:
      "I craft beautiful digital experiences with modern web technologies, blending creativity with functionality to bring ideas to life.",
  },
  left: {
    title: "UI/UX Designer",
    subtitle:
      "Crafting intuitive user experiences with thoughtful design, wireframing, and prototyping that puts users first.",
  },
  right: {
    title: "Frontend Developer",
    subtitle:
      "Building responsive, performant web applications with modern frameworks and cutting-edge technologies.",
  },
};

const HoverArrow = ({
  side,
  hoverState,
  Icon,
}: {
  side: "left" | "right";
  hoverState: "none" | "left" | "right";
  Icon: typeof ChevronLeft;
}) => (
  <motion.div
    className={`absolute z-10 ${side}-4 top-10 -translate-y-1/2`}
    initial={{ opacity: 0.7 }}
    animate={{
      x: side === "left" ? [-5, 5, -5] : [5, -5, 5],
      opacity: hoverState === side ? 0 : 0.7,
      scale: hoverState === side ? 0.9 : 1,
    }}
    transition={{
      x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    }}
  >
    <Button variant="light" className="rounded-full glass p-2 border-0 shadow-lg pointer-events-none">
      <Icon size={20} />
    </Button>
  </motion.div>
);

const HoverZone = ({
  side,
  hoverState,
  setHoverState,
  imgSrc,
  alt,
}: {
  side: "left" | "right";
  hoverState: "none" | "left" | "right";
  setHoverState: (s: "none" | "left" | "right") => void;
  imgSrc: string;
  alt: string;
}) => (
  <motion.div
    className="absolute inset-0 cursor-pointer"
    onMouseEnter={() => setHoverState(side)}
    onMouseLeave={() => setHoverState("none")}
    initial={{ opacity: 0 }}
    animate={{ opacity: hoverState === side ? 1 : 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={imgSrc} alt={alt} className="w-full h-full object-cover object-center" />
  </motion.div>
);

export default function Hero() {
  const [hoverState, setHoverState] = useState<"none" | "left" | "right">("none");
  const { title, subtitle } = hoverInfo[hoverState];

  const socials = [
    { href: "https://github.com/thadlubo", icon: Github },
    { href: "https://www.linkedin.com/in/thaddeus-lubo/", icon: Linkedin },
    { href: "mailto:thadlubo@gmail.com", icon: Mail },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Interactive Image */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Hover Me Indicator */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto glass rounded-3xl p-8 overflow-hidden">
            <HoverArrow side="left" hoverState={hoverState} Icon={ChevronRight} />
            <HoverArrow side="right" hoverState={hoverState} Icon={ChevronLeft} />

            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img src="images/THAD.png" alt="Creative Developer Portrait" className="w-full h-full object-cover" />

              <HoverZone
                side="left"
                hoverState={hoverState}
                setHoverState={setHoverState}
                imgSrc="images/PortfolioLeft.png"
                alt="UI/UX Designer"
              />
              <HoverZone
                side="right"
                hoverState={hoverState}
                setHoverState={setHoverState}
                imgSrc="images/PortfolioRight.png"
                alt="Frontend Developer"
              />

              {/* Hover Zones */}
              {["left", "right"].map((side) => (
                <div
                  key={side}
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      side === "left"
                        ? "polygon(0 0, 50.5% 0, 50.5% 100%, 0 100%)"
                        : "polygon(49.5% 0, 100% 0, 100% 100%, 49.5% 100%)",
                  }}
                  onMouseEnter={() => setHoverState(side as "left" | "right")}
                  onMouseLeave={() => setHoverState("none")}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Title */}
          <motion.h1
            key={hoverState}
            className="text-6xl font-bold bg-gradient-to-r from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`${hoverState}-subtitle`}
            className="text-lg sm:text-xl lg:text-2xl mb-8 mt-8 max-w-3xl text-pistachio-dark mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          
          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="bg-pistachio-dark text-white px-8 py-3 rounded-full hover:bg-pistachio-light hover:text-pistachio-dark transition-transform duration-300 hover:scale-105">
              Explore Creations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-pistachio-medium text-pistachio-dark px-8 py-3 rounded-full border hover:bg-pistachio-light transition-transform duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex justify-center space-x-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socials.map(({ href, icon: Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass bg-card border text-pistachio-dark hover:bg-pistachio-dark hover:text-pistachio-light transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
