interface BlogHeroSectionProps {
  date: string;
  tags: string[];
  title: string;
  description: string;
  imageUrl: string;
}

export function BlogHeroSection({
  date,
  tags,
  title,
  description,
  imageUrl,
}: BlogHeroSectionProps) {
  return (
    <section className="blog-hero section-snap">
      <div className="blog-hero-inner">
        {/* Meta */}
        {/* Hero Image */}
        <div className="blog-hero-image-wrapper">
          <img
            src={imageUrl}
            alt={title}
            className="blog-hero-image"
          />
        </div>
        <p className="blog-meta">
          <span className="blog-date text-foreground-muted">{date}</span>
          <span className="blog-dot">•</span>
          <span className="blog-tags">{tags.join(" · ")}</span>
        </p>

        {/* Title */}
        <h1 className="blog-title">{title}</h1>

        {/* Description */}
        <p className="blog-description">{description}</p>
      </div>
    </section>
  );
}
