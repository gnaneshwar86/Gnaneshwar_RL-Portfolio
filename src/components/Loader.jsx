import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 1500; // 1.5s
        const interval = 15;
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 300); // Wait a tiny bit fully loaded before hiding
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex text-[2.5rem] md:text-[3.5rem] font-bold text-white tracking-widest"
                >
                    <span style={{ color: "var(--primary-color)" }}>&lt;</span>
                    Gnaneshwar RL
                    <span style={{ color: "var(--primary-color)" }}>/&gt;</span>
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-[200px] h-[3px] bg-gray-800 mt-6 overflow-hidden rounded-full">
                    {/* Progress Fill */}
                    <div
                        className="h-full rounded-full transition-all duration-75 ease-linear"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: 'var(--primary-color)',
                            boxShadow: '0 0 10px var(--primary-color)'
                        }}
                    />
                </div>
                <div className="mt-2 text-gray-500 text-[0.75rem] font-mono">
                    INITIALIZING ENVIRONMENT... {Math.round(progress)}%
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
