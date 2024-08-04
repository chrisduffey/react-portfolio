import React from "react";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
import Testimonials from "./componenets/Testimonials";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
        </main>
    )
};