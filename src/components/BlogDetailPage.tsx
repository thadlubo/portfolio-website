import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Button } from "react-bootstrap";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import type { BlogPost } from "./BlogCard";

interface BlogDetailPageProps {
  blog: BlogPost;
  onBack: () => void;
}

export function BlogDetailPage({ blog, onBack }: BlogDetailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 px-6 max-w-4xl mx-auto"
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-indigo-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 max-w-5xl mx-auto mb-12"
      >
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-6 max-w-3xl mx-auto pb-24"
      >
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              {blog.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-gray-900 mt-12 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In today's fast-paced digital landscape, creating meaningful and effective design solutions requires a deep understanding of user needs, business goals, and technical constraints. This article explores key principles and practical insights that can help designers and developers create better digital experiences.
          </p>

          <h2 className="text-gray-900 mt-12 mb-4">The Foundation</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every great design starts with a solid foundation. Understanding the core principles allows us to make informed decisions that benefit both users and stakeholders. By focusing on clarity, consistency, and user-centered thinking, we can create interfaces that not only look beautiful but also solve real problems.
          </p>

          <blockquote className="border-l-4 border-indigo-600 pl-6 my-8 italic text-gray-700">
            "Good design is obvious. Great design is transparent." - Joe Sparano
          </blockquote>

          <h2 className="text-gray-900 mt-12 mb-4">Key Takeaways</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Always prioritize user needs and business objectives</li>
            <li>Consistency in design creates familiarity and trust</li>
            <li>Test early and iterate based on real feedback</li>
            <li>Balance aesthetics with functionality</li>
            <li>Stay updated with industry trends and best practices</li>
          </ul>

          <h2 className="text-gray-900 mt-12 mb-4">Practical Applications</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            When applying these principles in your work, consider the context and constraints of each project. What works for one product may not work for another. The key is to remain flexible and adapt your approach based on user research, testing, and continuous feedback.
          </p>

          <h2 className="text-gray-900 mt-12 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Creating exceptional digital experiences is an ongoing journey of learning, experimentation, and refinement. By staying curious, embracing feedback, and continuously improving our craft, we can build products that truly make a difference in people's lives.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl">
          <h3 className="text-gray-900 mb-3">
            Want to learn more?
          </h3>
          <p className="text-gray-700 mb-6">
            Explore more articles and insights on design, development, and digital experiences.
          </p>
          <Button
            onClick={onBack}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            View All Articles
          </Button>
        </div>
      </motion.article>
    </div>
  );
}
