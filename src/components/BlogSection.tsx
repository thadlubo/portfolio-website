interface BlogSectionProps {
  title: string;
  body: React.ReactNode;
  videoPlaceholder: React.ReactNode;
}

export function BlogSection({ title, body, videoPlaceholder }: BlogSectionProps) {
  return (
    <section className="section-snap">
      <div className="section-container">
        {/* Left column - Text content */}
        <div className="text-column">
          <h2 className="section-title">{title}</h2>
          <div className="section-body">
            {body}
          </div>
        </div>

        {/* Right column - Video frame */}
        <div className="video-column">
          {videoPlaceholder}
        </div>
      </div>
    </section>
  );
}
