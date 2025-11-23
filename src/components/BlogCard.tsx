import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Button } from "react-bootstrap";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

interface BlogCardProps {
  blog: BlogPost;
  index: number;
  variant?: "default" | "large";
  onReadMore?: (blog: BlogPost) => void;
}

export function BlogCard({ blog, index, variant = "default", onReadMore }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ${
        variant === "large" ? "row-span-2" : ""
      }`}
    >
      <div className={`relative ${variant === "large" ? "h-96" : "h-64"} overflow-hidden`}>
        <ImageWithFallback
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
            {blog.category}
          </span>
          <span className="text-xs text-gray-500">{blog.date}</span>
        </div>
        
        <h3 className="mb-3 text-gray-900 line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {blog.excerpt}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300"
          onClick={() => onReadMore && onReadMore(blog)}
        >
          Read More
        </Button>
      </div>
    </motion.div>
  );
}