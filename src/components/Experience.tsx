'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: "SAJRE EDUTECH PRIVATE LIMITED",
        role: "Software Developer",
        period: "09/2025 – Present",
        desc: "Developing national-level SaaS platforms. Building secure enrollment workflows, payment integrations, and progression systems using Django and REST APIs. Engineered multi-role access control systems (RBAC).",
        highlights: ["SaaS Backend Architecture", "Payment & JWT Security", "CI/CD & VPS Management"]
    },
    {
        company: "Opslify Software Solutions",
        role: "Full-Stack Web Developer (Intern)",
        period: "07/2025 – 08/2025",
        desc: "Developed and deployed the official company website from scratch. Coordinated tasks within a small development team and optimized performance for faster load times.",
        highlights: ["From-Scratch Development", "Performance Optimization", "Stakeholder Alignment"]
    },
    {
        company: "LetzStepIn Private Limited",
        role: "Full-Stack Web Developer (Intern)",
        period: "11/2024 – 03/2025",
        desc: "Built responsive UIs for a VR-enabled travel platform using React and Bootstrap. Worked in Agile teams with Git workflows and participated in daily standups.",
        highlights: ["React & VR Integration", "Agile Methodologies", "Cross-browser Compatibility"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding" style={{ background: 'var(--background)' }}>
            <div className="container">
                <h2 className="text-center mb-20">Work <span style={{ color: 'var(--accent)' }}>Timeline</span></h2>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent), var(--surface))'
                    }} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            style={{ marginBottom: '4rem', paddingLeft: '60px', position: 'relative' }}
                        >
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px',
                                top: '5px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                border: '4px solid var(--background)',
                                zIndex: 2
                            }} />

                            <div className="glass p-8" style={{ borderRadius: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent)', textTransform: 'uppercase' }}>{exp.period}</span>
                                <h3 className="text-2xl mt-2 mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-[var(--secondary)] mb-4">{exp.company}</h4>
                                <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>{exp.desc}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {exp.highlights.map((h, i) => (
                                        <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
