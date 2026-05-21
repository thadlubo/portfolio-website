import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface FooterCTAProps {
  onContactClick: () => void;
}

const SOCIALS = [
  { href: "https://github.com/thadlubo", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/thaddeus-lubo/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:thadlubo@gmail.com", icon: Mail, label: "Email" },
] as const;

export function FooterCTA({ onContactClick }: FooterCTAProps) {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-accent/40" />

      {/* Soft static blobs — opacity only, no blur animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[20, 50, 80].map((left, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-primary/5"
            style={{ left: `${left}%`, top: `${10 + i * 20}%`, filter: 'blur(80px)' }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* SparkleCSS animation, no JS loop */}
          <div className="inline-flex animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Ready to Create Something
              <span className="block text-primary mt-2">Amazing Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's turn your vision into reality. Available for freelance projects & collaborations.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8  text-sm">
            {['Available for work', 'Responds within 24 hours', 'Based in Ireland'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="pt-4">
            <motion.button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{
                            scale: 1.015,
                            boxShadow: "0 0 22px rgba(128, 255, 213, 0.38)",
                          }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Shimmer — CSS only */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative z-10 text-xl">Get In Touch</span>
              {/* Arrow — CSS translate loop */}
              <ArrowRight className="relative z-10 w-6 h-6 animate-bounce" style={{ animationDuration: '1.2s' }} />
            </motion.button>
          </div>

          {/* Socials */}
          <motion.div
            className="flex justify-center space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full overflow-hidden glass bg-primary text-primary-foreground hover:bg-primary hover:text-pistachio-light transition-colors duration-200"
                whileHover={{
                            scale: 1.15,
                            boxShadow: "0 0 22px rgba(128, 255, 213, 0.38)",
                          }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Icon className="relative z-10 h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}