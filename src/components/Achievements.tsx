'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <section className="section-padding achievement-section" aria-labelledby="achievement-title">
      <div className="container">
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="achievement-copy">
            <span className="eyebrow">recent_signal</span>
            <h2 id="achievement-title">Fast under pressure. <em>Careful by default.</em></h2>
            <p>
              A finalist at HackFusion 2025 for building a secure Service Request Management Portal in a 12-hour sprint—using Django, JWT, and an Agile delivery loop that kept the team focused on the useful parts.
            </p>
          </div>
          <div className="achievement-metric">
            <span className="metric-value">12h</span>
            <span className="metric-label">from brief to finalist-grade working portal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
