"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ESC key + scroll lock
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitted(false);

            setTimeout(() => {
                onClose();
            }, 500);
        }, 2000);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Updated: real icons + click-to-open links
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

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal container */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-background rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center z-10 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            {/* Content */}
                            <div className="p-8 md:p-12">
                                <motion.div
                                    className="text-center mb-12"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="text-primary tracking-wide uppercase">
                                        Get In Touch
                                    </span>
                                    <h2 className="text-foreground text-3xl lg:text-5xl mt-2 mb-4">
                                        Let's Create Together
                                    </h2>
                                    <p className="text-lg text-primary max-w-2xl mx-auto">
                                        Ready to bring your vision to life? I'd love to hear about your project.
                                    </p>
                                </motion.div>

                                <div className="grid lg:grid-cols-2 gap-12">
                                    {/* Contact Form */}
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative"
                                    >
                                        <h3 className="text-xl text-primary mb-6">Send a Message</h3>

                                        <motion.form
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                            animate={
                                                isSubmitted
                                                    ? { scale: 0.95, opacity: 0.5 }
                                                    : { scale: 1, opacity: 1 }
                                            }
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Name */}
                                            <FormField
                                                name="name"
                                                value={formData.name}
                                                focusedField={focusedField}
                                                setFocusedField={setFocusedField}
                                                placeholder="Your Name"
                                                onChange={handleInputChange}
                                            />

                                            {/* Email */}
                                            <FormField
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                focusedField={focusedField}
                                                setFocusedField={setFocusedField}
                                                placeholder="Your Email"
                                                onChange={handleInputChange}
                                            />

                                            {/* Subject */}
                                            <FormField
                                                name="subject"
                                                value={formData.subject}
                                                focusedField={focusedField}
                                                setFocusedField={setFocusedField}
                                                placeholder="Subject"
                                                onChange={handleInputChange}
                                            />

                                            {/* Message */}
                                            <FormField
                                                type="textarea"
                                                name="message"
                                                value={formData.message}
                                                focusedField={focusedField}
                                                setFocusedField={setFocusedField}
                                                placeholder="Tell me about your project..."
                                                onChange={handleInputChange}
                                            />

                                            {/* Submit */}
                                            <motion.button
                                                type="submit"
                                                className="w-full py-3 bg-primary text-primary-foreground rounded-xl relative overflow-hidden group"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={isSubmitted}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                                                    initial={{ x: "-100%" }}
                                                    whileHover={{ x: "100%" }}
                                                    transition={{ duration: 0.6 }}
                                                />

                                                <span className="relative z-10">
                                                    {isSubmitted ? "Message Sent! 🎉" : "Send Message"}
                                                </span>
                                            </motion.button>
                                        </motion.form>

                                        {/* Success Animation */}
                                        <AnimatePresence>
                                            {isSubmitted && (
                                                <motion.div
                                                    className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-xl"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                >
                                                    <div className="text-center">
                                                        <motion.div
                                                            className="text-5xl mb-3"
                                                            animate={{ rotate: [0, 10, -10, 0] }}
                                                            transition={{ duration: 0.6, repeat: 2 }}
                                                        >
                                                            ✨
                                                        </motion.div>

                                                        <h4 className="text-xl text-primary mb-1">Thank you!</h4>
                                                        <p className="text-muted-foreground text-sm">
                                                            I'll get back to you soon.
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Contact Info */}
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-xl text-primary mb-6">Other Ways to Connect</h3>

                                        <div className="text-foreground space-y-4">
                                            {contactMethods.map(
                                                ({ icon: Icon, title, value, href, description }, index) => (
                                                    <motion.a
                                                        key={href}
                                                        href={href}
                                                        target={href.startsWith("http") ? "_blank" : undefined}
                                                        rel={
                                                            href.startsWith("http")
                                                                ? "noopener noreferrer"
                                                                : undefined
                                                        }
                                                        className="block p-4 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                                        initial={{ opacity: 0, y: 4 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        whileHover={{
                                                            scale: 1.015,
                                                            boxShadow: "0 0 22px rgba(128, 255, 212, 0.22)", // soft pistachio glow
                                                        }}
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            <motion.div
                                                                className="mt-1"
                                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    repeatDelay: 3,
                                                                }}
                                                            >
                                                                <Icon className="w-5 h-5" />
                                                            </motion.div>

                                                            <div className="flex-1">
                                                                <h4 className="text-sm mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                                                                    {title}
                                                                </h4>
                                                                <p className="text-primary text-sm break-all">
                                                                    {value}
                                                                </p>
                                                                <p className="text-xs text-foreground mt-1">
                                                                    {description}
                                                                </p>
                                                            </div>

                                                            <motion.div
                                                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary"
                                                                whileHover={{ x: 3 }}
                                                            >
                                                                →
                                                            </motion.div>
                                                        </div>
                                                    </motion.a>
                                                )
                                            )}
                                        </div>

                                        {/* Availability */}
                                        <motion.div
                                            className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="flex items-center space-x-2 mb-2">
                                                <motion.div
                                                    className="w-2.5 h-2.5 bg-green-500 rounded-full"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                                <h4 className="text-sm text-foreground">
                                                    Available for Projects
                                                </h4>
                                            </div>

                                            <p className="text-xs text-primary">
                                                I'm currently accepting new projects. Typical response time is
                                                within 24 hours.
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

/* --- Small Field Component (Keeps file clean) --- */
function FormField({
    type = "text",
    name,
    value,
    placeholder,
    focusedField,
    setFocusedField,
    onChange,
}: any) {
    const isTextarea = type === "textarea";

    return (
        <motion.div
            className="relative"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {isTextarea ? (
                <motion.textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full px-4 py-3 bg-accent/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                    placeholder={placeholder}
                    required
                />
            ) : (
                <motion.input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-accent/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder={placeholder}
                    required
                />
            )}

            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: focusedField === name ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}
