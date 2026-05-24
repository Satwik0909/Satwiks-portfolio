'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your project goals and user needs to build a solid architectural foundation."
    },
    {
        number: "02",
        title: "Engineering & Dev",
        desc: "Secure, scalable backend logic meets sleek, responsive frontend implementation using modern stacks."
    },
    {
        number: "03",
        title: "Testing & Launch",
        desc: "Rigorous debugging and performance optimization before deploying to production environments."
    }
];

export default function Process() {
    return (
        <section id="process" className="section-padding" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="process-content"
                    >
                        <div className="mb-6">
                            <span className="badge badge-outline">Our Process</span>
                        </div>
                        <h2 className="mb-8 md:mb-12">Crafting bold visuals that <span className="opacity-40">elevate brands</span></h2>

                        <div className="steps-container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 md:gap-6">
                                    <span className="text-sm font-bold opacity-30 mt-1">{step.number}</span>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-sm md:text-base" style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="process-image-container hidden md:block"
                        style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '0.9',
                            background: '#0a0a0a'
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                            alt="Process"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                        />
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .process-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .steps-container {
                        text-align: left;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                    .badge {
                        margin: 0 auto;
                    }
                    h2 {
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
}
