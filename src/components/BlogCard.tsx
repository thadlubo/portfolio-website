import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

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

export function BlogCard({
  blog,
  index,
  variant = "default",
  onReadMore,
}: BlogCardProps) {
  const isLarge = variant === "large";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative cursor-pointer ${
        isLarge ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      onClick={() => onReadMore && onReadMore(blog)}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border group-hover:shadow-2xl transition-all duration-500">
        {/* Thumbnail */}
        <div
          className={`relative overflow-hidden ${
            isLarge ? "h-80 md:h-96" : "h-64"
          }`}
        >
          <ImageWithFallback
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"
          />

          {/* Top-right arrow icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 sm:w-11 sm:h-11 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={(e) => {
              e.stopPropagation();
              onReadMore && onReadMore(blog);
            }}
          >
            <span className="text-primary text-lg">→</span>
          </motion.div>
        </div>

        {/* Card Info */}
        <div className="p-6 relative">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs rounded-full bg-accent text-pistachio-dark">
              {blog.category}
            </span>
            <span className="text-xs text-gray-500">{blog.date}</span>
          </div>

          <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex items-center justify-between mt-2">
            <span className="text-pistachio-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read more →
            </span>
          </div>

          {/* Bottom animated bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-[width] duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
}
