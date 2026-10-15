'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from '@/components/ui/smoothui/magnetic-button';

export default function ContactStage() {
  const prefersReducedMotion = useReducedMotion();
  const marquee = 'BRING THE MESSY WORKFLOW · SHIP THE USEFUL SYSTEM · ';

  return (
    <section id="contact" className="v2-contact" aria-labelledby="contact-title" data-section-reveal>
      <div className="v2-contact__marquee" aria-hidden="true"><div>{marquee.repeat(5)}</div></div>
      <div className="v2-container v2-contact__layout">
        <motion.div
          className="v2-contact__copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="v2-kicker">06 / Open channel</span>
          <h2 id="contact-title">Have a workflow<br />that should not be <em>manual?</em></h2>
          <p>Tell me where the handoff breaks, what your team repeats, and what a valuable outcome looks like. I will bring the system questions.</p>
          <MagneticButton className="v2-contact__email" radius={120} strength={0.14} onClick={() => { window.location.href = 'mailto:satwikkukadolli@gmail.com'; }} data-cursor-text="Email">
            satwikkukadolli@gmail.com <ArrowUpRight aria-hidden="true" />
          </MagneticButton>
        </motion.div>

        <div className="v2-contact__signal" aria-label="Availability status">
          <div className="v2-contact__signal-topline"><span>connection_status</span><span><i /> open</span></div>
          <strong>Let&apos;s turn friction into leverage.</strong>
          <p>Best fit: customer-facing product delivery, workflow automation, backend systems, and early GTM engineering projects.</p>
          <div><a href="https://www.linkedin.com/in/satwikkukadolli" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href="https://github.com/Satwik0909" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </div>
      <footer className="v2-container v2-footer">
        <span>© {new Date().getFullYear()} Satwik Kukadolli</span>
        <span>Dharwad, India · UTC +05:30</span>
        <Link href="#home">Back to signal ↑</Link>
      </footer>
    </section>
  );
}
