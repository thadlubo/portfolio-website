import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { label: "Projects", href: "#projects" },
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      flex items-center justify-between
      w-[200px]  /* Absolute width */
      max-w-[90vw] /* Ensures it never overflows on very small screens */
      bg-white rounded-md shadow-lg px-4 py-2 z-50
    ">
      {/* Logo */}
      <a href="#home" className="font-bold tracking-widest text-sm">
        THAD <br /> LUBO
      </a>

      {/* Divider */}
      <div className="w-0.75 h-9 rounded bg-red-400"></div>

      {/* Hamburger */}
      <motion.button
        className="flex flex-col justify-between w-6 h-5"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block h-1 bg-red-500 rounded"
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
        />
        <motion.span
          className="block h-1 bg-red-500 rounded"
          animate={{ opacity: menuOpen ? 0 : 1 }}
        />
        <motion.span
          className="block h-1 bg-red-500 rounded"
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="
              absolute bottom-full mb-4
              left-1/2 -translate-x-1/2  /* Center horizontally */
              w-[250px] sm:w-[300px] md:w-[400px]
              bg-gray-900 rounded-lg shadow-xl
              p-6 flex flex-col items-center space-y-4
            "
          >
            {sections.map((section) => (
              <motion.a
                key={section.href}
                href={section.href}
                className="
                  text-2xl sm:text-3xl md:text-4xl
                  font-extrabold uppercase tracking-wide
                  text-white hover:text-red-400 transition-colors
                "
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}