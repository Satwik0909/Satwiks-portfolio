'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { operatingLoop } from '@/data/portfolio';

export default function OperatingSystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="systems" className="v2-section v2-operating" aria-labelledby="operating-title" data-section-reveal>
      <div className="v2-container">
        <header className="v2-section-head v2-section-head--light">
          <span className="v2-kicker">02 / Operating model</span>
          <div>
            <h2 id="operating-title">From messy signal<br />to <em>measurable motion.</em></h2>
            <p>The role is not “build whatever the client asks.” It is to find the leverage point, deliver the durable path, and make the result easier to repeat.</p>
          </div>
        </header>

        <div className="v2-operating__shell">
          <div className="v2-operating__map" aria-hidden="true">
            <div className="v2-operating__map-topline"><span>FLOW_0{activeIndex + 1}</span><span>field → growth</span></div>
            <div className="v2-operating__radar">
              <span className="v2-radar-ring v2-radar-ring--one" />
              <span className="v2-radar-ring v2-radar-ring--two" />
              <span className="v2-radar-ring v2-radar-ring--three" />
              <span className="v2-radar-sweep" />
              <strong>{operatingLoop[activeIndex].verb}</strong>
              {operatingLoop.map((step, index) => (
                <span key={step.index} className={`v2-radar-node v2-radar-node--${index + 1}${index <= activeIndex ? ' is-active' : ''}`}>{step.index}</span>
              ))}
            </div>
            <div className="v2-operating__signal">
              <span>current signal</span>
              <strong>{operatingLoop[activeIndex].signal}</strong>
            </div>
          </div>

          <div className="v2-operating__steps">
            {operatingLoop.map((step, index) => (
              <motion.article
                key={step.index}
                className={`v2-loop-step${activeIndex === index ? ' is-active' : ''}`}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.65 }}
                initial={prefersReducedMotion ? false : { opacity: 0.45, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="v2-loop-step__index">{step.index}</span>
                <div>
                  <p>{step.verb}</p>
                  <h3>{step.title}</h3>
                  <span>{step.copy}</span>
                </div>
                <ArrowRight aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

