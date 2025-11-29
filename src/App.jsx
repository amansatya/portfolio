import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./styles/globals.css";
import "./index.css"

export default function App() {
    return (
        <>
            <Navbar />

            <ScrollToTop />

            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}
