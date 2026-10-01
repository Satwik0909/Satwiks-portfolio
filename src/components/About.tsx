'use client';

import { motion } from 'framer-motion';

export default function About() {
    const skills = {
        "Languages": ["Python", "JavaScript", "Java", "HTML5", "CSS3"],
        "Backend": ["Django", "Django REST Framework", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
        "Frontend": ["React.js", "Tailwind CSS", "Bootstrap"],
    };

    const strengths = [
        "Backend-focused problem solver",
        "System-level thinking",
        "Fast-paced production environments",
        "Agile & CI/CD proficient"
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-8">The <span style={{ color: 'var(--accent)' }}>Mission</span></h2>
                        <p className="text-lg mb-8" style={{ color: 'var(--secondary)', lineHeight: '1.8' }}>
                            I build and maintain production-grade web and SaaS platforms.
                            My focus is on **backend clarity, data flow, and engineering decisions** that scale reliably over time.
                            From designing secure REST APIs to managing multi-role systems, I thrive on solving complex real-world production issues.
                        </p>

                        <h3 className="text-xl mb-4">Core Strengths</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {strengths.map((strength, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: 'var(--secondary)' }}
                                >
                                    <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>✓</span> {strength}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12 p-8 glass" style={{ borderRadius: '1.5rem' }}>
                            <h4 className="mb-2">Education</h4>
                            <p className="font-bold">Bachelor of Computer Applications (BCA)</p>
                            <p style={{ color: 'var(--secondary)' }}>IBMR College, Hubli | 2022 – 2025</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-8">Technical <span style={{ color: 'var(--accent)' }}>Stack</span></h2>

                        {Object.entries(skills).map(([category, list]) => (
                            <div key={category} className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[var(--secondary)]">
                                    {category}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {list.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff' }}
                                            className="glass"
                                            style={{ padding: '0.6rem 1.2rem', borderRadius: '0.75rem', fontSize: '0.9rem', cursor: 'default' }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="mt-12">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[var(--secondary)]">Tools & Platforms</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>
                                Git • GitHub • Postman • VS Code • Render • Netlify • VPS • JWT
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
