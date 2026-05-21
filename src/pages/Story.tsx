import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Gamepad2 } from 'lucide-react';
import { FooterCTA } from '../components/FooterCTA';
import { useState, useRef, useEffect } from 'react';
import { ContactModal } from '../components/ContactModal';

const SECTIONS = ['Intro', 'Childhood', 'Teenage', 'Career', 'Contact'];

export default function StoryPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      setActiveIndex(Math.round(scrollTop / height));
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={scrollRef}
      className="h-[100dvh] overflow-y-scroll"
      style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none' }}
    >
      {/* Progress dots */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {SECTIONS.map((label, i) => (
          <button key={label} onClick={() => scrollTo(i)} aria-label={label}>
            <motion.span
              className="block w-1.5 rounded-full bg-primary"
              animate={{ height: i === activeIndex ? 16 : 6, opacity: i === activeIndex ? 1 : 0.3 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
          </button>
        ))}
      </nav>

      {/* Intro */}
      <section
        ref={el => { sectionRefs.current[0] = el; }}
        className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-4 text-4xl font-bold bg-gradient-to-b from-accent via-primary to-primary bg-clip-text text-transparent leading-tight">
              My Story
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6">
              A Journey Through
              <motion.span
                className="block text-primary"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Life & Design
              </motion.span>
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              From a curious kid to a passionate creative developer,
              this is my digital scrapbook of adventures, discoveries, and dreams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Childhood */}
      <section
        ref={el => { sectionRefs.current[1] = el; }}
        className="min-h-[100dvh] flex items-center py-16 bg-gradient-to-b from-transparent via-pistachio-light to-blue-50 dark:from-transparent dark:via-transparent dark:to-pistachio-light"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl">
                Childhood
                <span className="block text-xl text-muted-foreground mt-2">Age 4–12</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                As a kid, I was <span className="text-primary">stylish</span>, <span className="text-primary">brave</span>,
                <span className="text-primary"> quick-witted</span>, and full of adventure. I was the one who dove headfirst
                into new experiences. Sometimes literally, like the first time I jumped into a pool, bold and completely naked 😂
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                Curiosity was my compass, fear was barely a concept, and uncertainty only made things more exciting.
                The unknown felt like an open door, waiting for a little chaos, courage, and imagination to walk through it.
              </p>
            </div>

            <div className="flex gap-4 justify-center lg:block lg:relative lg:h-64 mt-4 lg:mt-24">
              <motion.div
                className="bg-white p-3 shadow-xl border-2 border-white -rotate-6 lg:absolute lg:-top-10"
                whileHover={{ rotate: -3, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ImageWithFallback src="images/meAndPool.jpg" alt="Kid at the pool" className="w-36 h-28 lg:w-48 lg:h-36 object-cover" />
                <p className="text-xs text-center mt-2 font-mono text-gray-700">Pool adventures ♥</p>
              </motion.div>

              <motion.div
                className="bg-white p-3 shadow-xl border-2 border-white rotate-6 lg:absolute lg:right-0 lg:top-1"
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ImageWithFallback src="images/meAndBirthday.jpg" alt="Birthday celebration" className="w-36 h-28 lg:w-48 lg:h-36 object-cover" />
                <p className="text-xs text-center mt-2 font-mono text-gray-700">Birthday magic ✨</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teenage Years */}
      <section
        ref={el => { sectionRefs.current[2] = el; }}
        className="min-h-[100dvh] flex items-center py-16 bg-gradient-to-b from-blue-50 to-pistachio-medium dark:from-pistachio-light dark:via-pistachio-soft dark:to-pistachio-medium"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative bg-white p-3 shadow-xl border-2 border-white -rotate-3"
                  whileHover={{ scale: 1.05, rotate: -1, y: -10 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <ImageWithFallback src="images/meAndSkateboard.jpg" alt="Skateboarding adventures" className="w-full h-36 sm:h-52 object-cover" />
                  <p className="text-xs text-center mt-2 font-mono text-gray-700">Street adventures 🛹</p>
                </motion.div>

                <motion.div
                  className="relative bg-white p-3 shadow-xl border-2 border-white rotate-6 mt-6"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <ImageWithFallback src="images/meAndGuitar.jpg" alt="Guitar playing" className="w-full h-36 sm:h-52 object-cover" />
                  <p className="text-xs text-center mt-2 font-mono text-gray-700">Music passion 🎸</p>
                </motion.div>
              </div>

              <div className="flex justify-center mt-6">
                <motion.div
                  className="w-56 sm:w-64 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 rounded-lg shadow-lg"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-4 h-4" />
                    <span className="text-xs font-mono">WoW Custom UI</span>
                  </div>
                  <ImageWithFallback src="images/wowUI.png" alt="WoW UI screenshot" className="w-full h-32 sm:h-40 object-cover" />
                  <p className="text-xs mt-1 font-mono">Level 70 Achieved!</p>
                </motion.div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl">
                Teenage Years
                <span className="block text-xl text-muted-foreground mt-2">Age 13–18</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                Moving to Ireland as a teenager pushed me out of my comfort zone and into my creativity. It taught me early
                how to <span className="text-primary">problem-solve</span>, not just in school, but in the everyday challenges
                of starting over. I grew through <span className="text-primary">skateboarding</span>,{' '}
                <span className="text-primary">music</span>, and <span className="text-primary">gaming</span> (World of Warcraft).
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                I began by scripting custom UIs, then helped manage a private server, which was my first exposure to{' '}
                <span className="text-primary">coding</span> and <span className="text-primary">digital creation</span>.
                What began as play, quickly became a path shaped by grit and curiosity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University & Career */}
      <section
        ref={el => { sectionRefs.current[3] = el; }}
        className="min-h-[100dvh] flex items-center py-16 bg-gradient-to-b from-pistachio-medium via-pistachio-light to-transparent"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl">
                University & Career
                <span className="block text-xl text-muted-foreground mt-2">Currently</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                After graduating in <span className="text-primary">ECE at UL</span>, I took a necessary career break to care
                for my terminally ill mother. This time taught me <span className="text-primary">resiliency</span> and how to
                handle hard situations with <span className="text-primary">empathy and sensitivity</span>.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                Determined to re-enter the industry on my own terms, I built a portfolio of personal projects that opened the door for a{' '}
                <span className="text-primary">Software Engineer</span> and <span className="text-primary">Front-end development</span> role. I'm
                currently deepening my creative expertise through a Master's in{' '}
                <span className="text-primary">Interaction and Experience Design</span> in University of Limerick (2025-26).
              </p>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <motion.div
                className="relative bg-white p-4 lg:p-6 shadow-xl border-2 border-white lg:rotate-2"
                whileHover={{ scale: 1.03, rotate: 0, y: -12 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ImageWithFallback src="images/momAndMe.jpg" alt="University graduation" className="w-full h-56 lg:h-72 object-cover" />
                <p className="text-sm text-center mt-3 font-mono text-gray-700">ECE Graduate & Developer Journey 🎓</p>

                {/* Code snippet — hidden on mobile to prevent overflow */}
                <motion.div
                  className="hidden lg:block absolute -top-2 -right-10 bg-black/90 text-green-400 p-2 text-xs font-mono"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring', damping: 20 }}
                  viewport={{ once: true }}
                >
                  <div>{'const creative developer = () => {'}</div>
                  <div className="ml-1">{'return passion.design + skills.coding;'}</div>
                  <div>{'};'}</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        ref={el => { sectionRefs.current[4] = el; }}
        className="min-h-[100dvh] flex flex-col justify-center"
        style={{ scrollSnapAlign: 'start' }}
      >
        <FooterCTA onContactClick={() => setIsContactOpen(true)} />
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}