'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'What kind of work do you take on?',
    answer: 'Backend architecture, secure REST APIs, multi-role SaaS workflows, and full-stack product work where the technical details need to stay close to the user problem.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer: 'We start with a short discovery pass, define the first useful slice, then work in visible checkpoints. You get decisions and working software—not a black box that reappears at the end.',
  },
  {
    question: 'Which tools are part of your everyday stack?',
    answer: 'Python, Django, Django REST Framework, PostgreSQL, MongoDB, React, TypeScript, JWT, Git, Postman, and the deployment tooling needed to keep the service healthy.',
  },
  {
    question: 'Are you open to freelance or full-time roles?',
    answer: 'Yes. I am open to thoughtful freelance builds and backend or full-stack roles where I can own meaningful systems and keep improving how they work.',
  },
  {
    question: 'Where can I see more of your work?',
    answer: (
      <>
        The selected work is outlined above. You can also find code on{' '}
        <a href="https://github.com/Satwik0909" target="_blank" rel="noreferrer">GitHub</a>
        {' '}and connect on{' '}
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding faq-section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div>
          <span className="eyebrow">common_queries</span>
          <h2 id="faq-title" className="faq-heading">Good questions deserve <em>clear answers.</em></h2>
          <p className="faq-copy">A few practical details about how I work, what I build, and where to find me next.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div className="faq-item" key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon${isOpen ? ' is-open' : ''}`} aria-hidden="true">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
