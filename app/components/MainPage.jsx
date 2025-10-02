'use client';

import React from 'react';
import HeroSection from "./HeroSection.jsx";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const MainPage = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <NavBar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    );
};

export default MainPage;