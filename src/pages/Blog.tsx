import { useState } from 'react';
import { motion } from 'motion/react';
import { BlogCarousel } from '../components/BlogCarousel';
import { BentoGrid } from '../components/BentoGrid';
import { BlogDetailPage } from '../components/BlogDetailPage';
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
    title: 'Designing the Future of Web Applications',
    excerpt: 'Explore the latest trends in web design and development, and how they are shaping the future of web applications.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Design',
    date: '2023-09-15'
  },
  {
    id: '2',
    title: 'The Role of AI in Modern Software Development',
    excerpt: 'Discover how artificial intelligence is transforming software development processes and enhancing productivity.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Development',
    date: '2023-08-20'
  },
  {
    id: '3',
    title: 'Creating Engaging User Experiences',
    excerpt: 'Learn the key principles of user experience design and how to create engaging and intuitive digital experiences.',
    image: 'https://via.placeholder.com/300x200',
    category: 'UX',
    date: '2023-07-10'
  },
  {
    id: '4',
    title: 'The Impact of Cloud Computing on Businesses',
    excerpt: 'Understand the benefits and challenges of cloud computing and how it is revolutionizing the business landscape.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Cloud',
    date: '2023-06-25'
  },
  {
    id: '5',
    title: 'The Future of Mobile App Development',
    excerpt: 'Explore the latest advancements in mobile app development and their implications for the future.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Mobile',
    date: '2023-05-30'
  },
  {
    id: '6',
    title: 'The Importance of Data Security in the Digital Age',
    excerpt: 'Learn about the critical role of data security in protecting sensitive information and maintaining trust.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Security',
    date: '2023-04-15'
  }
];

export function BlogPage({ onContactClick }: BlogPageProps) {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // If a blog is selected, show the detail page
  if (selectedBlog) {
    return (
      <BlogDetailPage
        blog={selectedBlog}
        onBack={() => setSelectedBlog(null)}
      />
    );
  }

  // Latest 2 for carousel
  const latestBlogs = blogPosts.slice(0, 2);
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
            <h2 className="text-center text-gray-900 mb-2">
              More Articles
            </h2>
            <p className="text-center text-gray-600">
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