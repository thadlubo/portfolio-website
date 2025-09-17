import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section text-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Thadd. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* put your social links */}
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
