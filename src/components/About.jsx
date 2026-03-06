import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const Section = ({ title, children, customDelay }) => (
    <motion.div variants={fadeUp} custom={customDelay} className="mb-10 text-left">
        <h3 className="text-[1.3rem] font-bold mb-3 uppercase tracking-wider" style={{ color: 'var(--primary-color)' }}>
            {title}
        </h3>
        <div className="text-[0.95rem] leading-relaxed space-y-4" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
            {children}
        </div>
    </motion.div>
);

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-80px' });

    return (
        <section id="about" className="mx-auto max-w-[1100px] px-4 md:px-8 mb-24 mt-10">
            {/* Divider */}
            <div className="w-full h-[2px] my-20" style={{ backgroundColor: 'var(--card-background)' }} />

            <motion.div
                ref={ref}
                className="flex flex-col items-center text-center"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.h2
                    variants={fadeUp}
                    custom={0}
                    className="text-[2.5rem] md:text-[3rem] font-bold mb-12 clip-text-selection"
                    style={{ color: 'var(--text-color)' }}
                >
                    About Me
                </motion.h2>

                <div className="max-w-[800px] w-full">
                    <Section title="Who I Am" customDelay={1}>
                        <p>
                            Hi, I'm <strong>Gnaneshwar R L</strong>, a Computer Science undergraduate at Sri Krishna College of Engineering and Technology (SKCET) with a strong interest in Software Development and Backend Engineering.
                        </p>
                        <p>
                            I enjoy building scalable systems, efficient APIs, and production-ready applications using modern technologies like Java, Spring Boot, and cloud platforms. My focus is on writing clean, maintainable code and designing systems that are both efficient and scalable.
                        </p>
                    </Section>

                    <Section title="What I Do" customDelay={2}>
                        <p>I primarily work in backend development, where I design and implement:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>RESTful APIs</li>
                            <li>Scalable backend services</li>
                            <li>Database-driven applications</li>
                            <li>Cloud-deployed systems</li>
                        </ul>
                        <p className="mt-4">
                            I also enjoy solving Data Structures and Algorithms problems, which helps strengthen my problem-solving ability and system design thinking.
                        </p>
                    </Section>

                    <Section title="My Technical Interests" customDelay={3}>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Backend Engineering</li>
                            <li>Distributed Systems</li>
                            <li>Microservices Architecture</li>
                            <li>Cloud Computing</li>
                            <li>System Design</li>
                            <li>Algorithmic Problem Solving</li>
                        </ul>
                    </Section>

                    <Section title="My Journey" customDelay={4}>
                        <p>
                            I began my journey in programming by learning core computer science fundamentals such as Data Structures, Algorithms, and Object-Oriented Programming. Over time, I started building real-world applications using Spring Boot, React, and cloud technologies.
                        </p>
                        <p>
                            Through projects like Gkart and my Sign Language Recognition System, I have gained hands-on experience in API design, database optimization, deep learning workflows, and scalable application development.
                        </p>
                    </Section>

                    <Section title="Beyond Coding" customDelay={5}>
                        <p>
                            Apart from building software, I actively participate in hackathons and technical competitions, where I collaborate with teams to solve real-world problems. These experiences help me grow as both a developer and a problem solver.
                        </p>
                    </Section>

                    <Section title="Career Goal" customDelay={6}>
                        <p>
                            My goal is to become a Software Development Engineer, working on large-scale systems where I can contribute to building efficient, scalable, and impactful software solutions.
                        </p>
                    </Section>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
