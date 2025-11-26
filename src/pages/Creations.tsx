import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ProjectModal } from "../components/ProjectModal";
import { FooterCTA } from "../components/FooterCTA";
import { ContactModal } from "../components/ContactModal";

export default function CreationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
      title: "Innovation at UL - Hackathon Project Winner",
      category: "webapp",
      description:
        ` From an Idea to a winning prototype. Honoured to win UL Hackathon 2025 with a product that transforms how student and staff access CSIS systems. Big moment. Big Gratitude.
        
        The CSIS IAM Portal is a central dashboard where students and staff can access all CSIS services through one secure login. It provides a clean, personalised interface where users can view their information, manage their roles, access tools like equipment booking or FYP portals, and update their account details, all in one place.
      
        The user portal uses a clean, minimal interface with UL-inspired colours, high contrast typography, and generous spacing. Primary actions are visually clear, with a persistent ‘Get in touch’ call-to-action and a card-based layout that makes complex information scannable and approachable for students and staff.
        • A calm, neutral background with UL green as the primary accent
        • Clear visual hierarchy using bold headings, subtle subheadings, and body text optimised for readability
        • Card-based sections for applications and roles, keeping content chunked and scannable
        • A consistent Navigation bar that anchors every page and reduces decision fatigue
        • Soft shadows, rounded corners, and balanced white space to make the experience feel approachable, not ‘enterprise-heavy’
      `,
      media: [
        { type: "image", src: "images/Hackathon/Login_Hackathon.png" },
        { type: "image", src: "images/Hackathon/AdminDashboard_Hackathon.png" },
        { type: "image", src: "images/Hackathon/AdminUserManagement_Hackathon.png" },
        { type: "image", src: "images/Hackathon/AdminRoles_Hackathon.png" },
        { type: "image", src: "images/Hackathon/AdminConnectedApps_Hackathon.png" },
        { type: "image", src: "images/Hackathon/AdminLogs_Hackathon.png" },
        { type: "image", src: "images/Hackathon/UserHome_Hackathon.png" },
      ],
      tags: ["Web App", "Dashboard", "University System"],
      color: "from-pistachio-medium to-pistachio-dark",
    },
    {
      id: 2,
      title: "Product Demo Video",
      category: "media",
      shortDescription:
        "Cinematography, cross collaboration with UL dance student. To be updated",
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
      id: 3,
      title: "Formal Business Type Headshot",
      category: "media",
      shortDescription:
        "Experimenting with portrait settings with a variable focal length and prime lenses",
      description:
        `Experimenting photo edits in Lightroom in addition to portrait settings with a variable focal length and prime lense cameras.

        Shot 1 on a Canon EOS Kiss (X7i) with:
        • 50mm - classic focal length for portraits
        • f/2.5 - shallow depth of field to keep the background soft
        • 1/50s - slow enough to let in more light while keeping motion blur under control
        • ISO 1600 - boosted sensitivity to handle indoor lighting
        • +0.3 EV - slight exposure compensation to brighten the skin tones

        Shot 2 on a Sony ILCE-7M3 (A7 III) with:
        • 24mm - wider focal length for environmental portrait
        • f/1.4 - very shallow depth of field for experiment
        • 1/60s - fast enough to freeze motion
        • ISO 1000 - moderate sensitivity for cleaner image
        • White Balance: 5200K - to match indoor lighting conditions

        Shot 3 Post-Processing in Lightroom (Photo 1):
        • Cropped to 4:5 aspect ratio and rule of thirds composition
        • Exposure: +0.25 
        • Contrast: +15 
        • Highlights: -20 
        • Shadows: +30 
        • Whites: +15
        • HSL Adjustments:
          > Reds: -10 Saturation
          > Oranges: -10 Saturation and +10
          > Green: -20 Saturation
          > Yellows: -10 Saturation
        • Sharpening: +40
        • Texture: -10
        • Clarity -10
        • Vignette: -15

        Takeaways:
        • Variable focal lengths dramatically change composition and subject emphasis.
        • Wider apertures create beautiful background blur but require precise focusing (Photo 2 taken below eye level).
        • Post-processing is key but more importantly, getting the shot and lighting right in the camera is crucial.
        • Definitely have the lights at a  better or higher angle next time to avoid unflattering shadows
        • Watch tutorials on portrait lighting setups and post-processing techniques to improve skills and find unique style.
        • Need work on posing and post-processing techniques to enhance portrait quality.

        Overall, a fun and learning experience, experimenting with different lenses, settings and editing to capture portrait shots. `,
      media: [
        { type: "image", src: "images/VariableFocalLength.jpeg" },
        { type: "image", src: "images/PrimeLense.jpeg" },
        { type: "image", src: "images/LightRoomEdit.jpeg" },
      ],
      tags: ["Digital Media", "Lightroom", "Photography"],
      color: "from-pistachio-dark to-pistachio-mint",
    },
    {
      id: 4,
      title: "Aesthetic shot from Video Production",
      category: "media",
      description:
        `An aesthetic still shot taken from a video production project, showcasing composition, lighting, and color grading techniques to create a visually appealing image.
        
        This shot was captured using a Sony ILCE-7M3 (A7 III) camera with a 50mm lens, set to an aperture of f/1.8 to achieve a shallow depth of field, and ISO 1000 to accommodate low light conditions while maintaining dark and gritty aesthetics.

        Post-processing involved color grading to enhance the mood, adjusting contrast and saturation to make the colors pop, and applying a subtle vignette to draw focus to the subject.

        Video production location is set in Clare Abbey in Ireland, known for its historic ruins and picturesque landscapes, providing a perfect backdrop for capturing aesthetic and gritty visuals.

        Overall, this still shot represents the culmination of technical skills in videography and post-production, resulting in a captivating image that tells a story and evokes emotion. 
        Production team waited for the perfect lighting and moment in the afternoon (Waiting for rain to settle in Ireland) to capture this frame during the shoot. See blog for behind the scenes footage!
        `,
      media: [
        { type: "image", src: "images/Aestethic.jpeg" },
      ],
      tags: ["Digital Media", "50 mm Lens", "Contemporary Dance"],
      color: "from-pistachio-dark to-pistachio-mint",
    },
    {
      id: 5,
      title: "Passion Shot",
      category: "media",
      description:
        ` With every step, I kept asking myself what passion is supposed to look like.
        Something bold? Something artistic? Something with edge and ambition?
        I chased those ideas for a moment, but they felt like costumes that is too polished, too loud and too far from the pulse of my actual life.

        Then, I stopped to take a breath, looked up and saw this golden light spilling over the ocean, the tide breathing its slow reassurance, a sandy nosed dog whose appreciation and joy so pure it rearranges something inside me.

        And there it was, my answer. I remembered that my truest passion isn't about performance, perfection or achievemens. It's about presence, connection and the simple, sacred truth that the smallest breathing moment can hold the deepest meaning.

        This photo captures that realization for me. Whenever my heart and mind feels crowded with shoulds and musts. I let myself step into a small moment and let it open a window to my true passion.
        `,
      media: [
        { type: "image", src: "images/Passion.jpeg" },
        { type: "image", src: "images/PassionSettings.jpeg" },
      ],
      tags: ["Digital Media", "Marketing"],
      color: "from-pistachio-dark to-pistachio-mint",
    },
    {
      id: 6,
      title: "Disposable Camera Photography Series",
      category: "media",
      shortDescription:
        "A collection of photographs taken in Malta with a disposable camera, exploring themes of nostalgia and imperfection.",
      description:
        `Shooting in Malta with a disposable camera strips away control and leaves only instinct: light, timing, and the quiet hope that something honest will appear on the film.

        Walking through Valletta’s limestone tunnels, past harbours, balconies, horse carriages, and hidden courtyards, every click felt like stitching myself into the rhythm of the island.
        
        No retakes, no edits, no digital polishing! just Malta as it is, textured, warm, a little unpredictable, and beautifully human.
        
        There’s a kind of truth in these imperfections that digital can’t imitate. Maybe that’s the magic of film: it remembers the world softly.

        A reminder to slow down, welcome imperfection, and let life reveal itself frame by frame. Because sometimes the most imperfect photos are the ones that tell the truest story.
        ` ,
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
      id: 7,
      title: "Norman's Principles: Designs that make sense",
      category: "theory",
      description:
        `A breakdown of Norman’s four essential interaction principles: mapping, affordance, feedback, and constraints. Paired with real-world good and bad examples. 
        
        This slide explores how these principles guide effective user-centered design. Created in Canva and inspired by Neubratlism aesthetic style.
        `,
      media: [
        { type: "image", src: "images/presentation1/1.png" },
        { type: "image", src: "images/presentation1/2.png" },
        { type: "image", src: "images/presentation1/3.png" },
        { type: "image", src: "images/presentation1/4.png" },
        { type: "image", src: "images/presentation1/5.png" },
        { type: "image", src: "images/presentation1/6.png" },
        { type: "image", src: "images/presentation1/7.png" },
        { type: "image", src: "images/presentation1/8.png" },
        { type: "image", src: "images/presentation1/9.png" },
        { type: "image", src: "images/presentation1/10.png" },
        { type: "image", src: "images/presentation1/11.png" },
        { type: "image", src: "images/presentation1/12.png" },
        { type: "image", src: "images/presentation1/13.png" },
        { type: "image", src: "images/presentation1/14.png" },
      ],
      tags: ["Design Research", "Usability", "Neubrutalism"],
      color: "from-pistachio-mint to-pistachio-saturated",
    },
    {
      id: 8,
      title: "Job Opportunity Portal Project",
      category: "webapp",
      description:
        "A modern, self-directed project exploring how users can create job listings and apply to opportunities through a clean, streamlined interface. Designed after college while working as a caregiver to continue developing UX and coding skills. Ultimately used as part of a portfolio that helped me landed my first job as a Software Engineer.",
      media: [
        { type: "image", src: "images/Echo_AMpage_home.PNG" },
        { type: "image", src: "images/Echo_AMpage_CreateJobPopulated.PNG" },
      ],
      tags: ["Web App", "Dashboard", "Job Portal"],
      color: "from-pistachio-medium to-pistachio-dark",
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
      {/* Footer CTA */}
      <FooterCTA onContactClick={() => setIsContactOpen(true)} />

      {/* Contact modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </motion.div>
  );
}
