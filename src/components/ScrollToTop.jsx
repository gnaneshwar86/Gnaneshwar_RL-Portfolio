import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 rounded-full shadow-lg flex items-center justify-center transition-hover hover:-translate-y-1"
                    style={{
                        backgroundColor: 'var(--primary-color)',
                        color: '#000',
                        width: '45px',
                        height: '45px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up text-[1.1rem]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
