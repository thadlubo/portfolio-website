import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface MediaItem {
  type: "image" | "video" | "youtube";
  src: string;
}

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    media: MediaItem[];
  } | null;
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectModal = ({
  project,
  onClose,
  currentIndex,
  setCurrentIndex,
}: ProjectModalProps) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );

  const media = project.media[currentIndex];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card rounded-2xl w-full max-w-6xl mx-4 md:flex overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-50"
            >
              <X size={22} />
            </button>

            {/* Left side - Media */}
            <div className="relative w-full md:w-2/3 bg-black flex items-center justify-center">
              {media.type === "image" && (
                <img
                  src={media.src}
                  alt={project.title}
                  className="object-contain max-h-[80vh] w-full transition-all"
                />
              )}

              {media.type === "video" && (
                <video
                  src={media.src}
                  controls
                  autoPlay
                  className="object-contain max-h-[80vh] w-full"
                />
              )}

              {media.type === "youtube" && (
                <div className="w-full aspect-video">
                  <iframe
                    src={media.src}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-none md:rounded-l-2xl"
                  />
                </div>
              )}

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/60 text-white"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/60 text-white"
                    onClick={handleNext}
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            {/* Right side - Info Section */}
            <div className="w-full md:w-1/3 bg-white dark:bg-neutral-900 flex flex-col justify-between p-6 text-left overflow-y-auto max-h-[80vh]">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-accent text-pistachio-dark rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interaction area */}
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-1 text-pistachio-dark hover:text-pistachio-medium transition">
                    <Heart size={18} />
                    <span>Like</span>
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition">
                    Comment
                  </button>
                </div>
              </div>

              {/* Comment Section */}
              <div className="mt-6 border-t border-border pt-4">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="text-pistachio-medium hover:text-pistachio-dark text-sm font-semibold"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
