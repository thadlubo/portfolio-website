import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingDots from "./components/FloatingDots";
import { lazy, Suspense, useEffect } from "react";

const HeroPage = lazy(() => import("./pages/Hero"));
const StoryPage = lazy(() => import("./pages/Story"));
const JourneyPage = lazy(() => import("./pages/Journey"));
const CreationsPage = lazy(() => import("./pages/Creations"));
const BlogPage = lazy(() => import("./pages/Blog").then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import("./components/BlogDetailPage"));

// Motion wrapper for page transitions to reduce clutter in main App component
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pageVariants = {
    initial: { opacity: 0, x: 1000, scale: 0.8 },
    enter: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -1000, scale: 1.2 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={pageTransition}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />

      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HeroPage /></PageWrapper>} />
            <Route path="/story" element={<PageWrapper><StoryPage /></PageWrapper>} />
            <Route path="/journey" element={<PageWrapper><JourneyPage /></PageWrapper>} />
            <Route path="/creations" element={<PageWrapper><CreationsPage /></PageWrapper>} />
            <Route path="/blogs" element={<PageWrapper><BlogPage onContactClick={() => {}} /></PageWrapper>} />
            <Route path="/blogs/rain-ruins-rhythm" element={<PageWrapper><BlogDetailPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <div className="fixed inset-0 pointer-events-none z-0" />
      <FloatingDots count={30} floatX={20} floatY={20} />
    </div>
  );
}
