'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function CareerTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="v2-section v2-career" aria-labelledby="career-title" data-section-reveal>
      <div className="v2-container">
        <header className="v2-section-head v2-section-head--compact">
          <span className="v2-kicker">05 / Production timeline</span>
          <div><h2 id="career-title">The receipts,<br /><em>in sequence.</em></h2></div>
        </header>
        <div className="v2-career__list">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="v2-career-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <span className="v2-career-row__period">{item.period}</span>
              <div className="v2-career-row__title"><strong>{item.role}</strong><span>{item.company}</span></div>
              <p>{item.summary}</p>
              <ul>{item.stack.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <ArrowUpRight aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

