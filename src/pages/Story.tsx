import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ y, opacity }}
        >
          <div className="space-y-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-primary tracking-wide uppercase">My Story</span>
              <h2 className="text-4xl lg:text-6xl mt-4 mb-6">
                Design is my
                <motion.span
                  className="block text-primary"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  passion
                </motion.span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My journey into design began with a simple fascination for how things work and 
              look. What started as sketching in margins became a full-fledged career dedicated 
              to creating meaningful digital experiences.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Over the past 7 years, I've had the privilege of working with startups, 
              agencies, and Fortune 500 companies, helping them transform complex problems 
              into elegant solutions that users love.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '7', label: 'Years' },
                { number: '25+', label: 'Clients' }
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

          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/noBG.png"
                alt="Creative Developer Portrait"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-xl"
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
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary rounded-full"
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

        {/* Philosophy Section */}
        <motion.div
          className="mt-32 text-center max-w-4xl mx-auto"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl mb-8">Design Philosophy</h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            "Great design is invisible. It doesn't scream for attention but quietly guides users 
            to their goals with clarity, efficiency, and delight. Every pixel should have a purpose, 
            every interaction should feel natural."
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'User-Centered',
                description: 'Every decision starts with understanding user needs and behaviors.',
                icon: '👥'
              },
              {
                title: 'Data-Driven',
                description: 'Research and analytics guide design decisions, not assumptions.',
                icon: '📊'
              },
              {
                title: 'Iterative',
                description: 'Continuous testing and refinement lead to better outcomes.',
                icon: '🔄'
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-xl mb-3">{principle.title}</h4>
                <p className="text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StoryPage;