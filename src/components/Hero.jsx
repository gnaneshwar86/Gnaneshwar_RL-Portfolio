import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InteractiveTerminal from './Terminal';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center mt-32 p-4 text-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
            >
                <motion.img
                    className="w-[200px] rounded-full mt-4"
                    src="/assets/profile-image.jpg"
                    alt="Profile"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    variants={fadeUp}
                />

                <motion.h1
                    variants={fadeUp}
                    className="mt-4 text-2xl font-bold clip-text-selection"
                    style={{ color: 'var(--text-color)' }}
                >
                    Hi, I'm Gnaneshwar RL
                </motion.h1>

                <motion.div variants={fadeUp} className="my-6">
                    <h3
                        className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.3] font-bold clip-text-selection"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Designing and building scalable software systems.
                    </h3>
                    <h3
                        className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] leading-[1.3] font-bold clip-text-selection mt-2"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Focused on performance, reliability, and clean architecture.
                    </h3>

                    <p className="p-2 mx-auto max-w-[700px] mt-4" style={{ color: 'var(--text-color)' }}>
                        Software engineer passionate about solving complex problems and creating efficient, scalable applications.
                    </p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 mt-2">
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-8 py-3 rounded-full uppercase text-[0.82rem] font-bold w-[240px] text-center"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--bg-primary)',
                                transition: 'opacity 0.3s',
                            }}
                            whileHover={{ opacity: 0.85 }}
                        >
                            Connect With Me
                        </motion.a>

                        <Link
                            to="/resume"
                            className="inline-flex sm:hidden items-center justify-center px-8 py-3 rounded-full uppercase text-[0.82rem] font-bold w-[240px] text-center transition-all border-2 hover:bg-[var(--bg-secondary)] hover:text-[var(--bg-primary)]"
                            style={{
                                borderColor: 'var(--bg-secondary)',
                                color: 'var(--bg-secondary)',
                            }}
                        >
                            View Resume
                        </Link>
                    </div>

                    <div className="flex gap-6 text-[2.5rem]" style={{ color: 'var(--text-color)' }}>
                        <a href="https://linkedin.com/in/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors hover:scale-110 transform duration-300">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors hover:scale-110 transform duration-300">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </motion.div>

                {/* Animated Interactive Terminal */}
                <InteractiveTerminal />
            </motion.div>
        </section >
    );
};

export default Hero;
