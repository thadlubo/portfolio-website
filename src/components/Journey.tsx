import React from "react";
import { motion } from "framer-motion";

export const Journey: React.FC = () => {
  return (
    <section id="about" className="py-24 journey-section">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontWeight: 800, fontSize: "2.5rem", marginBottom: "1rem", font: "Manrope" }}
        >
          Journey
        </motion.h2>

        <motion.p
          className="leading-relaxed text-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: 400, fontSize: "1.25rem", lineHeight: 1.7 }}
        >
          Hi! I’m Thadd (or replace with your name). I love building interactive
          and beautiful websites. I work with React, Tailwind CSS, Framer Motion,
          and more. My passion is turning design ideas into intuitive UI and smooth
          UX. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
           proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </motion.p>


        <motion.p
          className="leading-relaxed text-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: 400, fontSize: "1.25rem", lineHeight: 1.7 }}
        >
          Hi! I’m Thadd (or replace with your name). I love building interactive
          and beautiful websites. I work with React, Tailwind CSS, Framer Motion,
          and more. My passion is turning design ideas into intuitive UI and smooth
          UX. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
           proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </motion.p>
      </div>
    </section>
  );
};
