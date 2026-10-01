'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Map the real problem',
    desc: 'Clarify the users, the constraints, and the data moving through the product before a line of code gets precious.',
  },
  {
    number: '02',
    title: 'Design for the next version',
    desc: 'Choose boundaries, permissions, and APIs that keep the first release focused without making the second release painful.',
  },
  {
    number: '03',
    title: 'Ship, observe, improve',
    desc: 'Test the edges, deploy with confidence, and use real feedback to make the system faster and easier to operate.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding process-section" aria-labelledby="process-title">
      <div className="container process-layout">
        <motion.div
          className="process-copy"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">how_it_works</span>
          <h2 id="process-title">Less theatre. <em>More signal.</em></h2>
          <p>
            A small, transparent process keeps the work moving. No mystery handoffs—just clear decisions, useful checkpoints, and software that earns its place in production.
          </p>
        </motion.div>

        <div className="process-list">
          {steps.map((step, index) => (
            <motion.article
              className="process-item"
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span className="process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <span className="process-arrow" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
