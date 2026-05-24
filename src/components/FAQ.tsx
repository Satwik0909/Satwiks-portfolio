'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is my core software expertise?",
        answer: "I am a Backend-focused Software Developer with deep expertise in Python, Django, and the Django REST Framework. I also build full-stack interfaces with React.js and manage production databases like PostgreSQL and MongoDB."
    },
    {
        question: "How can I access your GitHub and LinkedIn?",
        answer: (
            <span>
                You can explore my code on <a href="https://github.com" target="_blank" className="text-white border-b border-white/20">GitHub</a>,
                or connect with me for professional inquiries on <a href="https://linkedin.com" target="_blank" className="text-white border-b border-white/20">LinkedIn</a>.
                I'm always open to networking!
            </span>
        )
    },
    {
        question: "What major projects have I delivered?",
        answer: "I've engineered national-level SaaS platforms, including a comprehensive School ERP system and a Service Request Management portal that won me a finalist spot in HackFusion 2025."
    },
    {
        question: "What is my background and education?",
        answer: "I hold a Bachelor of Computer Applications (BCA) from IBMR College. My journey includes impact-driven roles at Sajre Edutech and performance-focused internships at Opslify and LetzStepIn."
    },
    {
        question: "Are you available for freelance or full-time roles?",
        answer: "Yes! I am currently available for new opportunities. Whether it's a backend architectural challenge or building a SaaS from scratch, I'm ready to dive in."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding">
            <div className="container">
                <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="faq-header"
                    >
                        <div className="mb-6 badge-container">
                            <span className="badge badge-outline">Questions</span>
                        </div>
                        <h2 className="mb-4">Common <span className="opacity-40">Queries</span></h2>
                        <p className="description" style={{ color: 'var(--secondary)', maxWidth: '400px' }}>
                            Everything you might need to know about my workflow, expertise, and availability.
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    borderBottom: '1px solid var(--border)',
                                    padding: '1.5rem 0'
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        padding: 0,
                                        gap: '1rem'
                                    }}
                                >
                                    <span className="text-lg md:text-xl font-medium">{faq.question}</span>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        flexShrink: 0,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--secondary)'
                                    }}>
                                        {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{
                                                paddingTop: '1rem',
                                                color: 'var(--secondary)',
                                                lineHeight: '1.8',
                                                fontSize: '0.95rem',
                                                maxWidth: '95%'
                                            }}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        @media (max-width: 1024px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem;
          }
          .faq-header {
            text-align: center;
          }
          .badge-container {
            display: flex;
            justify-content: center;
          }
          .description {
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
