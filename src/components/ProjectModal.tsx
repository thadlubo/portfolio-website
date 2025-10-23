import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";
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

interface Comment {
  name: string;
  text: string;
  date: string;
}

type LikeCounts = Record<number, number>;
type UserLikes = Record<number, boolean>;

export const ProjectModal = ({
  project,
  onClose,
  currentIndex,
  setCurrentIndex,
}: ProjectModalProps) => {

  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [likeCounts, setLikeCounts] = useState<LikeCounts>({});
  const [userLikes, setUserLikes] = useState<UserLikes>({});

  // Local storage load for Comments and Likes
  useEffect(() => {
    const savedComments = localStorage.getItem("projectComments");
    if (savedComments) setComments(JSON.parse(savedComments));
    
    const savedLikeCounts = localStorage.getItem("projectLikeCounts");
    if (savedLikeCounts) setLikeCounts(JSON.parse(savedLikeCounts));
    
    const savedUserLikes = localStorage.getItem("projectUserLikes");
    if (savedUserLikes) setUserLikes(JSON.parse(savedUserLikes));

  }, []);

  // Local storage save
  useEffect(() => {
    localStorage.setItem("projectComments", JSON.stringify(comments));
  }, [comments]);


  useEffect(() => {
    localStorage.setItem("projectLikeCounts", JSON.stringify(likeCounts));
  }, [likeCounts]);


  useEffect(() => {
    localStorage.setItem("projectUserLikes", JSON.stringify(userLikes));
  }, [userLikes]);


  // ESC button and scroll lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);

    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  // Default placeholder comments for each project once
  useEffect(() => {
    if (project && !comments[project.id]) {
      setComments((prev) => ({
        ...prev,
        [project.id]: [
          {
            name: "Rory",
            text: "Love the site! Reminds me of my green jacket ;)",
            date: new Date().toLocaleDateString(),
          },
          {
            name: "Lebron",
            text: "Keep the main thing, the main thing! The visuals are 🔥",
            date: new Date().toLocaleDateString(),
          },
        ],
      }));
    }
  }, [project, comments]);
  
  useEffect(() => {
    if (project && likeCounts[project.id] === undefined) {
      setLikeCounts(prev => ({
        ...prev,
        [project.id]: Math.floor(Math.random() * 50) + 10,
      }));
    }
  }, [project, likeCounts]);

  // NEED TO RETURN EARLY IF NO PROJECT
  if (!project) return null;

  const currentLikes = likeCounts[project.id] || 0;
  const isLiked = userLikes[project.id] || false;

  // Handle like/unlike toggle
  const handleLikeToggle = () => {
    const projectId = project.id;
    
    setUserLikes(prevUserLikes => ({
      ...prevUserLikes,
      [projectId]: !isLiked, 
    }));

    setLikeCounts(prevLikeCounts => ({
      ...prevLikeCounts,
      [projectId]: isLiked 
        ? prevLikeCounts[projectId] - 1 
        : (prevLikeCounts[projectId] || 0) + 1,
    }));
  };

  // Handle comment submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return; 

    const newComment: Comment = {
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString(),
    };

    setComments((prev) => ({
      ...prev,
      [project.id]: [...(prev[project.id] || []), newComment],
    }));

    setName("");
    setText("");
  };

  // Media navigation
  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );

  const media = project.media[currentIndex];

  // Need to Render modal in React Portal so it's separated from main DOM
  return ReactDOM.createPortal(
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
            className="relative bg-white dark:bg-neutral-800 rounded-2xl w-full max-w-6xl mx-4 md:flex overflow-hidden shadow-2xl max-h-[90vh]"
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

            {/* Left - Media */}
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

              {/* Dots Indicator */}
              {project.media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {project.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-pistachio-dark scale-110"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
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

            {/* Right Side Info and Comments */}
            <div className="w-full md:w-1/3 bg-white dark:bg-neutral-900 flex flex-col justify-between p-6 text-left overflow-y-auto max-h-[90vh]">
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

                {/* Like Section */}
                <div className="flex items-center gap-4 mt-4">
                  <button 
                    onClick={handleLikeToggle}
                    className={`flex items-center gap-1 transition ${
                      isLiked 
                        ? "text-red-500 hover:text-red-600"
                        : "text-pistachio-dark hover:text-pistachio-medium"
                    }`}
                  >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                    <span>{isLiked ? "Liked!" : "Like"} ({currentLikes})</span>
                  </button>
                </div>

                {/* Comments List */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Comments</h3>
                  <div className="space-y-3">
                    {(comments[project.id] || []).map((c, i) => (
                      <div
                        key={i}
                        className="border border-border rounded-lg p-3 bg-card/40"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{c.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {c.date}
                          </span>
                        </div>
                        <p className="text-sm text-foreground">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="mt-6 border-t border-border pt-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-border outline-none text-sm text-foreground placeholder:text-muted-foreground pb-1"
                  />
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-transparent border-b border-border outline-none text-sm text-foreground placeholder:text-muted-foreground pb-1"
                  />
                  <button
                    type="submit"
                    className="self-end mt-2 text-pistachio-medium hover:text-pistachio-dark text-sm font-semibold"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};