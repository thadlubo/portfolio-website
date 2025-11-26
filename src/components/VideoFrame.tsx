import { useRef, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

interface VideoFrameProps {
  videoId: string;
  imageUrl: string;   // used as poster
  videoSrc?: string;  // optional video file
}

export function VideoFrame({ videoId, imageUrl, videoSrc = "/videos/VideoDiscussion.mp4" }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="handicam-frame">
      <div className="video-container">
        <div className="video-placeholder" data-video-id={videoId}>

          {/* Actual video */}
          <video
            ref={videoRef}
            className="placeholder-video"
            src={videoSrc}
            poster={imageUrl}
            preload="metadata"
            controls={isPlaying}      // controls only show after clicking play
          />

          {/* Overlay play icon – disappears on play */}
          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlay}>
              <div className="play-indicator">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <path
                    d="M9.5 8.97114C9.5 8.42904 10.0893 8.08252 10.5527 8.36852L16.2764 11.8974C16.7039 12.1616 16.7039 12.8384 16.2764 13.1026L10.5527 16.6315C10.0893 16.9175 9.5 16.571 9.5 16.0289V8.97114Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Film grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
}
