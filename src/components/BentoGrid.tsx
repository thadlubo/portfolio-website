import { BlogCard } from "./BlogCard";
import type { BlogPost } from "./BlogCard";

interface BentoGridProps {
  blogs: BlogPost[];
  onReadMore?: (blog: BlogPost) => void;
}

export function BentoGrid({ blogs, onReadMore }: BentoGridProps) {
  if (blogs.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
      {blogs.map((blog, index) => {
        return (
          <BlogCard
            key={blog.id}
            blog={blog}
            index={index}
            variant="default"
            onReadMore={onReadMore}
          />
        );
      })}
    </div>
  );
}