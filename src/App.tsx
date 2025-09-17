import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Parallax />
      <Projects />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
