"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactMethods = [
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/thadlubo",
    href: "https://github.com/thadlubo",
    description: "Follow my development journey",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/thaddeus-lubo",
    href: "https://www.linkedin.com/in/thaddeus-lubo/",
    description: "Connect professionally",
  },
  {
    icon: Mail,
    title: "Email",
    value: "thadlubo@gmail.com",
    href: "mailto:thadlubo@gmail.com",
    description: "Send me an email anytime",
  },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) { document.body.style.overflow = ""; return; }
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleEsc); document.body.style.overflow = ""; };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
      setTimeout(onClose, 500);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-background rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center z-10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="text-primary tracking-wide uppercase">Get In Touch</span>
                  <h2 className="text-foreground text-3xl lg:text-5xl mt-2 mb-4">Let's Create Together</h2>
                  <p className="text-lg text-primary max-w-2xl mx-auto">
                    Ready to bring your vision to life? I'd love to hear about your project.
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Form */}
                  <motion.div
                    className="relative"
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h3 className="text-xl text-primary mb-6">Send a Message</h3>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      style={{ opacity: isSubmitted ? 0.5 : 1, transition: "opacity 0.3s" }}
                    >
                      <FormField name="name" value={formData.name} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Your Name" onChange={handleInputChange} />
                      <FormField type="email" name="email" value={formData.email} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Your Email" onChange={handleInputChange} />
                      <FormField name="subject" value={formData.subject} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Subject" onChange={handleInputChange} />
                      <FormField type="textarea" name="message" value={formData.message} focusedField={focusedField} setFocusedField={setFocusedField} placeholder="Tell me about your project..." onChange={handleInputChange} />

                      {/* Submit — shimmer via CSS, not JS */}
                      <button
                        type="submit"
                        disabled={isSubmitted}
                        className="
                          w-full py-3 rounded-xl relative overflow-hidden
                          bg-primary text-primary-foreground
                          hover:scale-[1.02] active:scale-[0.98]
                          transition-transform duration-150
                          disabled:opacity-60 disabled:cursor-not-allowed
                          group
                        "
                      >
                        <span
                          className="
                            absolute inset-0
                            bg-gradient-to-r from-transparent via-white/20 to-transparent
                            -translate-x-full group-hover:translate-x-full
                            transition-transform duration-500
                          "
                        />
                        <span className="relative z-10">
                          {isSubmitted ? "Message Sent! 🎉" : "Send Message"}
                        </span>
                      </button>
                    </form>

                    {/* Success overlay */}
                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-xl"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="text-center">
                            <motion.div
                              className="text-5xl mb-3"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 0.5, repeat: 2 }}
                            >
                              ✨
                            </motion.div>
                            <h4 className="text-xl text-primary mb-1">Thank you!</h4>
                            <p className="text-muted-foreground text-sm">I'll get back to you soon.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Contact info */}
                  <motion.div
                    initial={{ x: 16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h3 className="text-xl text-primary mb-6">Other Ways to Connect</h3>

                    <div className="space-y-4">
                      {contactMethods.map(({ icon: Icon, title, value, href, description }, i) => (
                        <motion.a
                          key={href}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{  duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                          whileHover={{
                            scale: 1.015,
                            boxShadow: "0 0 22px rgba(128, 255, 212, 0.22)",
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            {/* Icon CSS hover, no infinite animation */}
                            <div className="mt-1 text-foreground group-hover:text-primary transition-colors duration-200">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm mb-1 text-foreground group-hover:text-primary transition-colors duration-200">
                                {title}
                              </h4>
                              <p className="text-primary text-sm break-all">{value}</p>
                              <p className="text-xs text-foreground mt-1">{description}</p>
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-primary">
                              →
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* Availability */}
                    <motion.div
                      className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.38, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {/* CSS pulse — compositor only, no JS */}
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                        <h4 className="text-sm text-foreground">Available for Projects</h4>
                      </div>
                      <p className="text-xs text-primary">
                        I'm currently accepting new projects. Typical response time is within 24 hours.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function FormField({ type = "text", name, value, placeholder, focusedField, setFocusedField, onChange }: any) {
  const base = "w-full px-4 py-3 bg-accent/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors duration-200 resize-none";
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={onChange} onFocus={() => setFocusedField(name)} onBlur={() => setFocusedField(null)} rows={4} className={base} placeholder={placeholder} required />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} onFocus={() => setFocusedField(name)} onBlur={() => setFocusedField(null)} className={base} placeholder={placeholder} required />
      )}
      {/* Focus underline — CSS width transition */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300"
        style={{ width: focusedField === name ? "100%" : "0%" }}
      />
    </div>
  );
}