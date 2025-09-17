import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <motion.div
        className="text-center p-10 bg-black bg-opacity-50 rounded-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Welcome to My World</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">I build beautiful web experiences</p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg uppercase font-semibold"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};
