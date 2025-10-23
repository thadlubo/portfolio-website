import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ProjectModal } from "../components/ProjectModal";

export default function CreationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "webapp", label: "Web/App Design" },
    { id: "media", label: "Digital Media" },
    { id: "theory", label: "Design Theory" },
    { id: "other", label: "Others" },
  ];

  const projects = [
    {
      id: 1,
      title: "Product Demo Video",
      category: "media",
      shortDescription:
        "Animated motion graphics created for a digital marketing campaign.",
      description:
        "Product demo video for a digital marketing campaign across social media platforms, highlighting key product features through engaging motion design and sound.",
      media: [
        { type: "youtube", src: "https://www.youtube.com/embed/SR__amDl1c8?si=iVKrqQQtRfyUNgbo" },
        { type: "youtube", src: "https://www.youtube.com/embed/d8iuUDam0Fo?si=iurFlPgUWcXd-DPQ" },
      ],
      tags: ["Digital Media", "Animation", "Marketing"],
      color: "from-pistachio-dark to-pistachio-mint",
    },
    {
      id: 2,
      title: "Disposable Camera Photography Series",
      category: "media",
      shortDescription:
        "A collection of photographs taken in Malta with a disposable camera, exploring themes of nostalgia and imperfection.",
      description:
        "LOREM IPSUM TEST SCROLL AREA. A collection of photographs taken in Malta with a disposable camera, exploring themes of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.s of nostalgia and imperfection through authentic analog aesthetics.",
      media: [
        { type: "image", src: "images/Photography.png" },
        { type: "image", src: "images/malta1.jpg" },
        { type: "image", src: "images/malta2.jpg" },
        { type: "image", src: "images/malta3.jpg" },
        { type: "image", src: "images/malta4.jpg" },
      ],
      tags: ["Digital Media", "Marketing"],
      color: "from-pistachio-dark to-pistachio-mint",
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      category: "webapp",
      description:
        "Complete redesign of a fashion e-commerce platform focusing on user experience and conversion optimization.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1080&q=80" },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { type: "image", src: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?auto=format&fit=crop&w=1080&q=80" },
      ],
      tags: ["UI/UX", "Mobile", "E-commerce"],
      color: "from-pistachio-light to-pistachio-medium",
    },
    {
      id: 4,
      title: "Job Opportunity Portal",
      category: "webapp",
      description:
        "Complex data visualization dashboard for healthcare professionals to monitor patient metrics and analytics.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1080&q=80" },
        { type: "image", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80" },
      ],
      tags: ["Web App", "Dashboard", "Job Portal"],
      color: "from-pistachio-medium to-pistachio-dark",
    },
    {
      id: 5,
      title: "Interactive Design Theory Study",
      category: "theory",
      description:
        "Research project exploring the cognitive principles behind interactive design and usability heuristics.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?auto=format&fit=crop&w=1080&q=80" },
      ],
      tags: ["Design Research", "Usability", "Theory"],
      color: "from-pistachio-mint to-pistachio-saturated",
    },
    {
      id: 6,
      title: "Restaurant Chain Rebrand",
      category: "other",
      description:
        "Complete rebranding project including visual identity, menu design, and digital presence for a restaurant chain.",
      media: [
        { type: "image", src: "https://images.unsplash.com/photo-1710799885122-428e63eff691?auto=format&fit=crop&w=1080&q=80" },
        { type: "image", src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1080&q=80" },
      ],
      tags: ["Branding", "Restaurant", "Identity"],
      color: "from-pistachio-saturated to-pistachio-shell",
    },
  ];

  // Short description helper
  const getShortDescription = (text: string, maxLength = 90) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "…";
  };

  // Video thumbnail helper
  const getThumbnailSrc = (media: any[]) => {
    const first = media[0];
    if (first.type === "youtube") {
      const match = first.src.match(/embed\/([^?]+)/);
      const videoId = match ? match[1] : null;
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : "https://via.placeholder.com/640x360?text=YouTube+Video";
    }
    return first.src;
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="mt-12 text-4xl font-bold bg-gradient-to-br from-pistachio-dark via-pistachio-medium to-pistachio-medium dark:from-pistachio-light dark:via-pistachio-dark dark:to-pistachio-mint bg-clip-text 
            text-transparent uppercase mb-4 "
          >
            My Creations
          </motion.h1>
          <motion.p
            className="text-lg sm:text-l lg:text-xl mb-8 mt-8 max-w-2xl text-pistachio-dark mx-auto"
          >
            A curated selection of projects showcasing my design process and creative solutions
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedFilter === filter.id
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-pistachio-dark bg-card border border-border hover:border-primary"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentIndex(0);
                }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    {/* Thumbnail */}
                    <ImageWithFallback
                      src={getThumbnailSrc(project.media)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Play Overlay for YouTube */}
                    {project.media[0].type === "youtube" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                    />

                    {/* Arrow icon */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                    >
                      <span className="text-primary">→</span>
                    </motion.div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-accent text-pistachio-dark rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {project.shortDescription || getShortDescription(project.description, 90)}
                    </p>

                    <span className="text-pistachio-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read more →
                    </span>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredProject === project.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal Integration */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </motion.div>
  );
}
