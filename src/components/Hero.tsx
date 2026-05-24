'use client';

import { motion } from 'framer-motion';
import Aurora from './ui/Aurora';

interface HeroProps {
    onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
    const experiences = [
        { type: "Full-Stack", role: "Sajre Edutech", period: "Currently" },
        { type: "Intern", role: "Opslify Software", period: "2025" },
        { type: "Intern", role: "LetzStepIn", period: "2024-25" },
    ];

    const badges = ["Software Developer", "Backend Architecture", "Full-Stack", "Django/DRF", "React.js"];

    return (
        <section className="section-padding min-h-screen flex items-center pt-24 md:pt-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Aurora
                    colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className="container relative z-10">
                <div style={{ maxWidth: '1200px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }} className="hero-grid">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.1 }}>
                                Meet Satwik
                            </h1>

                            <p style={{ fontSize: '17px', color: 'var(--secondary)', lineHeight: '1.6', maxWidth: '65%', marginBottom: '24px' }}>
                                I'm Satwik, a passionate Backend-focused Software Developer based in India.
                                I specialize in crafting secure, scalable systems that captivate and inspire.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                                {badges.map((badge, i) => (
                                    <span key={i} className="badge badge-outline">
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <div className="experience-table" style={{ marginTop: '32px' }}>
                                {experiences.map((exp, i) => (
                                    <div key={i} className="experience-row">
                                        <span className="experience-type">{exp.type}</span>
                                        <span className="experience-company">{exp.role}</span>
                                        <span className="experience-period">{exp.period}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
                                <motion.div
                                    onClick={onOpenResume}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all" style={{ borderColor: 'var(--border)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-lg md:text-xl">Resume</span>
                                </motion.div>

                                <div className="flex items-center gap-4 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center" style={{ borderColor: 'var(--border)' }}>
                                        <span className="text-xs font-bold">W</span>
                                    </div>
                                    <span className="font-semibold text-lg md:text-xl">Recent Works</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden md:block"
                            style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                aspectRatio: '0.9',
                                background: 'var(--surface-alt)'
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                alt="Satwik Kukadolli"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',
                                }}
                            />
                        </motion.div>

                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                    }
                    p {
                        max-width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
}
