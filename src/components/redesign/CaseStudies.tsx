'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/portfolio';
import TiltCard from '@/components/ui/smoothui/tilt-card';

function CaseDiagram({ flow, tone }: { flow: readonly string[]; tone: string }) {
  return (
    <div className={`v2-case-diagram v2-case-diagram--${tone}`} aria-hidden="true">
      <div className="v2-case-diagram__grid" />
      <svg viewBox="0 0 680 300" preserveAspectRatio="none">
        <path d="M82 151C176 34 233 263 340 151C447 38 505 268 598 151" />
      </svg>
      {flow.map((item, index) => (
        <span className={`v2-case-diagram__node v2-case-diagram__node--${index + 1}`} key={item}>
          <i />{item}
        </span>
      ))}
      <div className="v2-case-diagram__pulse" />
    </div>
  );
}

export default function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="v2-section v2-work" aria-labelledby="work-title" data-section-reveal>
      <div className="v2-container">
        <header className="v2-section-head">
          <span className="v2-kicker">03 / Selected systems</span>
          <div>
            <h2 id="work-title">Built for the moment<br />the workflow gets <em>real.</em></h2>
            <p>Production work, personal systems, and one representative GTM architecture—each labeled clearly so the evidence stays as strong as the presentation.</p>
          </div>
        </header>

        <div className="v2-work__grid">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.index}
              className={`v2-case v2-case--${index === 0 ? 'featured' : 'standard'}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="v2-case__tilt" glare glareOpacity={0.07} maxTilt={index === 0 ? 2.5 : 3.5} scale={1.006}>
                <div className="v2-case__inner">
                  <div className="v2-case__topline"><span>CASE / {study.index}</span><span>{study.eyebrow}</span></div>
                  <CaseDiagram flow={study.flow} tone={study.tone} />
                  <div className="v2-case__content">
                    <div className="v2-case__heading">
                      <div><p>{study.name}</p><h3>{study.title}</h3></div>
                      <a href={study.href} target={study.href.startsWith('http') ? '_blank' : undefined} rel={study.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={`${study.linkLabel}: ${study.name}`} data-cursor-text="Open">
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                    <p className="v2-case__description">{study.description}</p>
                    <div className="v2-case__outcome"><span>signal</span><strong>{study.outcome}</strong></div>
                    <ul aria-label={`${study.name} technologies`}>{study.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <a className="v2-case__link" href={study.href} target={study.href.startsWith('http') ? '_blank' : undefined} rel={study.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {study.linkLabel} <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

