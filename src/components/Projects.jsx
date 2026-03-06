import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'EventMate – College Event Management System',
        stack: 'Spring Boot, React, MySQL, REST API',
        image: '/assets/project/eventmate.png',
        github: 'https://github.com/gnaneshwar86/EventMate-CollegeEventManagementSystem',
        demo: 'https://eventmate-eta.vercel.app/',
    },
    {
        id: 2,
        title: 'EtherVault – Academic Certificate Validator',
        stack: 'Blockchain, React, Node.js, Web3',
        image: '/assets/project/ethervault.png',
        github: 'https://github.com/gnaneshwar86/EtherVault_Authenticity-Academia-Validator',
        demo: '#',
    },
    {
        id: 3,
        title: 'GKart – Online Grocery Shopping Platform',
        stack: 'React, Spring Boot, Material UI, MySQL',
        image: '/assets/project/gkart.png',
        github: 'https://github.com/gnaneshwar86/GKart',
        demo: '#',
    },
    {
        id: 4,
        title: 'Social Fitness Tracker',
        stack: 'Java, Spring Boot, REST API',
        image: '/assets/project/fitness.png',
        github: '#',
        demo: '#',
    },
    {
        id: 5,
        title: 'Sign Language Recognition App',
        stack: 'Python, TensorFlow, OpenCV, Deep Learning',
        image: '/assets/project/signlanguage.png',
        github: 'https://github.com/gnaneshwar86/Sign-Language-Recognition-App',
        demo: '#',
    },
    {
        id: 6,
        title: 'Identity Reconciliation Backend',
        stack: 'Spring Boot, Docker, MySQL, REST API',
        image: '/assets/project/identity.png',
        github: 'https://github.com/gnaneshwar86/identity-reconciliation-backend-project',
        demo: '#',
    },
];

// Card entrance variant
const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: 'easeOut',
        },
    }),
};

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer group"
            style={{
                backgroundColor: 'var(--card-background)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            whileHover={{
                y: -6,
                boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
                transition: { duration: 0.25 },
            }}
        >
            {/* Image — zooms slightly on hover */}
            <div className="overflow-hidden h-[180px] w-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Info panel — always visible */}
            <div className="flex items-start justify-between gap-2 p-4">
                <div className="flex-1 min-w-0">
                    <h3
                        className="text-[0.88rem] font-bold leading-snug mb-1 transition-colors duration-200 group-hover:text-[var(--primary-color)] line-clamp-2"
                        style={{ color: 'var(--text-color)' }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-[0.75rem] font-medium" style={{ color: 'var(--text-color)', opacity: 0.55 }}>
                        {project.stack}
                    </p>
                </div>

                {/* Action links */}
                <div className="flex gap-2 items-center shrink-0 mt-0.5">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="text-[1.15rem] transition-all duration-200 hover:scale-110"
                        style={{ color: 'var(--text-color)', opacity: 0.65 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-color)', e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-color)', e.currentTarget.style.opacity = '0.65')}
                        onClick={e => e.stopPropagation()}
                    >
                        <i className="fab fa-github" />
                    </a>
                    {project.demo && project.demo !== '#' && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Demo"
                            className="text-[1.05rem] transition-all duration-200 hover:scale-110"
                            style={{ color: 'var(--text-color)', opacity: 0.65 }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-color)', e.currentTarget.style.opacity = '1')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-color)', e.currentTarget.style.opacity = '0.65')}
                            onClick={e => e.stopPropagation()}
                        >
                            <i className="fas fa-globe" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);
    // once: false so it re-triggers every time section scrolls into view
    const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

    return (
        <section id="projects" className="mx-auto max-w-[1100px] px-4 md:px-8 flex flex-col mb-20">
            {/* Divider */}
            <div className="w-full h-[2px] my-20" style={{ backgroundColor: 'var(--card-background)' }} />

            <div ref={sectionRef}>
                {/* Section heading */}
                <motion.div
                    className="text-center mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <h2
                        className="text-[2.5rem] md:text-[3rem] font-bold clip-text-selection"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Projects
                    </h2>
                    <p className="mt-2" style={{ color: 'var(--text-color)' }}>
                        Projects that reflect my work in building reliable and scalable software.
                    </p>
                </motion.div>

                {/* Project grid — staggered cards */}
                <motion.article
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </motion.article>

                {/* See More button */}
                {/* <motion.div
                className="flex justify-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.65 }}
            >
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full uppercase text-[0.82rem] font-bold transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--bg-primary)' }}
                >
                    See More <i className="fas fa-arrow-right ml-2 text-[0.9rem]" />
                </a>
            </motion.div> */}
            </div>
        </section>
    );
};

export default Projects;
