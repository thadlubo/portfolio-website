import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingDots from "./components/FloatingDots";

import HeroPage from "./pages/Hero";
import StoryPage from "./pages/Story";
import JourneyPage from "./pages/Journey";
import CreationsPage from "./pages/Creations";
import { BlogPage } from "./pages/Blog";
import { useEffect } from "react";
import BlogDetailPage from "./components/BlogDetailPage";

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
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const routes = [
    { path: "/", element: <HeroPage /> },
    { path: "/story", element: <StoryPage /> },
    { path: "/journey", element: <JourneyPage /> },
    { path: "/creations", element: <CreationsPage /> },
    { path: "/blogs", element: <BlogPage onContactClick={function (): void {
      throw new Error("Function not implemented.");
    } } />},
    { path: "/blogs/rain-ruins-rhythm", element: <BlogDetailPage /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PageWrapper>{element}</PageWrapper>}
            />
          ))}
        </Routes>
      </AnimatePresence>
      {/* Background layer for floating dots */}
      <div className="fixed inset-0 pointer-events-none z-0" />
      {/* Floating dots component */}
      <FloatingDots count={50} floatX={20} floatY={20} />
    </div>
  );
}
