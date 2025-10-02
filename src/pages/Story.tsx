import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects (In construction for future use)
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    /* Story Page Container */
    <motion.div
      ref={containerRef}
      className="min-h-screen py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ y, opacity }}
        >
          { /* Top Left Text Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-6xl font-bold bg-gradient-to-l from-pistachio-mint via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent">My Story</span>
              <span className="block mt-6 text-4xl font-semibold text-pistachio-shell">
                Design is my
                <motion.span
                  className="block text-4xl text-pistachio-saturated"
                >
                  Passion
                </motion.span>
              </span>
            </motion.div>
            { }
            <motion.p
              className="text-lg text-pistachio-dark leading-relaxed "
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My story isn't a straight line. It's a collection of adventures, passions, and creative sparks.
              As a kid, I was the daring one, leaping into pools without hesitation, always chasing the thrill of discovery. 
              In my teens, that <span className="text-pistachio-medium font-bold">Curiosity</span> turned into <span className="text-pistachio-saturated font-bold">Creativity</span>; skateboarding, playing guitar, diving deep into gaming, 
              even tinkering with World of Warcraft's UI just to make it my own.
            </motion.p>

            <motion.p
              className="text-lg text-pistachio-dark leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              That mix of art, play, and code led me to study <span className="text-pistachio-shell font-bold">Computer Engineering</span> and eventually step into the world of front-end development. 
              Working alongside talented designers and developers, I found my true calling in <span className="text-pistachio-mint font-bold">UI/UX</span>, blending creativity with structure, 
              intuition with logic.
            </motion.p>

            <motion.p
              className="text-lg text-pistachio-dark leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Today, I see <span className="text-pistachio-mint font-bold">Design</span> and <span className="text-pistachio-saturated font-bold">Development</span> not just as work, but as storytelling: creating experiences that feel alive, engaging, and human. 
              This portfolio is a snapshot of that journey, the skills I've built, the <span className="text-pistachio-shell font-bold">Passions</span> I still chase, and the adventures yet to come
            </motion.p>

            {/* Key Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 text-pistachio-dark"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: '20+', label: 'Projects' },
                { number: '3+', label: 'Experience' },
                { number: '100+', label: 'Passion' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          { /* Right Image Section */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="images/THAD.png"
                alt="Creative Developer Portrait"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />
              <motion.div
                className="absolute left-4 inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-pistachio-saturated rounded-xl"
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-pistachio-shell rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
   
      </div>
    </motion.div>
  );
}

export default StoryPage;