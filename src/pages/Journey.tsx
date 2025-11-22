import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import TechStack from '../components/TechStack';
import { FooterCTA } from './FooterCTA';
import { ContactModal } from '../components/ContactModal';

export default function JourneyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const journeyItems = [
    {
      year: '2017',
      title: 'First Steps as a Student',
      company: 'University of Limerick',
      description: 'Started my journey as a student, exploring various fields before discovering my passion for design. This was where I first dabbled in web development and computing structure, laying the foundation for my future career.',
      image: 'https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ25lcnxlbnwxfHx8fDE3NTkyNTg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['5 successful projects', 'Built personal brand', 'Client satisfaction: 98%']
    },
    {
      year: '2018',
      title: 'Part-time Sales Assistant',
      company: 'Vodafone',
      description: 'Worked in telecoms retail through my college years before landing my first industry job, providing technical support and customer service while building strong teamwork, problem-solving, and communication skills.',
      image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW18ZW58MXx8fHwxNzU5MjIzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ["Developed strong customer-facing communication",
        "Built technical knowledge of telecom systems",
        "Smashed KPI sales targets"]
    },
    {
      year: '2019',
      title: 'Software Engineer and QA Intern',
      company: 'Hewlett-Packard Enterprise',
      description: 'Worked as a Java Developer Intern while assisting QA teams. Gained hands-on experience with full software development lifecycle, database management, and test automation.',
      image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW18ZW58MXx8fHwxNzU5MjIzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ["Developed Java applications with OOP principles",
        "Implemented SQL for data-driven projects",
        "Automated testing with Selenium"]
    },
    {
      year: '2021',
      title: 'Graduate Engineer',
      company: 'Career-Break',
      description: "Took time away from professional work to provide full-time care for a terminally ill parent, managing responsibilities that demanded organization, resilience, and compassion.",
      image: 'https://images.unsplash.com/photo-1665360786492-ace5845fe817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyNTg5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ["Coordinated healthcare and legal matters",
        "Provided daily mobility and medication support",
        "Developed crisis management and resilience"]
    },
    {
      year: '2023',
      title: 'Software Engineer Consultant',
      company: 'FDM Group',
      description: "Worked with the 'Project on Demand' team, building full-stack applications with React, Java Spring APIs, and MySQL, while applying Agile methodologies for iterative improvements.",
      image: 'https://images.unsplash.com/photo-1686100509061-f05807314c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTkyMjAxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ["Delivered full-stack job portal project",
        "Integrated MySQL database for real-time use",
        "Applied Agile principles for continuous improvement"]
    },
    {
      year: '2024',
      title: 'Junior Frontend Developer',
      company: 'Citibank',
      description: "Worked on internal banking applications as a dual Front-End Developer and QA Engineer, delivering responsive interfaces, API integrations, and robust automated testing pipelines.",
      image: 'https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFiJTIwbW9kZXJufGVufDF8fHx8MTc1OTI1ODk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ["Built React front-ends for internal apps",
        "Integrated with Java APIs and MySQL databases",
        "Automated testing with Selenium, Cucumber, Jenkins"]
    },
    {
      year: '2025',
      title: 'UI/UX Masters Student',
      company: 'University of Limerick',
      description: 'Studied UI/UX Design at a postgraduate level, honing my skills in user-centered design, prototyping, and usability testing. This period solidified my passion for creating intuitive and engaging digital experiences.',
      image: 'https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ25lcnxlbnwxfHx8fDE3NTkyNTg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: ['5 successful projects', 'Built personal brand', 'Client satisfaction: 98%']
    },
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


  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Content Container */}
      <div className="z-10 container mx-auto px-6 py-20 max-w-4xl">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h1
            className="mt-12 text-4xl font-bold bg-gradient-to-br from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block"
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
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="z-20 text-4xl font-bold bg-gradient-to-br from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent absolute -top-12 left-6 pointer-events-none">
                      {item.year}
                    </span>

                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
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
                        className="absolute top-4 right-4 w-8 h-8 bg-pistachio-medium rounded-full flex items-center justify-center text-white"
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m6 9 6 6 6-6" />
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
                      {/* Description and Achievements */}
                      <div className="p-6 pt-4">
                        <p className="text-muted-foreground mb-4 backdrop-blur-md leading-relaxed">
                          {item.description}
                        </p>
                        <div>
                          {/* Achievements title */}
                          <h4 className="text-md text-pistachio-dark mb-3">Key Achievements</h4>
                          {/* Achievements grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                className="bg-accent/50 rounded-lg px-3 py-2 text-sm text-accent-foreground px-3 py-1 text-xs bg-accent text-pistachio-dark rounded-full"
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
      </div>
      <div className="mt-32">
        <TechStack />
      </div>
      <div className='bg-gradient-to-t from-transparent via-transparent to-pistachio-mint'>
        {/* Footer CTA */}
        <FooterCTA onContactClick={() => setIsContactOpen(true)} />

        {/* Contact modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </motion.div>

  );
}