import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
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
  // Handle ESC close
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card rounded-2xl max-w-4xl w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <X size={22} />
            </button>

            {/* Media Viewer */}
            <div className="relative w-full aspect-video flex items-center justify-center bg-black">
              {project.media[currentIndex].type === "image" ? (
                <img
                  src={project.media[currentIndex].src}
                  className="object-contain max-h-[80vh] transition-all"
                />
              ) : (
                <video
                  src={project.media[currentIndex].src}
                  controls
                  autoPlay
                  className="object-contain max-h-[80vh]"
                />
              )}

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    className="absolute left-4 bg-black/40 p-3 rounded-full hover:bg-black/60"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    className="absolute right-4 bg-black/40 p-3 rounded-full hover:bg-black/60"
                    onClick={handleNext}
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-accent text-pistachio-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
