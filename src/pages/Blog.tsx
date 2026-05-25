import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BlogCarousel } from '../components/BlogCarousel';
import { BentoGrid } from '../components/BentoGrid';
import { FooterCTA } from '../components/FooterCTA';
import type { BlogPost } from '../components/BlogCard';
export type { BlogPost };

interface BlogPageProps {
  onContactClick: () => void;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/Middle.jpeg",
    category: 'Videography',
    date: '2025-11-23',
    slug: 'rain-ruins-rhythm',
  },
  {
    id: '2',
    title: 'Interactive and Modular Sculpture',
    excerpt: 'A Reflection for our Interactive and Modular Sculpture Project. Four laser-cut cuboids, one snake oracle, and about forty afternoons of absolute notions.',
    image: "images/InteractiveSculpture/CosmicSlot.png",
    category: 'Interactive Sculpture',
    date: '2026-03-20',
    slug: 'interactive-sculpture',
  },
  {
    id: '3',
    title: 'Algorithmic Soundscape Performance',
    excerpt: 'A chess game as a live, rule-driven medieval soundscape. Every move triggers a sound. Every phase shifts the atmosphere. Silence was never an option.',
    image: "images/SoundScape/ss1.jpg",
    category: 'Soundscape Performance', 
    date: '2026-13-4',
    slug: 'algorithmic-soundscape',
  },
  {
    id: '4',
    title: 'UN Global Interactive Installation',
    excerpt: 'People understand climate data intellectually, but the emotional and embodied experience of ecological collapse remains distant. Embodied Earth closes that gap by making collective behaviour viscerally visible.',
    image: "images/InteractiveArt/S1.png",
    category: 'Videography',
    date: '2026-20-2',
    slug: 'interactive-installation',
  },
  {
    id: '5',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/GroupPhoto.jpeg",
    category: 'Videography',
    date: '2025-11-23',
    slug: 'rain-ruins-rhythm',
  }
];

export function BlogPage({ onContactClick }: BlogPageProps) {
  const navigate = useNavigate();

  const latestBlogs = blogPosts.slice(0, 4);
  const remainingBlogs = blogPosts;

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
            </motion.div>

            <motion.h1
              className="mt-12 mb-4 text-4xl sm:text-4xl font-bold bg-gradient-to-b from-accent via-primary to-primary bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Latest Blogs
            </motion.h1>

            <motion.p
              className="text-lg sm:text-l lg:text-xl mb-8 mt-8 max-w-2xl text-pistachio-dark mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Insights, stories, and thoughts on design, development, and digital experiences
            </motion.p>
          </motion.div>

          {/* Carousel Section */}
          <BlogCarousel blogs={latestBlogs} />
        </div>
      </section>

      {/* Main Section - Bento Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-center text-primary mb-2">
              More Articles
            </h2>
            <p className="text-center text-primary">
              Discover more insights and stories
            </p>
          </motion.div>

          <BentoGrid blogs={remainingBlogs} onReadMore={(blog) => navigate(`/blogs/${blog.slug}`)} />
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-24" />
      <FooterCTA onContactClick={onContactClick} />
    </div>
  );
}
