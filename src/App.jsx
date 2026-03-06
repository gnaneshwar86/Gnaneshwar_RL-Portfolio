import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Animated route wrapper — needs useLocation so it must live inside <Router>
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <Router>
            <AnimatePresence>
                {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <div
                className={`min-h-screen flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}
            >
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main className="flex-1">
                    <AnimatedRoutes />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
