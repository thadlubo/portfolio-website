import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FooterCTA } from "../components/FooterCTA";
import { ContactModal } from "../components/ContactModal";
import DragWheelCarousel from "../components/DragWheelCarousel";

const SLIDES = [
  {
    id: 0,
    hero1Percent: 50,
    h1: "Hello! I'm Thaddeus",
    p: "Or Thad for short. I design, build and refine products. Then spend twice as long making them feel effortless.",
  },
  {
    id: 1,
    hero1Percent: 100,
    h1: "Frontend Engineer",
    p: "Fluent in JavaScript, lethal with CSS, and allergic to misaligned pixels. I bridge design and production code to ship fluid user experiences.",
  },
  {
    id: 2,
    hero1Percent: 0,
    h1: "UI/UX Designer",
    p: "I design products that look sharp, communicate clearly, and make users feel smarter instead of confused.",
  },
  {
    id: 3,
    hero1Percent: 50,
    h1: "Design Engineer",
    p: "Half designer, half engineer, entirely obsessed. I blend look, feel, and logic to create exceptional products that are impossible to forget.",
  },
] as const;

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

const WIPE_DURATION = 0.9;
const TEXT_DURATION = 0.8;

const wipeTrans = { duration: WIPE_DURATION, ease: EASE_IN_OUT };
const h1Trans = { type: "tween" as const, ease: "anticipate" as const, duration: TEXT_DURATION };
const pTrans = { type: "tween" as const, ease: "anticipate" as const, duration: TEXT_DURATION, delay: 0.06 };
const dotTrans = { duration: WIPE_DURATION, ease: EASE_IN_OUT };
const SWIPE_THRESHOLD = 50;

function SlideComposition({ hero1Percent }: { hero1Percent: number }) {
  return (
    <div className="absolute inset-0">
      <img src="images/Hero2.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <img
        src="images/Hero1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ clipPath: `inset(0 ${100 - hero1Percent}% 0 0)` }}
      />
    </div>
  );
}

type AnimatedLineProps = {
  current: string;
  incoming: string | null;
  direction: 1 | -1;
  transition: typeof h1Trans | typeof pTrans;
  className: string;
  as?: "h1" | "p";
};

