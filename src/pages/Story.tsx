import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Gamepad2 } from 'lucide-react';
import { FooterCTA } from './FooterCTA';
import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';


export default function StoryPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <div className="min-h-screen">
      {/* Story Intro Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-4 text-4xl font-bold bg-gradient-to-br from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block">
              My Story</span>
            <h1 className="text-5xl lg:text-7xl mb-6">
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
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
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

      {/* Childhood Section */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-transparent via-pistachio-light to-blue-50 dark:from-transparent dark:via-transparent dark:to-pistachio-light">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">
                  Childhood
                  <span className="block text-2xl text-muted-foreground mt-2">Age 4-12</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a kid, I was <span className="text-primary">stylish</span>, <span className="text-primary">brave</span>,
                  <span className="text-primary"> quick-witted</span>, and full of adventure. I was the one who dove headfirst into new experiences. Sometimes literally, like the first time I jumped into a pool, bold and completely naked 😂
                  Every day felt like unexplored territory. I’d wake up ready to test something, touch something, climb something.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Curiosity was my compass, fear was barely a concept, and uncertainty only made things more exciting.
                  I didn’t analyze or hesitate I just trusted that the world was worth discovering. The unknown didn’t feel like a threat. It felt like an open door, waiting for a little chaos, courage, and imagination to walk through it.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <motion.div
                  className="absolute -top-10 -rotate-6 bg-white p-4 shadow-xl border-2 border-white"
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="images/meAndPool.jpg"
                    alt="Kid at the pool"
                    className="w-48 h-36 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Pool adventures ♥</p>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-1 rotate-12 bg-white p-4 shadow-xl border-2 border-white"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="images/meAndBirthday.jpg"
                    alt="Birthday celebration"
                    className="w-48 h-36 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Birthday magic ✨</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teenage Years Section */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-blue-50 to-pistachio-medium dark:from-pistachio-light dark:via-pistachio-soft dark:to-pistachio-medium">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="relative bg-white p-4 shadow-xl border-2 border-white -rotate-3"
                  whileHover={{ scale: 1.05, rotate: -1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="images/meAndSkateboard.jpg"
                    alt="Skateboarding adventures"
                    className="w-full h-52 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Street adventures 🛹</p>
                </motion.div>

                <motion.div
                  className="relative bg-white p-4 shadow-xl border-2 border-white rotate-6 mt-8"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="images/meAndGuitar.jpg"
                    alt="Guitar playing"
                    className="w-full h-52 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Music passion 🎸</p>
                </motion.div>
              </div>
              <div className="flex justify-center mt-8">
                <motion.div
                  className="w-64 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 rounded-lg shadow-lg opacity-90"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-4 h-4" />
                    <span className="text-xs font-mono">WoW Custom UI</span>
                  </div>
                  <ImageWithFallback
                    src="images/wowUI.png"
                    alt="WoW UI screenshot"
                    className="w-full h-40 object-cover"
                  />

                  <p className="text-xs mt-1 font-mono">Level 70 Achieved!</p>
                </motion.div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">
                  Teenage Years
                  <span className="block text-2xl text-muted-foreground mt-2">Age 13-18</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Moving to Ireland as a teenager pushed me out of my comfort zone and into my creativity. It taught me early how to <span className="text-primary">problem-solve</span> 
                  , not just in school, but in the everyday challenges of starting over somewhere new. I grew my skills through <span className="text-primary">skateboarding</span>,
                  <span className="text-primary"> music</span>, and <span className="text-primary">gaming</span> (World of Warcraft),
                  Where curiosity, trial-and error became second nature and discovered my passion and knack for Computers.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  I began by scripting custom UIs, then took it a step further by helping manage a private server to make the game free to play.
                  This hands on work was my first exposure to <span className="text-primary">coding</span> and
                  <span className="text-primary"> digital creation</span>. What began as exploration quickly became a path shaped by grit, creativity, and a steady drive to understand how things work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University & Career Section */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-pistachio-medium via-pistachio-light to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            variants={containerVariants}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">
                  University & Career
                  <span className="block text-2xl text-muted-foreground mt-2">Currently</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  After graduating in <span className="text-primary">ECE at UL</span>, I took a necessary career break to care for my terminally ill mother. 
                  This challenging time taught me  <span className="text-primary">resiliency</span> on how to handle emergencies and unexpected situations with both 
                  <span className="text-primary">empathy and sensitivity</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  I then jumped back into the technical world, leveraging my side-projects to land a role as a <span className="text-primary">front-end developer</span> and <span className="text-primary">QA</span>. Inspired by working closely with a design lead, I realized my calling was at the intersection of my technical skills and creative vision. I am currently deepening this expertise through a Master's in <span className="text-primary">UI/UX Design</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="relative bg-white p-6 shadow-xl border-2 border-white rotate-2"
                whileHover={{ scale: 1.05, rotate: 0, y: -15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="images/momAndMe.jpg"
                  alt="University graduation"
                  className="w-full h-72 object-cover"
                />
                <p className="text-sm text-center mt-4 font-mono text-gray-700">ECE Graduate & Developer Journey 🎓</p>

                <motion.div
                  className="absolute -top-2 -right-10 bg-black/90 text-green-400 p-2 text-xs font-mono"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
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
      <FooterCTA onContactClick={() => setIsContactOpen(true)} />

      {/* Contact modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
