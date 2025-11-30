import { useState } from 'react';
import { motion } from 'motion/react';
import { BlogCarousel } from '../components/BlogCarousel';
import { BentoGrid } from '../components/BentoGrid';
import BlogDetailPage from '../components/BlogDetailPage';
import { FooterCTA } from '../components/FooterCTA';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

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
    date: '2025-11-23'
  },
  {
    id: '2',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/SideWallGimble.jpeg",
    category: 'Videography',
    date: '2025-11-23'
  },
  {
    id: '3',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/Outside.jpeg",
    category: 'Videography',
    date: '2025-11-23'
  },
  {
    id: '4',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/DanceLol.jpeg",
    category: 'Videography',
    date: '2025-11-23'
  },
  {
    id: '5',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/Middle2.jpeg",
    category: 'Videography',
    date: '2025-11-23'
  },
  {
    id: '6',
    title: 'Rain, Ruins, and Rhythm: Behind the Scenes',
    excerpt: 'A glimpse into our shoot at Clare Abbey. Rain, ruins, a tough barefoot dancer, and the small moments that made the day feel like its own story behind the camera.',
    image: "images/videography/GroupPhoto.jpeg",
    category: 'Videography',
    date: '2025-11-23'
  }
];

export function BlogPage({ onContactClick }: BlogPageProps) {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // If a blog is selected, show the detail page
  if (selectedBlog) {
    return (
      <BlogDetailPage
      />
    );
  }

  // Latest 2 for carousel
  const latestBlogs = blogPosts.slice(0, 3);
  // Remaining for bento grid. add slice (2)
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
              className="mt-12 text-4xl font-bold bg-gradient-to-br from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block"
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

          <BentoGrid blogs={remainingBlogs} onReadMore={setSelectedBlog} />
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-24" />
      <FooterCTA onContactClick={onContactClick} />
    </div>
  );
}