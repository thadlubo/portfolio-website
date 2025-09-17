import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../types/project";

const projectData: Project[] = [
  {
    title: "Project One",
    description: "A sample project showing animations and design.",
    image: "/project1.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Two",
    description: "Another one, using Tailwind + React + Motion.",
    image: "/project2.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Three",
    description: "Dark mode / light mode sample or something cool.",
    image: "/project3.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Four",
    description: "Extra project to show grid layout.",
    image: "/project4.jpg",
    liveUrl: "#",
    repoUrl: "#"
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 projects-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {projectData.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                <div className="flex space-x-4">
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} className="text-blue-600 hover:underline">
                      Live
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a href={proj.repoUrl} className="text-blue-600 hover:underline">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
