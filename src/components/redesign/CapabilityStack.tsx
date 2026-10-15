'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, CircleCheck, CircleDashed } from 'lucide-react';
import { capabilityLayers, frontierSkills } from '@/data/portfolio';

export default function CapabilityStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="capabilities" className="v2-section v2-capabilities" aria-labelledby="capabilities-title" data-section-reveal>
      <div className="v2-container">
        <header className="v2-section-head">
          <span className="v2-kicker">04 / Capability stack</span>
          <div>
            <h2 id="capabilities-title">Deep enough to build.<br /><em>Close enough to matter.</em></h2>
            <p>A modern field-and-growth engineer crosses commercial context, automation, product systems, and production reliability without pretending every tool has already been mastered.</p>
          </div>
        </header>

        <div className="v2-capabilities__layers">
          {capabilityLayers.map((layer, index) => (
            <motion.article
              key={layer.index}
              className="v2-capability-layer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <div className="v2-capability-layer__index">{layer.index}</div>
              <div className="v2-capability-layer__copy">
                <div><h3>{layer.title}</h3><span><CircleCheck aria-hidden="true" />{layer.status}</span></div>
                <p>{layer.copy}</p>
              </div>
              <ul>{layer.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <ArrowDownRight aria-hidden="true" />
            </motion.article>
          ))}
        </div>

        <div className="v2-frontier">
          <div className="v2-frontier__copy">
            <span><CircleDashed aria-hidden="true" /> 2026 build frontier</span>
            <h3>What I am actively turning into the next layer of proof.</h3>
            <p>These are developing capabilities—not disguised client claims. The goal is to combine my production engineering base with the current GTM systems stack.</p>
          </div>
          <div className="v2-frontier__skills">
            {frontierSkills.map((skill, index) => <motion.span key={skill} initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.045 }}>{skill}</motion.span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

