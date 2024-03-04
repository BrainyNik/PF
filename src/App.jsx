import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";

function App() {
  return (
    <AnimatePresence>
      <div className="overflow-x-hidden font-kalam relative">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
