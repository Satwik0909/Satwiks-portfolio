'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
    return (
        <section className="section-padding">
            <div className="container">
                <div
                    className="glass text-center relative overflow-hidden"
                    style={{
                        border: '1px solid var(--border)',
                        borderRadius: '32px',
                        padding: '60px 24px'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8 flex justify-center">
                            <span className="badge badge-outline">Achievement</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-5xl">HackFusion 2025 Finalist</h2>
                        <p className="text-base md:text-xl max-w-2xl mx-auto mb-12" style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                            Recognized for engineering a secure, high-performance Service Request Management Portal
                            within 12 hours. Built using JWT, Django, and Agile methodologies.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-40">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest">JWT SECURITY</span>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest">AGILE SPRINTS</span>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest">DJANGO BACKEND</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
        @media (min-width: 768px) {
          div[style*="padding: 60px 24px"] {
            padding: 100px 60px !important;
          }
        }
      `}</style>
        </section>
    );
}
