'use client';

import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand the gap',
    desc: 'Start with the people, constraints, and manual work behind the request—not just the feature list.',
    example: 'School, competition, and enrollment requirements translated into clear workflows.',
    signal: 'discovery',
  },
  {
    number: '02',
    title: 'Design the system',
    desc: 'Choose boundaries, permissions, data flows, and APIs that keep the first useful release safe to extend.',
    example: 'Multi-role portals with JWT authentication, RBAC, and role-specific dashboards.',
    signal: 'architecture',
  },
  {
    number: '03',
    title: 'Ship it live',
    desc: 'Test the edges, automate delivery, and deploy where the product needs to run—not where it is easiest to demo.',
    example: 'VPS deployment, CI/CD, PostgreSQL query tuning, and production runbooks.',
    signal: 'delivery',
  },
  {
    number: '04',
    title: 'Automate the grind',
    desc: 'Turn repeatable operations into reliable workflows with clear retries, permissions, and observable outcomes.',
    example: 'WhatsApp notifications, referrals, certificate generation, and AI-assisted validation.',
    signal: 'automation',
  },
  {
    number: '05',
    title: 'Stay on call',
    desc: 'Ownership does not end at launch. Monitor the system, fix the sharp edges, and keep learning from use.',
    example: 'API tests, monitoring, recovery notes, and a bias toward boring reliability.',
    signal: 'ownership',
  },
];

export default function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="process" className="section-padding process-section" aria-labelledby="process-title">
      <div className="container process-layout">
        <motion.div
          className="process-copy"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">the_fde_loop</span>
          <h2 id="process-title">From messy brief to <em>useful system.</em></h2>
          <p>
            Forward-deployed work lives between product, engineering, and operations. This is the loop I use to turn an ambiguous customer problem into software that can hold up in the real world.
          </p>
        </motion.div>

        <div className="process-list" aria-label="Forward-deployed engineering process">
          {steps.map((step, index) => (
            <motion.article
              className="process-item process-item--loop"
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span className="process-number">{step.number}</span>
              <div className="process-item__body">
                <div className="process-item__heading">
                  <h3>{step.title}</h3>
                  <span className="process-signal">{step.signal}</span>
                </div>
                <p>{step.desc}</p>
                <div className="process-example">
                  <span className="process-example__label">proof /</span>
                  <span>{step.example}</span>
                </div>
              </div>
              <span className="process-arrow" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
