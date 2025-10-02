import { motion } from 'motion/react';
import { useState, useRef } from 'react';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'thadlubo@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '💬',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/thaddeus-lubo/',
      description: 'Connect professionally'
    },
    {
      icon: '👀',
      title: 'GitHub',
      value: 'https://github.com/thadlubo',
      description: 'Follow my design and development journey'
    }
  ];

  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h1
            className="mt-12 text-4xl font-bold bg-gradient-to-l from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg sm:text-l lg:text-xl mb-8 mt-8 max-w-2xl text-pistachio-dark mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8">Send a Message</h3>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              animate={isSubmitted ? { scale: 0.95, opacity: 0.5 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Name Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-input-background border border-border rounded-xl transition-all duration-300"
                  placeholder="Your Name"
                  animate={{
                    borderColor: focusedField === 'name' ? 'rgb(3, 2, 19)' : 'rgba(0, 0, 0, 0.1)',
                    y: focusedField === 'name' ? -2 : 0
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-input-background border border-border rounded-xl transition-all duration-300"
                  placeholder="Your Email"
                  animate={{
                    borderColor: focusedField === 'email' ? 'rgb(3, 2, 19)' : 'rgba(0, 0, 0, 0.1)',
                    y: focusedField === 'email' ? -2 : 0
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-input-background border border-border rounded-xl transition-all duration-300"
                  placeholder="Subject"
                  animate={{
                    borderColor: focusedField === 'subject' ? 'rgb(3, 2, 19)' : 'rgba(0, 0, 0, 0.1)',
                    y: focusedField === 'subject' ? -2 : 0
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'subject' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full px-4 py-4 bg-input-background border border-border rounded-xl transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  animate={{
                    borderColor: focusedField === 'message' ? 'rgb(3, 2, 19)' : 'rgba(0, 0, 0, 0.1)',
                    y: focusedField === 'message' ? -2 : 0
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">
                  {isSubmitted ? 'Message Sent! 🎉' : 'Send Message'}
                </span>
              </motion.button>
            </motion.form>

            {/* Success Animation */}
            {isSubmitted && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                  >
                    ✨
                  </motion.div>
                  <h4 className="text-xl text-primary">Thank you!</h4>
                  <p className="text-muted-foreground">I'll get back to you soon.</p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8">Other Ways to Connect</h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="mb-1 group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-primary mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              className="mt-12 p-6 rounded-xl bg-accent/50 border border-border"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h4>Available for Projects</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new projects and collaborations.
                Typical response time is within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}