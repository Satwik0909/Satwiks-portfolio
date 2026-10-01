'use client';

import { Database, Gauge, Layers3, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Database,
    title: 'Backend architecture',
    description: 'Django services, REST APIs, data models, and integrations designed around the way the product actually works.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure workflows',
    description: 'Authentication, RBAC, validation, and payment flows that protect both the people using the system and the data inside it.',
  },
  {
    icon: Layers3,
    title: 'Full-stack delivery',
    description: 'Responsive React interfaces connected to dependable APIs, with the edge cases considered before launch day.',
  },
  {
    icon: Gauge,
    title: 'Production hardening',
    description: 'Testing, performance work, deployment, and the operational details that turn a promising build into a useful one.',
  },
];

const stack = ['Python', 'Django', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB', 'JWT', 'REST APIs', 'CI/CD', 'VPS'];

export default function Services() {
  return (
    <section id="services" className="section-padding services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">capabilities</span>
            <h2 id="services-title" className="section-heading">
              Useful software,
              <br />
              <em>without the noise.</em>
            </h2>
          </div>
          <p className="section-intro">
            The best technical work is felt in the product: faster decisions, fewer surprises, and a system that can keep growing after handoff.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
              >
                <span className="service-icon" aria-hidden="true"><Icon /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="stack-strip" aria-label="Technology stack">
          <span className="stack-strip-label">stack.log</span>
          <div className="stack-strip-items">
            {[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
