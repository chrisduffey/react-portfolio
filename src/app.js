import React from "react";
import About from "./componenets/about";
import Contact from "./componenets/contact";
import Navbar from "./componenets/navbar";
import Projects from "./componenets/projects";
import Skills from "./componenets/skills";
import Testimonials from "./componenets/testimonials";

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
}