import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 determines current page

  const pages = [
    { path: "/", label: "Home" },
    { path: "/story", label: "Story" },
    { path: "/journey", label: "Journey" },
    { path: "/creations", label: "Creations" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-2"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex space-x-4 md:space-x-6 backdrop-blur-md rounded-full px-3 py-2 md:px-6 md:py-3 border border-border text-sm md:text-base scale-90 sm:scale-100">
        {pages.map((page) => {
          const isActive = location.pathname === page.path;
          return (
            <motion.button
              key={page.path}
              onClick={() => navigate(page.path)}
              className="relative px-2 py-1 md:px-4 md:py-2 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Tab Hover and Active State */}
              <span
                className={`transition-colors duration-300 ${isActive
                    ? "text-pistachio-light"
                    : "text-primary hover:text-pistachio-medium"
                  }`}
              >
                {page.label}
              </span>
              
              {/* Tab animation*/}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-pistachio-dark rounded-full"
                  layoutId="activeTab"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 1.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
