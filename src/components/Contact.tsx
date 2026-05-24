'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="section-padding relative min-h-screen flex items-center overflow-hidden py-24">

            {/* Smoky / Fluid Background Effect */}
            <div className="absolute inset-0 z-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 50, -50, 0],
                            y: [0, -30, 30, 0],
                            scale: [1, 1.1, 0.9, 1],
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            top: '20%',
                            left: i * 30 + '%',
                            width: '80vw',
                            height: '80vw',
                            background: 'radial-gradient(circle, var(--smoke-color) 0%, transparent 70%)',
                            filter: 'blur(80px)',
                            pointerEvents: 'none'
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-8 md:mb-12 flex justify-center">
                        <span className="badge badge-outline">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Available For Work
                        </span>
                    </div>

                    <h2 className="mb-12 max-w-4xl mx-auto px-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)', lineHeight: 1.2 }}>
                        Curious about what we can create together? <br className="hidden md:block" />
                        Let's bring something <span className="opacity-40">extraordinary</span> to life!
                    </h2>

                    <div className="flex flex-col items-center gap-10 md:gap-16">
                        <a
                            href="mailto:satwikkukadolli@gmail.com"
                            className="text-base md:text-lg font-bold bg-foreground text-background px-10 md:px-14 py-4 md:py-5 rounded-full hover:scale-105 transition-all shadow-[0_0_40px_var(--border)]"
                            style={{ background: 'var(--foreground)', color: 'var(--background)' }}
                        >
                            Book a Free Call
                        </a>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center opacity-40 hover:opacity-100 transition-opacity">
                            <a href="https://github.com" target="_blank" className="font-bold tracking-widest text-[10px] md:text-xs">GITHUB</a>
                            <div className="hidden md:block w-px h-4" style={{ backgroundColor: 'var(--border)' }}></div>
                            <a href="https://linkedin.com" target="_blank" className="font-bold tracking-widest text-[10px] md:text-xs">LINKEDIN</a>
                            <div className="hidden md:block w-px h-4" style={{ backgroundColor: 'var(--border)' }}></div>
                            <a href="https://twitter.com" target="_blank" className="font-bold tracking-widest text-[10px] md:text-xs">TWITTER</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="absolute bottom-6 md:bottom-10 left-0 right-0">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-30 text-center">
                    <span>© {new Date().getFullYear()} SATWIK K.</span>
                    <span className="hidden md:block">Based in Dharwad, India</span>
                    <span>All Rights Reserved</span>
                </div>
            </footer>
        </section>
    );
}