function AnimatedLine({ current, incoming, direction, transition, className, as: Tag = "p" }: AnimatedLineProps) {
  const enterX = direction > 0 ? 80 : -80;
  const exitX = direction > 0 ? -80 : 80;

  return (
    <div className="relative">
      <motion.div
        animate={{ x: incoming ? exitX : 0, opacity: incoming ? 0 : 1 }}
        transition={incoming ? transition : { duration: 0 }}
      >
        <Tag className={className}>{current}</Tag>
      </motion.div>

      {incoming && (
        <motion.div
          key={incoming}
          className="absolute inset-x-0 top-0"
          initial={{ x: enterX, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={transition}
        >
          <Tag className={className}>{incoming}</Tag>
        </motion.div>
      )}
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);

  // refs 
  const scrollRef = useRef<HTMLDivElement>(null);       
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);    
  const currentRef = useRef(0);
  const isAnimating = useRef(false);
  const unlockedRef = useRef(false);
  const touchStartY = useRef(0);

  const activeSlide = incoming ?? current;

  useEffect(() => { currentRef.current = current; }, [current]);
  useEffect(() => { unlockedRef.current = scrollUnlocked; }, [scrollUnlocked]);

  const goTo = useCallback((target: number) => {
    if (isAnimating.current) return;
    if (target < 0 || target >= SLIDES.length) return;
    const dir: 1 | -1 = target > currentRef.current ? 1 : -1;
    setDirection(dir);
    setIncoming(target);
    isAnimating.current = true;
  }, []);

  const onWipeComplete = useCallback(() => {
    setIncoming((prev) => {
      if (prev !== null) { currentRef.current = prev; setCurrent(prev); }
      return null;
    });
    isAnimating.current = false;
  }, []);

  // ── wheel handler — reads container.scrollTop, not window.scrollY ──
  const handleWheel = useCallback((e: WheelEvent) => {
    const container = scrollRef.current;
    const atTop = container ? container.scrollTop === 0 : true;
    const unlocked = unlockedRef.current;
    const cur = currentRef.current;

    if (unlocked) {
      if (atTop && e.deltaY < 0 && cur > 0) {
        e.preventDefault();
        unlockedRef.current = false;
        setScrollUnlocked(false);
        goTo(cur - 1);
      }
      return; // let the snap container handle forward scroll naturally
    }

    // intercept everything
    e.preventDefault();
    if (isAnimating.current) return;

    if (e.deltaY > 0) {
      if (cur < SLIDES.length - 1) { goTo(cur + 1); }
      else { unlockedRef.current = true; setScrollUnlocked(true); }
    } else if (e.deltaY < 0 && cur > 0) {
      goTo(cur - 1);
    }
  }, [goTo]);

  // touch handlers 
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  // Blocks native scroll 
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!unlockedRef.current) e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    const cur = currentRef.current;
    const unlocked = unlockedRef.current;
    const container = scrollRef.current;
    const atTop = container ? container.scrollTop === 0 : true;

    if (delta > 0) {
      if (unlocked) return;
      if (cur < SLIDES.length - 1) { goTo(cur + 1); }
      else { unlockedRef.current = true; setScrollUnlocked(true); }
    } else {
      if (unlocked) {
        if (atTop && cur > 0) {
          unlockedRef.current = false;
          setScrollUnlocked(false);
          goTo(cur - 1);
        }
        return;
      }
      if (cur > 0) goTo(cur - 1);
    }
  }, [goTo]);

  //attach listeners to the CONTAINER, not window 
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false }); // ← non-passive so preventDefault works
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const enterClip = direction > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";

  return (
    <>
      {/* Snap container  */}
      <div
        ref={scrollRef}
        className="h-[100dvh] overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory", scrollbarWidth: "none" }}
      >
        {/* Hero carousel */}
        <section
          ref={el => { sectionRefs.current[0] = el; }}
          id="hero"
          className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

            {/* Image Frame */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: reduceMotion ? 0 : -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto glass rounded-3xl p-8 overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <SlideComposition hero1Percent={SLIDES[current].hero1Percent} />

                  {incoming !== null && (
                    <motion.div
                      key={`img-${incoming}`}
                      className="absolute inset-0"
                      initial={{ clipPath: enterClip }}
                      animate={{ clipPath: "inset(0 0% 0 0%)" }}
                      transition={wipeTrans}
                      onAnimationComplete={onWipeComplete}
                    >
                      <SlideComposition hero1Percent={SLIDES[incoming].hero1Percent} />
                    </motion.div>
                  )}

                  {!scrollUnlocked && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                      {SLIDES.map((s) => (
                        <motion.span
                          key={s.id}
                          className="block h-1.5 rounded-full bg-pistachio-mint"
                          animate={{ width: activeSlide === s.id ? 16 : 6, opacity: activeSlide === s.id ? 1 : 0.7 }}
                          transition={dotTrans}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.4 }}
              className="mt-2 flex flex-col items-stretch gap-4"
            >
              <AnimatedLine
                as="h1"
                current={SLIDES[current].h1}
                incoming={incoming !== null ? SLIDES[incoming].h1 : null}
                direction={direction}
                transition={h1Trans}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-accent via-primary to-primary bg-clip-text text-transparent leading-tight"
              />
              <AnimatedLine
                current={SLIDES[current].p}
                incoming={incoming !== null ? SLIDES[incoming].p : null}
                direction={direction}
                transition={pTrans}
                className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-pistachio-dark"
              />

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.4 }}
                className="mt-2 flex flex-col items-center gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <motion.button
                    onClick={() => navigate("/creations")}
                    className="group relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.025, boxShadow: "0 0 22px rgba(128, 255, 213, 0.38)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Explore Creations</span>
                  </motion.button>

                  <motion.button
                    className="group relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.025, boxShadow: "0 0 22px rgba(128, 255, 213, 0.38)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Download CV</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Carousel
        <section
          ref={el => { sectionRefs.current[0] = el; }}
          className="min-h-[100dvh] flex flex-col justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
          <DragWheelCarousel />
        </section> */}

        {/* Footer CTA */}
        <section
          ref={el => { sectionRefs.current[1] = el; }}
          className="min-h-[100dvh] flex flex-col justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
          <FooterCTA onContactClick={() => setIsContactOpen(true)} />
        </section>
      </div>
      {/* Modal outside the scroll container so it isn't clipped */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}