import { VideoFrame } from "./VideoFrame";
import { BlogSection } from "./BlogSection";
import { BlogHeroSection } from "./BlogHeroSection";
const base = import.meta.env.BASE_URL; 

export default function BlogDetailPage() {
  return (
    <div className="scroll-snap-container">
      <BlogHeroSection
        date="Nov 2025"
        tags={["Behind the Scenes", "Videography", "Cinematography", "Contemporary Dance"]}
        title="Road Trip to the Abbey Ruins – Dance Session"
        description="A cinematic, rain-soaked day with a dancer from the Irish World Academy of Music and Dance ..."
        imageUrl={`${base}images/Aestethic.jpeg`}
      />

      {/* Section 1 */}
      <BlogSection
        title="Rain, Ruins, and Rhythm: Behind the Scenes"
        body={
          <>
            <p>
              Some shoot days start with a storyboard. Ours started with a road trip.
              We left the University of Limerick with a dancer from the Irish World Academy of Music and Dance, someone we had only met briefly before the project. The drive became our unexpected warm-up for an hour where moments when the camera stayed off, and the storytelling began.
            </p>
            <p>
              As we moved through the Irish countryside, we learned where she was from, how her grandmother taught her to dance by turning the living room into a stage, and why she chose UL. "It's one of the best in Europe for dance", she said with quiet pride.
              I mentioned, half jokingly, that I used to compete in hip hop competitions but was probably "too old for that now.""
              She immediately shook her head.
              "It's never too old to dance.", "Dancing has no  age."
              Then she smiled. "My grandma still dances."
            </p>
            <p>
              It was the kind of line that stays with you, even before you start filming.
            </p>
          </>
        }
        videoPlaceholder={
          <VideoFrame
            videoId="section1"
            imageUrl={`${base}videos/Intro.png`}
            videoSrc={`${base}videos/Intro.mp4`}
          />

        }
      />

      {/* Section 2 */}
      <BlogSection
        title="Arrival & Warmup"
        body={
          <>
            <p>
              When we arrived at Clare Abbey, the whole team went silent for a moment. The ruins rose out of the grey Irish light with a kind of ancient confidence. A thin mist of rain drifted across the fields, soft enough to shoot in, cold enough to make us wish we had packed thicker jackets.
            </p>
            <p>
              Before each shot, our dancer warmed up with quiet stretches, soft breaths, bare foot on wet stone.
            </p>
            <p>
              We planned three main shots:
            </p>
            <ul>
              <li>in the center of the abbey tower, framed by the vertical stone archways</li>
              <li>against a side wall, where the texture caught the light</li>
              <li>and finally, outside in the courtyard fields, where movement could open up</li>
            </ul>
          </>
        }
        videoPlaceholder={
          <VideoFrame
            videoId="section2"
            imageUrl={`${base}videos/dance.png`}
            videoSrc={`${base}videos/Dance.mp4`}
          />
        }
      />

      {/* Section 3 */}
      <BlogSection
        title="Between Rain & Review"
        body={
          <>
            <p>
              Rain kept interrupting us, so between takes we'd sprint back to the car, heater blasting, reviewing footage on tiny screens while sipping whatever warm drink we had left. These pauses became part of the rhythm of the shoot.
            </p>
            <p>
              Technically, the main aesthetic shots were captured on the Sony A7 III using a 50mm f/1.8 at ISO 1000. A balance that held onto the moody, low-light atmosphere without sacrificing clarity. We swapped in the GM 24mm for wider environmental frames.
            </p>
            <p>
              For BTS moments, we used the DJI Pocket 3 and a Sony PC-120 MiniDV handycam, which added a nostalgic, 90s-style texture to the off-camera memories.
            </p>
            <p>
              In post-production, we leaned into a darker, gritty grade, richer contrast, softened saturation, and a subtle vignette to pull the eye toward her movement. The rain, once a problem, now gave the frame its atmosphere.
            </p>
          </>
        }
        videoPlaceholder={
          <VideoFrame
            videoId="section3"
            imageUrl={`${base}videos/VideoDiscussion.png`}
            videoSrc={`${base}videos/RainReview.mp4`}
          />
        }
      />

      {/* Section 4 */}
      <BlogSection
        title="What I Learned"
        body={
          <>
            <p>
              How to work with unpredictable natural light<br />
              Balancing low light with ISO and aperture control<br />
              Using focal length to shape emotion and movement<br />
              Managing multiple camera systems for different storytelling layers<br />
              Directing performance-based shots calmly despite weather disruptions
            </p>
            <p>
              By the time we wrapped, we were freezing, soaked, and happy.
            </p>
            <p>
              We drove back into town, stopped for tea at the station, and replayed the day through shaky MiniDV clips and quiet laughter.
            </p>
            <p>
              A day of rain, ruins, and rhythm<br />
              and a reminder that some stories begin long before you start rolling.
            </p>
          </>
        }
        videoPlaceholder={
          <VideoFrame
            videoId="section4"
            imageUrl={`${base}videos/Rewind.png`}
            videoSrc={`${base}videos/Rewind.mp4`}
          />
        }
      />
    </div>
  );
}

