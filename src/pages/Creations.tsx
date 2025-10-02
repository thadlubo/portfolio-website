import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function CreationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      description: 'Complete redesign of a fashion e-commerce platform focusing on user experience and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTA4Mzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UI/UX', 'Mobile', 'E-commerce'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'web',
      description: 'Complex data visualization dashboard for healthcare professionals to monitor patient metrics and analytics.',
      image: 'https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzU5MDc5OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web App', 'Dashboard', 'Healthcare'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'FinTech Startup Branding',
      category: 'branding',
      description: 'Complete brand identity design including logo, color palette, and brand guidelines for a cryptocurrency startup.',
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTkwMzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Branding', 'Logo Design', 'FinTech'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'mobile',
      description: 'User interface design for a new social media platform focused on creative professionals and portfolio sharing.',
      image: 'https://images.unsplash.com/photo-1486486955648-a4f22566c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ25lcnxlbnwxfHx8fDE3NTkxNDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile', 'Social Media', 'UI/UX'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'B2B SaaS Platform',
      category: 'web',
      description: 'Enterprise software interface design with complex workflows and data management capabilities.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTA4Mzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['SaaS', 'Enterprise', 'Web App'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Restaurant Chain Rebrand',
      category: 'branding',
      description: 'Complete rebranding project including visual identity, menu design, and digital presence for a restaurant chain.',
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTkwMzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Branding', 'Restaurant', 'Identity'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 ">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary tracking-wide uppercase">Portfolio</span>
          <h2 className="text-4xl lg:text-6xl mt-4 mb-6">My Creations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects showcasing my design process and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:border-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                    />
                    
                    {/* Floating Action */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                    >
                      <span className="text-primary">→</span>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Animated border */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: hoveredProject === project.id ? '100%' : '0%' 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                    rotate: hoveredProject === project.id ? [0, 180, 360] : 0
                  }}
                  transition={{ duration: 2, repeat: hoveredProject === project.id ? Infinity : 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-4">Like what you see?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's discuss how I can help bring your next project to life
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}