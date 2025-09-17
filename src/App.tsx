import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import MultiLayerParallax from "./components/Hero";
import { Journey } from "./components/Journey";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <MultiLayerParallax />
      <About />
      <Journey />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
