import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';


export function Hero() {

  const [hoverState, setHoverState] = useState<
    "none" | "left" | "right"
  >("none");

  const getTitle = () => {
    switch (hoverState) {
      case "left":
        return "UI/UX Designer";
      case "right":
        return "Frontend Developer";
      default:
        return "Creative Developer";
    }
  };

  const getSubtitle = () => {
    switch (hoverState) {
      case "left":
        return "Crafting intuitive user experiences with thoughtful design, wireframing, and prototyping that puts users first.";
      case "right":
        return "Building responsive, performant web applications with modern frameworks and cutting-edge technologies.";
      default:
        return "I craft beautiful digital experiences with modern web technologies, blending creativity with functionality to bring ideas to life.";
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Interactive Image Section */}
        <motion.div
          className="relative group mb-"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Image Container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto glass rounded-3xl p-8 overflow-hidden">

            {/* Left Hover Indicator */}
            <motion.div
              className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0.7 }}
              animate={{
                x: [-5, 5, -5],
                opacity: hoverState === "left" ? 0 : 0.7,
                scale: hoverState === "left" ? 0.9 : 1,
              }}
              transition={{
                x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <Button
                variant="light"
                className="rounded-full glass p-2 pointer-events-none border-0 shadow-lg"
              >
                <ChevronRight size={20} />
              </Button>
            </motion.div>

            {/* Right Hover Indicator */}
            <motion.div
              className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0.7 }}
              animate={{
                x: [5, -5, 5],
                opacity: hoverState === "right" ? 0 : 0.7,
                scale: hoverState === "right" ? 0.9 : 1,
              }}
              transition={{
                x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <Button
                variant="light"
                className="rounded-full glass p-2 pointer-events-none border-0 shadow-lg"
              >
                <ChevronLeft size={20} />
              </Button>
            </motion.div>

            {/* Base Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="images/THAD.png"
                alt="Creative Developer Portrait"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />

              {/* Left Hover Zone */}
              <motion.div
                className="absolute inset-0 cursor-pointer"
                onMouseEnter={() => setHoverState("left")}
                onMouseLeave={() => setHoverState("none")}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoverState === "left" ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="images/PortfolioLeft.png"
                  alt="UI/UX Designer"
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: "center center",
                  }}
                />
              </motion.div>

              {/* Right Hover Zone */}
              <motion.div
                className="absolute inset-0 cursor-pointer"
                onMouseEnter={() => setHoverState("right")}
                onMouseLeave={() => setHoverState("none")}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoverState === "right" ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="images/PortfolioRight.png"
                  alt="Frontend Developer"
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: "center center",
                  }}
                />
              </motion.div>

              {/* Hover Zones */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    "polygon(0 0, 50.5% 0, 50.5% 100%, 0 100%)",
                }}
                onMouseEnter={() => setHoverState("left")}
                onMouseLeave={() => setHoverState("none")}
              />
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    "polygon(49.5% 0, 100% 0, 100% 100%, 49.5% 100%)",
                }}
                onMouseEnter={() => setHoverState("right")}
                onMouseLeave={() => setHoverState("none")}
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          {/* Title */}
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent"
            key={hoverState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getTitle()}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            // className="text-lg sm:text-xl lg:text-2xl mb-8 mt-8 max-w-3xl bg-gradient-to-l from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent"
            className="text-lg sm:text-xl lg:text-2xl mb-8 mt-8 max-w-3xl text-pistachio-dark"
            key={`${hoverState}-subtitle`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {getSubtitle()}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-pistachio-dark border border-border hover:bg-pistachio-light hover:text-pistachio-dark text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              // need onClick to scroll to creations section
            >
              Explore Creations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-pistachio-medium border border-border hover:bg-pistachio-light text-pistachio-dark px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="p-3 rounded-full glass bg-card border border-border hover:bg-pistachio-medium transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="p-3 rounded-full glass bg-card border border-border hover:bg-pistachio-medium transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="p-3 rounded-full glass bg-card border border-border hover:bg-pistachio-medium transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;