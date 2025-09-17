import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed text-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi! I’m Thadd (or replace with your name). I love building interactive
          and beautiful websites. I work with React, Tailwind CSS, Framer Motion,
          and more. My passion is turning design ideas into intuitive UI and smooth
          UX.
        </motion.p>
      </div>
    </section>
  );
};
