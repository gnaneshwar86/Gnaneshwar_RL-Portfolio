import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();

    // Smooth-scroll to the correct section when navigated with a hash
    useEffect(() => {
        if (!hash) return;
        const timer = setTimeout(() => {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timer);
    }, [hash]);

    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
    );
};

export default Home;
