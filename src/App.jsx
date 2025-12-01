import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Background from "./components/Background";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

import "./styles/globals.css";
import "./index.css"

export default function App() {
    return (
        <>
            <Background />
            <Navbar />
            <ScrollToTop />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <About />
                            <TechStack />
                            <Experience />
                            <Projects />
                            <Contact />
                        </>
                    }
                />

                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
        </>
    );
}