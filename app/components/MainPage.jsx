'use client';

import React from 'react';
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

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