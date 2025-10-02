import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function JourneyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const journeyItems = [
    {
      year: '2017',
      title: 'First Steps',
      company: 'Freelance Designer',
      description: 'Started my journey as a freelance designer, working on small business websites and branding projects. This was where I discovered my passion for creating user-centered designs.',
      image: 'https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ25lcnxlbnwxfHx8fDE3NTkyNTg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['5 successful projects', 'Built personal brand', 'Client satisfaction: 98%']
    },
    {
      year: '2018',
      title: 'Junior Designer',
      company: 'Creative Agency',
      description: 'Joined a dynamic creative agency where I learned the foundations of user experience design, design systems, and collaborative workflows with cross-functional teams.',
      image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW18ZW58MXx8fHwxNzU5MjIzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['Contributed to 15+ campaigns', 'Learned design systems', 'Team collaboration skills']
    },
    {
      year: '2020',
      title: 'Product Designer',
      company: 'Tech Startup',
      description: 'Moved to a fast-paced startup environment, designing mobile apps and web platforms for millions of users. Focused on user research, prototyping, and data-driven design decisions.',
      image: 'https://images.unsplash.com/photo-1665360786492-ace5845fe817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyNTg5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['2M+ active users', 'Led product redesign', '40% conversion increase']
    },
    {
      year: '2022',
      title: 'Senior UX Designer',
      company: 'Fortune 500',
      description: 'Led design initiatives for enterprise products, mentored junior designers, and established scalable design processes. Focused on accessibility and inclusive design practices.',
      image: 'https://images.unsplash.com/photo-1686100509061-f05807314c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTkyMjAxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['Mentored 8 designers', 'WCAG AA compliance', 'Design system adoption: 95%']
    },
    {
      year: '2024',
      title: 'Design Lead',
      company: 'Innovation Lab',
      description: 'Currently leading a team of designers, focusing on emerging technologies, AI-powered interfaces, and future-forward user experiences. Building the next generation of digital products.',
      image: 'https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFiJTIwbW9kZXJufGVufDF8fHx8MTc1OTI1ODk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['Leading 12-person team', 'AI integration pioneer', '3 patents filed']
    }
  ];

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      const newIndex = Math.min(Math.floor(latest * journeyItems.length), journeyItems.length - 1);
      if (newIndex !== activeIndex && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, activeIndex, journeyItems.length]);

  const scrollToIndex = (index: number) => {
    const element = document.getElementById(`milestone-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setExpandedIndex(index);
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Timeline progress calculation
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
     

      <div className="z-10 container mx-auto px-6 py-20 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-l from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Journey
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-l lg:text-xl mb-8 mt-8 max-w-2xl text-pistachio-dark mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            My Career time-line progression through various roles and experiences that shaped my design perspective and expertise
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-primary origin-top"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1])
            }}
          />

          <div className="space-y-16">
            {journeyItems.map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { margin: "-100px" });
              
              return (
                <motion.div
                  key={index}
                  id={`milestone-${index}`}
                  ref={ref}
                  className="relative pl-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Timeline marker */}
                  <motion.div
                    className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    animate={{
                      scale: isInView ? 1.2 : 1,
                      boxShadow: isInView 
                        ? "0 0 0 8px rgba(var(--primary), 0.1)" 
                        : "0 4px 8px rgba(0,0,0,0.1)"
                    }}
                    viewport={{ once: true }}
                  />

                  {/* Year */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="z-20 text-4xl font-bold bg-gradient-to-r from-pistachio-dark via-pistachio-medium to-pistachio-medium bg-clip-text text-transparent absolute -top-12 left-6 pointer-events-none">
                      {item.year}
                    </span>
                  
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={`${item.title} workspace`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-4 left-6 text-white">
                        <h3 className="text-white mb-1">{item.title}</h3>
                        <p className="text-white/80">{item.company}</p>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </motion.div>
                    </div>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-4">
                        <p className="text-muted-foreground mb-4 backdrop-blur-md leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm text-foreground mb-3">Key Achievements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                className="bg-accent/50 rounded-lg px-3 py-2 text-sm text-accent-foreground"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ 
                                  opacity: expandedIndex === index ? 1 : 0,
                                  y: expandedIndex === index ? 0 : 10
                                }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: expandedIndex === index ? achIndex * 0.1 : 0 
                                }}
                              >
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4">Ready to work together?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let's create something amazing. I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile progress indicator */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-card border border-border rounded-full px-4 py-2 shadow-lg">
          <div className="text-xs text-muted-foreground">
            {activeIndex + 1} of {journeyItems.length}
          </div>
        </div>
      </div>
    </motion.div>
  );
}