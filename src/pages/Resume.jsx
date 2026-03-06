import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const ResumePage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
        }),
    };

    return (
        <motion.div
            className="container mx-auto px-4 md:px-8 max-w-[900px] pt-32 pb-24 mb-20"
            initial="hidden"
            animate="visible"
        >
            {/* ── BACK BUTTON ── */}
            <motion.div variants={fadeUp} custom={0} className="mb-8 relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors"
                >
                    <i className="fas fa-arrow-left" /> Back to Home
                </Link>
            </motion.div>

            {/* ── HEADER ── */}
            <motion.div variants={fadeUp} custom={1} className="mb-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b pb-8" style={{ borderColor: 'var(--card-background)' }}>
                    <div>
                        <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] font-bold leading-none clip-text-selection" style={{ color: 'var(--text-color)' }}>
                            Gnaneshwar R L
                        </h1>
                        <h2 className="text-[1.2rem] mt-2 font-semibold" style={{ color: 'var(--primary-color)' }}>
                            Software Development Engineer
                        </h2>
                        <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 text-[0.9rem]" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                            <span className="flex items-center gap-2"><i className="fas fa-map-marker-alt" /> Hosur, Tamil Nadu, India</span>
                            <span className="flex items-center gap-2 mt-1 sm:mt-0"><i className="fas fa-phone" style={{ transform: "scaleX(-1)" }} /> +91 8608698986</span>
                            <span className="flex items-center gap-2 mt-1 sm:mt-0"><i className="fas fa-envelope" /> gnaneshwarnani8605@gmail.com</span>
                        </div>
                    </div>
                    {/* PDF Download Button */}
                    <a
                        href="/assets/Gnaneshwar_RL_Resume.pdf"
                        download
                        className="mt-6 md:mt-0 inline-flex items-center px-6 py-2.5 rounded-full text-[0.9rem] font-bold transition-transform hover:scale-105"
                        style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}
                    >
                        Download Resume <i className="fas fa-download ml-2" />
                    </a>
                </div>
            </motion.div>

            {/* ── LINKS ── */}
            <motion.div variants={fadeUp} custom={2} className="mb-12">
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://linkedin.com/in/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.95rem] font-medium hover:text-[var(--primary-color)] transition-colors" style={{ color: 'var(--text-color)' }}>
                        <i className="fab fa-linkedin text-[1.2rem]" /> linkedin.com/in/gnaneshwar86
                    </a>
                    <a href="https://github.com/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.95rem] font-medium hover:text-[var(--primary-color)] transition-colors" style={{ color: 'var(--text-color)' }}>
                        <i className="fab fa-github text-[1.2rem]" /> github.com/gnaneshwar86
                    </a>
                </div>
            </motion.div>

            {/* ── SUMMARY ── */}
            <motion.section variants={fadeUp} custom={3} className="mb-16">
                <h3 className="text-[1.5rem] font-bold mb-4 uppercase tracking-wide border-b-2 inline-block pb-1" style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
                    Summary
                </h3>
                <p className="text-[1rem] leading-relaxed" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
                    Software Development Engineer with experience designing scalable software solutions and backend systems using Java and Spring Boot. Strong foundation in Data Structures, Algorithms, and Software Engineering principles, with hands-on experience in API development, query optimization, microservices-style architecture, and cloud platforms (AWS).
                    <br /><br />
                    Experienced in writing clean, maintainable code, participating in technical discussions, and building production-ready applications.
                </p>
            </motion.section>

            {/* ── SKILLS ── */}
            <motion.section variants={fadeUp} custom={4} className="mb-16">
                <h3 className="text-[1.5rem] font-bold mb-6 uppercase tracking-wide border-b-2 inline-block pb-1" style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
                    Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-[1.1rem] mb-2" style={{ color: 'var(--text-color)' }}>Programming Languages</h4>
                        <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>Java, C++, Python, JavaScript, SQL</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[1.1rem] mb-2" style={{ color: 'var(--text-color)' }}>Backend & API Development</h4>
                        <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>Spring Boot, RESTful APIs, Microservices Architecture</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[1.1rem] mb-2" style={{ color: 'var(--text-color)' }}>Databases</h4>
                        <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>MySQL, DBMS Concepts</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[1.1rem] mb-2" style={{ color: 'var(--text-color)' }}>Cloud Platforms & Tools</h4>
                        <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>AWS (EC2), Docker, CI/CD, Git, GitHub, Linux</p>
                    </div>
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-[1.1rem] mb-2" style={{ color: 'var(--text-color)' }}>Core Computer Science Concepts</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'Software Engineering Principles', 'System Design', 'Query Optimization', 'Operating Systems', 'Clean Coding Practices'].map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full text-[0.85rem] font-semibold" style={{ backgroundColor: 'var(--card-background)', color: 'var(--text-color)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ── EDUCATION ── */}
            <motion.section variants={fadeUp} custom={5} className="mb-16">
                <h3 className="text-[1.5rem] font-bold mb-6 uppercase tracking-wide border-b-2 inline-block pb-1" style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
                    Education
                </h3>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-background)' }}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="text-[1.2rem] font-bold" style={{ color: 'var(--text-color)' }}>Sri Krishna College of Engineering and Technology (SKCET)</h4>
                        <span className="mt-1 md:mt-0 font-semibold px-3 py-1 rounded-full text-[0.8rem]" style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}>
                            2023 – 2027
                        </span>
                    </div>
                    <p className="text-[1rem] font-medium" style={{ color: 'var(--text-color)', opacity: 0.9 }}>Bachelor of Engineering – Computer Science and Engineering</p>
                    <p className="text-[0.9rem] font-bold mt-2" style={{ color: 'var(--text-color)' }}>CGPA: 8.44</p>
                </div>
            </motion.section>

            {/* ── PROJECTS ── */}
            <motion.section variants={fadeUp} custom={6} className="mb-16">
                <h3 className="text-[1.5rem] font-bold mb-6 uppercase tracking-wide border-b-2 inline-block pb-1" style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
                    Projects
                </h3>

                <div className="mb-8">
                    <h4 className="text-[1.2rem] font-bold mb-1" style={{ color: 'var(--text-color)' }}>Gkart – Full-Stack Grocery Platform</h4>
                    <p className="text-[0.9rem] font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Technologies: React.js, Spring Boot, MySQL, Material UI</p>
                    <ul className="list-disc list-outside ml-5 space-y-1 text-[0.95rem]" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
                        <li>Designed and developed scalable backend systems using Spring Boot and MySQL for product management and transactional workflows.</li>
                        <li>Implemented REST APIs, pagination, caching, and query optimization to improve performance and ensure efficient database interactions.</li>
                        <li>Built production-ready features including JWT authentication and role-based access control.</li>
                        <li>Containerized and deployed the application using Docker on AWS EC2.</li>
                        <li>Followed clean architecture principles and modular backend development.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[1.2rem] font-bold mb-1" style={{ color: 'var(--text-color)' }}>Sign Language Recognition System</h4>
                    <p className="text-[0.9rem] font-semibold mb-3" style={{ color: 'var(--primary-color)' }}>Technologies: Python, TensorFlow, OpenCV, Deep Learning</p>
                    <ul className="list-disc list-outside ml-5 space-y-1 text-[0.95rem]" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
                        <li>Developed a deep learning-based video classification system for ASL gesture recognition.</li>
                        <li>Implemented frame extraction and spatiotemporal modeling for accurate gesture classification.</li>
                        <li>Applied transfer learning using a pretrained I3D model trained on a large-scale dataset (~2000 gesture classes).</li>
                        <li>Built a pipeline capable of real-time inference potential.</li>
                    </ul>
                </div>
            </motion.section>

            {/* ── ACHIEVEMENTS ── */}
            <motion.section variants={fadeUp} custom={7}>
                <h3 className="text-[1.5rem] font-bold mb-6 uppercase tracking-wide border-b-2 inline-block pb-1" style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}>
                    Achievements
                </h3>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[0.95rem]" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
                    <li>Solved 150+ Data Structures and Algorithms problems on LeetCode, improving algorithmic thinking and coding efficiency.</li>
                    <li>Qualified for the Inter-College Round of SAP Hackfest 2025.</li>
                    <li>Selected as a College-Level Qualifier for Smart India Hackathon (SIH) 2024.</li>
                    <li>Participated in IDEATHON at SKCET.</li>
                    <li>Deployed multiple projects using Git-based version control workflows and CI/CD practices.</li>
                    <li>Collaborated in team-based hackathons, demonstrating strong problem-solving and communication skills.</li>
                </ul>
            </motion.section>

            {/* ── PDF VIEWER ── */}
            <motion.div
                variants={fadeUp}
                custom={8}
                className="mt-16"
                style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
                }}
            >
                <div className="bg-[#1a1a1a] px-4 py-3 flex flex-wrap justify-between items-center gap-2 border-b border-[rgba(255,255,255,0.1)]">
                    <span className="text-[0.9rem] font-semibold flex items-center gap-2" style={{ color: "var(--text-color)" }}>
                        <i className="fas fa-file-pdf text-red-500"></i> Resume Preview
                    </span>
                    <a
                        href="/assets/Gnaneshwar_RL_Resume.pdf"
                        download
                        className="text-[0.8rem] px-3 py-1.5 rounded font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                        style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}
                    >
                        Download <i className="fas fa-download"></i>
                    </a>
                </div>
                <iframe
                    src="/assets/Gnaneshwar_RL_Resume.pdf#navpanes=0&scrollbar=0&view=FitH"
                    title="Gnaneshwar R L Resume"
                    scrolling="no"
                    className="h-[600px] sm:h-[800px] md:h-[1250px]"
                    style={{
                        width: "100%",
                        border: "none",
                        background: "#111",
                        overflow: "hidden"
                    }}
                >
                    <p className="text-white p-4">Unable to display PDF file. <a href="/assets/Gnaneshwar_RL_Resume.pdf" download className="text-[var(--primary-color)] underline">Download instead</a></p>
                </iframe>
            </motion.div>

        </motion.div>
    );
};

export default ResumePage;
