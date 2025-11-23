import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FooterCTAProps {
  onContactClick: () => void;
}

export function FooterCTA({ onContactClick }: FooterCTAProps) {
  return (
    <motion.div
      className="relative py-24 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-accent/40" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Sparkle Icon */}
          <motion.div
            className="inline-flex"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-primary" />
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Ready to Create Something
              <span className="block text-primary mt-2">Amazing Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's turn your vision into reality. I'm available for freelance projects and collaborations.
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            className="pt-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 text-xl">Get In Touch</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Quick Stats/Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-muted-foreground">Available for work</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-muted-foreground">Responds within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-muted-foreground">Based in Ireland</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
