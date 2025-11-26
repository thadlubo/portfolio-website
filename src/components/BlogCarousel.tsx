import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "./BlogCard";

interface BlogCarouselProps {
  blogs: BlogPost[];
}

export function BlogCarousel({ blogs }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleReadFullArticle = () => {
    navigate("/blogs/rain-ruins-rhythm");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative max-w-6xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <ImageWithFallback
                  src={blogs[currentIndex].image}
                  alt={blogs[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-8 md:p-12 bg-gradient-to-tr from-background to-pistachio-dark">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-accent text-pistachio-dark">
                    {blogs[currentIndex].category}
                  </span>
                  <span className="text-sm text-muted-foreground">{blogs[currentIndex].date}</span>
                </div>

                <h2 className="text-xl mb-4">
                  {blogs[currentIndex].title}
                </h2>

                <p className="mb-6 line-clamp-3">
                  {blogs[currentIndex].excerpt}
                </p>

                <motion.button
                  onClick={handleReadFullArticle}
                  className="relative w-full md:w-auto items-center px-6 py-3 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl overflow-hidden shadow-2xl group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Shine sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />

                  {/* Text + Arrow */}
                  <span className="relative z-10 text-base font-medium">
                    Read Full Article
                  </span>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-pistachio-medium text-white rounded-full hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-pistachio-medium text-white hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-pistachio-mint w-8"
                : "bg-pistachio-medium hover:bg-primary"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
