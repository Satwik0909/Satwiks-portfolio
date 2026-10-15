'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { journeyChapters } from '@/data/portfolio';

export default function JourneyStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeChapter = journeyChapters[activeIndex];

  return (
    <section id="journey" className="v2-section v2-journey" aria-labelledby="journey-title" data-section-reveal>
      <div className="v2-container">
        <header className="v2-section-head">
          <span className="v2-kicker">01 / The journey</span>
          <div>
            <h2 id="journey-title">Not a straight line.<br /><em>A widening loop.</em></h2>
            <p>Each role moved me one layer closer to the real problem—from interface, to backend, to operations, to the systems that connect product and growth.</p>
          </div>
        </header>

        <div className="v2-journey__layout">
          <div className="v2-journey__stage" aria-live="polite">
            <div className="v2-journey__stage-topline">
              <span>CHAPTER_{activeChapter.index}</span>
              <span>{activeChapter.period}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className={`v2-journey__visual v2-journey__visual--${activeChapter.mode}`}
                key={activeChapter.index}
                initial={prefersReducedMotion ? false : { opacity: 0, rotateY: -10, scale: 0.96 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, rotateY: 10, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="v2-journey__plane v2-journey__plane--back" />
                <div className="v2-journey__plane v2-journey__plane--mid">
                  <span>{activeChapter.mode}</span>
                  <i /><i /><i /><i />
                </div>
                <div className="v2-journey__plane v2-journey__plane--front">
                  <small>field note</small>
                  <strong>{activeChapter.title}</strong>
                </div>
                <svg viewBox="0 0 520 360" aria-hidden="true">
                  <path d="M62 258C130 184 161 234 221 171C281 107 321 147 377 94C417 57 446 72 474 45" />
                  <circle cx="62" cy="258" r="5" />
                  <circle cx="221" cy="171" r="5" />
                  <circle cx="377" cy="94" r="5" />
                  <circle cx="474" cy="45" r="7" />
                </svg>
              </motion.div>
            </AnimatePresence>
            <div className="v2-journey__progress" aria-hidden="true">
              {journeyChapters.map((chapter, index) => <span key={chapter.index} className={index <= activeIndex ? 'is-active' : ''} />)}
            </div>
          </div>

          <div className="v2-journey__chapters">
            {journeyChapters.map((chapter, index) => (
              <motion.article
                className={`v2-chapter${activeIndex === index ? ' is-active' : ''}`}
                key={chapter.index}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.58 }}
                initial={prefersReducedMotion ? false : { opacity: 0.34 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45 }}
              >
                <div className="v2-chapter__meta"><span>{chapter.index}</span><span>{chapter.period}</span></div>
                <h3>{chapter.title}</h3>
                <p className="v2-chapter__role">{chapter.role}</p>
                <p className="v2-chapter__copy">{chapter.copy}</p>
                <ul>{chapter.proof.map((item) => <li key={item}>{item}</li>)}</ul>
                {index < journeyChapters.length - 1 && <ArrowDown className="v2-chapter__arrow" aria-hidden="true" />}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

