import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Gamepad2 } from 'lucide-react';

export default function StoryPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary tracking-wide uppercase text-sm">My Story</span>
            <h1 className="text-5xl lg:text-7xl mt-4 mb-6">
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
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
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
                  <span className="text-primary"> quick-witted</span>, and full of adventure — never afraid to dive headfirst
                  into new experiences (even the pool, naked!).
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Every day was an exploration, every moment a new discovery.
                  I approached life with pure curiosity and zero fear.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <motion.div
                  className="absolute -rotate-6 bg-white p-4 shadow-xl border-2 border-white"
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="images/PortfolioRight.png"
                    alt="Kid at the pool"
                    className="w-48 h-36 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Pool adventures ♥</p>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-16 rotate-12 bg-white p-4 shadow-xl border-2 border-white"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753742731099-028d1a0555fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwa2lkcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1OTQ0MTQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
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
                    src="https://images.unsplash.com/photo-1626181273973-2fa879d02fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHNrYXRlYm9hcmRpbmclMjBzdHJlZXR8ZW58MXx8fHwxNzU5NDQxNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                    src="https://images.unsplash.com/photo-1758521540798-6cec2067be4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHBsYXlpbmclMjBndWl0YXIlMjBtdXNpY3xlbnwxfHx8fDE3NTk0NDE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Guitar playing"
                    className="w-full h-52 object-cover"
                  />
                  <p className="text-xs text-center mt-3 font-mono text-gray-700">Music passion 🎸</p>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 rounded-lg shadow-lg opacity-90"
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span className="text-xs font-mono">WoW Custom UI</span>
                </div>
                <ImageWithFallback
                  src="images/wowUI.png"
                  className="w-90 h-36 object-cover"
                />
                <p className="text-xs mt-1 font-mono">Level 70 Achieved!</p>
              </motion.div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">
                  Teenage Years
                  <span className="block text-2xl text-muted-foreground mt-2">Age 13-18</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a teenager, I embraced my creative side. Between <span className="text-primary">skateboarding</span>,
                  <span className="text-primary"> music</span>, and <span className="text-primary">gaming</span> (World of Warcraft),
                  I discovered my passion for computers.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  I even scripted custom UIs and helped run a private server, making the game free-to-play.
                  This was my first taste of <span className="text-primary">coding</span> and
                  <span className="text-primary"> digital creation</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University & Career Section */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
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
                  <span className="block text-2xl text-muted-foreground mt-2">Age 19-25</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I graduated in <span className="text-primary">ECE at UL</span>, then worked as a
                  <span className="text-primary"> front-end developer</span> and <span className="text-primary">QA</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Inspired by working closely with a design lead, I absorbed everything I could —
                  and found my calling in <span className="text-primary">UI/UX design</span>.
                  This was where technical skills met creative vision.
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
                  src="https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1OTM4Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="University graduation"
                  className="w-full h-72 object-cover"
                />
                <p className="text-sm text-center mt-4 font-mono text-gray-700">ECE Graduate & Developer Journey 🎓</p>

                <motion.div
                  className="absolute top-4 right-4 bg-black/90 text-green-400 p-2 text-xs font-mono"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div>{'const designer = () => {'}</div>
                  <div className="ml-1">{'return passion + skills;'}</div>
                  <div>{'};'}</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
