import { motion } from "motion/react";
import { useState, useRef } from "react";

interface FormFieldProps {
  type?: "text" | "email" | "textarea";
  name: string;
  value: string;
  placeholder: string;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function FormField({
  type = "text",
  name,
  value,
  placeholder,
  setFocusedField,
  onChange,
}: FormFieldProps) {
  const commonProps = {
    name,
    value,
    placeholder,
    onChange,
    onFocus: () => setFocusedField(name),
    onBlur: () => setFocusedField(null),
    className:
      "w-full px-4 py-4 bg-card border border-accent rounded-xl transition-all duration-300 focus:outline-none focus:border-pistachio-dark focus:border-2",
  };

  return (
    <motion.div
      className="relative "
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {type === "textarea" ? (
        <motion.textarea {...commonProps} rows={6} />
      ) : (
        <motion.input {...commonProps} type={type} />
      )}
    </motion.div>
  );
}

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
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

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "thadlubo@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: "💬",
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/thaddeus-lubo/",
      description: "Connect professionally",
    },
    {
      icon: "👀",
      title: "GitHub",
      value: "https://github.com/thadlubo",
      description: "Follow my design and development journey",
    },
  ];

  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="mt-12 text-4xl font-bold bg-gradient-to-l from-pistachio-dark via-pistachio-medium to-pistachio-dark bg-clip-text text-transparent uppercase mb-4 block"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg sm:text-l lg:text-xl mb-8 mt-8 max-w-2xl text-pistachio-dark mx-auto"
          >
            Ready to bring your vision to life? I'd love to hear about your
            project and explore how we can work together.
          </motion.p>
        </motion.div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-pistachio-dark">Send a Message</h3>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              animate={
                isSubmitted
                  ? { scale: 0.95, opacity: 0.5 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              <FormField
                name="name"
                value={formData.name}
                placeholder="Your Name"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                onChange={handleInputChange}
              />
              <FormField
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                onChange={handleInputChange}
              />
              <FormField
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                onChange={handleInputChange}
              />
              <FormField
                type="textarea"
                name="message"
                value={formData.message}
                placeholder="Tell me about your project..."
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                onChange={handleInputChange}
              />

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
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">
                  {isSubmitted ? "Message Sent! 🎉" : "Send Message"}
                </span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-pistachio-dark">Other Ways to Connect</h3>

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
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="mb-1 group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-primary mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
