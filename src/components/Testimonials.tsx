'use client';

import { motion } from 'framer-motion';

const testimonials = [
    { text: "Antigravity's attention to detail is unmatched. Our conversion rate increased by 40%.", author: "Jane Doe, CEO at Flow" },
    { text: "A true professional who understands both design and strategy perfectly.", author: "Mark Smith, Founder of Spark" },
    { text: "Brought our vision to life with a stunning brand identity.", author: "Sarah Lee, Marketing Director" }
];

export default function Testimonials() {
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center mb-16">Client <span style={{ color: 'var(--accent)' }}>Love</span></h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass p-10 mb-8"
                            style={{ borderRadius: '2rem', padding: '3rem' }}
                        >
                            <p className="text-xl italic mb-6">"{t.text}"</p>
                            <p className="font-bold text-[var(--accent)]">{t.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
