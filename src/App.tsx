import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import HeroPage from "./pages/Hero";
import StoryPage from "./pages/Story";
import JourneyPage from "./pages/Journey";
import CreationsPage from "./pages/Creations";
import ContactPage from "./pages/Connect";
import FloatingDots from "./components/FloatingDots";

export default function App() {
  const [currentPage, setCurrentPage] = useState("hero");

  const pageVariants = {
    initial: { opacity: 0, x: 100, scale: 0.95 },
    enter: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 1.05 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroPage />;
      case 'story':
        return <StoryPage />;
      case 'journey':
        return <JourneyPage />;
      case 'creations':
        return <CreationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HeroPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="relative z-20 pt-12">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      {/* Page transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={pageTransition}
          className="relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-transparent to-accent/5 pointer-events-none z-0" />

      {/* Floating dots component */}
      <FloatingDots count={50} floatX={10} floatY={10} />
    </div>
  );
}
