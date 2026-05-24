'use client';

import { motion } from 'framer-motion';
import { Layout, Palette, Code, Smartphone, Database } from 'lucide-react';

const services = [
    { icon: <Layout strokeWidth={1.5} />, title: "Brand Identity", desc: "Crafting unique, memorable brand identities that resonate with your audience." },
    { icon: <Palette strokeWidth={1.5} />, title: "Brand Design", desc: "Designing sleek, impactful packaging that not only looks stunning but connects." },
    { icon: <Database strokeWidth={1.5} />, title: "Backend Systems", desc: "Building robust server-side logic and highly secure database architectures." },
    { icon: <Smartphone strokeWidth={1.5} />, title: "Full-Stack SaaS", desc: "Tailored mobile and web experiences that align perfectly with your brand's aesthetic." }
];

const tags = [
    "Django", "React.js", "Node.js", "PostgreSQL", "Full-Stack", "Backend",
    "SaaS", "RBAC", "Cloud Deployment", "API Integration", "CI/CD", "Postman"
];

export default function Services() {
    return (
        <section id="services" className="section-padding overflow-hidden">
            <div className="container">
                <h2 className="mb-12 md:mb-20 text-center">Our <span className="opacity-40">Expertise</span></h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 md:p-10 glass hover:bg-surface transition-colors"
                            style={{ borderRadius: '24px' }}
                        >
                            <div className="mb-6 flex justify-center md:justify-start" style={{ color: 'var(--accent)' }}>{service.icon}</div>
                            <h3 className="mb-4 text-xl font-semibold text-center md:text-left">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-center md:text-left" style={{ color: 'var(--secondary)' }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Marquee Ticker */}
            <div className="mt-20 md:mt-32 marquee-container border-y py-6 md:py-10" style={{ borderColor: 'var(--border)' }}>
                <div className="marquee-inner">
                    {[...tags, ...tags].map((tag, i) => (
                        <div key={i} className="inline-flex items-center mx-6 md:mx-8">
                            <span className="w-1.5 h-1.5 rounded-full mr-3 md:mr-4" style={{ backgroundColor: 'var(--border)' }}></span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-default">
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
