import { motion } from "framer-motion";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: "hero", label: "Home" },
    { id: "story", label: "Story" },
    { id: "journey", label: "Journey" },
    { id: "creations", label: "Creations" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-8 inset-x-0 z-50 flex justify-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex space-x-6 backdrop-blur-md rounded-full px-6 py-3 border border-border">
        {pages.map((page) => (
          <motion.button
            key={page.id}
            onClick={() => onPageChange(page.id)}
            className="relative px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          >
            <span
              className={`transition-colors duration-300 ${
                currentPage === page.id
                  ? "text-pistachio-light"
                  : "text-primary hover:text-foreground"
              }`}
            >
              {page.label}
            </span>

            {currentPage === page.id && (
              <motion.div
                className="absolute inset-0 bg-pistachio-dark rounded-full"
                layoutId="activeTab"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
