'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "School ERP SaaS",
        category: "Backend / Full-Stack",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Fitness Membership",
        category: "Management System",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1587&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Banquet Booking",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <div className="mb-16">
                    <h2 className="mb-4">Recent <span className="opacity-40">Works</span></h2>
                    <p style={{ color: 'var(--secondary)', maxWidth: '500px' }}>
                        A collection of production-grade systems engineered for performance and reliability.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden"
                            style={{ borderRadius: '24px' }}
                        >
                            <div style={{ aspectRatio: '1.2', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)',
                                        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s ease'
                                    }}
                                    className="project-image"
                                />
                            </div>

                            {/* Glass Bottom Bar */}
                            <div
                                className="project-overlay glass"
                                style={{ borderRadius: '16px', backdropFilter: 'blur(20px)' }}
                            >
                                <span className="font-semibold text-sm">View Casestudy</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="mt-6">
                                <h3 className="m-0 text-xl font-semibold mb-1">{project.title}</h3>
                                <span className="text-sm tracking-wider uppercase opacity-40 font-bold">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                }
                .project-overlay {
                    position: absolute;
                    bottom: 1rem;
                    left: 1rem;
                    right: 1rem;
                    height: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 1.5rem;
                    transform: translateY(1rem);
                    opacity: 0;
                    transition: all 0.5s ease;
                }
                .group:hover .project-overlay {
                    transform: translateY(0);
                    opacity: 1;
                }
                .group:hover .project-image {
                    transform: scale(1.05);
                    filter: grayscale(0%);
                }
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .project-overlay {
                        transform: translateY(0);
                        opacity: 1;
                        height: 3.5rem;
                        background: rgba(255, 255, 255, 0.1);
                    }
                    .project-image {
                        filter: grayscale(0%);
                    }
                    h2 {
                      text-align: center;
                    }
                    p {
                      text-align: center;
                      margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
}
