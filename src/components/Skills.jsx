import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillsData = [
    {
        category: 'Languages',
        items: [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
            { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
            { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
        ]
    },
    {
        category: 'Backend & APIs',
        items: [
            { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
            { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg' },
            { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
        ]
    },
    {
        category: 'Databases',
        items: [
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
            { name: 'DBMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        ]
    },
    {
        category: 'Cloud & Tools',
        items: [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
            { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
            { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
        ]
    }
];

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
};

// Hexagon shaped card
const HexagonSkill = ({ name, icon }) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="relative flex flex-col items-center justify-center w-[110px] h-[120px] m-1 group cursor-default shadow-lg"
            style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundColor: 'var(--card-background)',
            }}
        >
            <div className="flex flex-col items-center justify-center w-[106px] h-[116px] bg-gradient-to-b from-black/5 to-black/10 dark:from-white/5 dark:to-transparent transition-all duration-300 group-hover:bg-[var(--primary-color)]"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}>
                <img
                    src={icon}
                    alt={name}
                    className="w-10 h-10 object-contain mb-2 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm"
                    style={{
                        filter: name === 'GitHub'
                            ? 'brightness(0) invert(0)'
                            : name === 'REST'
                                ? 'brightness(0) invert(var(--tw-invert, 1))'
                                : 'none'
                    }}
                />
                <span className="text-[0.65rem] font-bold text-center leading-tight group-hover:text-black px-1" style={{ color: 'var(--text-color)' }}>
                    {name}
                </span>
            </div>
        </motion.div>
    );
};

// A row of honeycomb hexagons requires alternating margins.
// We handle this layout by using flex wrap and a container.
const CategorySection = ({ category, items }) => {
    return (
        <div className="flex flex-col items-center w-full mb-12">
            <motion.h3
                variants={itemVariants}
                className="text-[1.2rem] font-bold uppercase tracking-wider mb-6 pb-2 border-b-2"
                style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)' }}
            >
                {category}
            </motion.h3>

            {/* Container for hexagons */}
            <motion.div
                className="flex flex-wrap justify-center items-center max-w-[800px]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-50px' }}
            >
                {items.map((skill) => (
                    <HexagonSkill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-80px' });

    return (
        <section id="skills" className="mx-auto max-w-[1100px] px-4 md:px-8 mb-24 mt-10">
            <div className="w-full h-[2px] my-20" style={{ backgroundColor: 'var(--card-background)' }} />

            <motion.div
                ref={ref}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={sectionVariants}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-[2.5rem] md:text-[3rem] font-bold mb-4 clip-text-selection"
                    style={{ color: 'var(--text-color)' }}
                >
                    My Skills
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl text-[1rem] mb-16"
                    style={{ color: 'var(--text-color)', opacity: 0.75 }}
                >
                    A comprehensive overview of the technologies, languages, and tools I use to build robust and scalable applications.
                </motion.p>
            </motion.div>

            {/* Categories displayed simultaneously */}
            <div className="flex flex-col items-center w-full">
                {skillsData.map((data, index) => (
                    <CategorySection key={data.category} category={data.category} items={data.items} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
