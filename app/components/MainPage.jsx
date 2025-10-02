'use client';

import React from 'react';
import HeroSection from "@/app/components/HeroSection.jsx";
import NavBar from "@/app/components/NavBar.jsx";
import About from "@/app/components/About.jsx";
import Skills from "@/app/components/Skills.jsx";
import Projects from "@/app/components/Projects.jsx";
import Contact from "@/app/components/Contact.jsx";

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