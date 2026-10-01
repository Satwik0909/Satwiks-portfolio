'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-padding" aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">ready_when_you_are</span>
          <h2 id="contact-title" className="contact-heading">
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <p className="contact-copy">
            Tell me what you are building, where it is getting stuck, and what a good outcome looks like. I will bring the technical questions.
          </p>
          <a className="button-primary" href="mailto:satwikkukadolli@gmail.com">
            satwikkukadolli@gmail.com <span className="button-arrow">↗</span>
          </a>
          <div className="contact-links">
            <a href="https://github.com/Satwik0909" target="_blank" rel="noreferrer">github</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin</a>
            <Link href="#home">back_to_top</Link>
          </div>
        </motion.div>

        <footer className="site-footer">
          <span className="footer-meta"><strong>© {new Date().getFullYear()} Satwik Kukadolli</strong> / all systems nominal</span>
          <span className="footer-meta">Dharwad, India · UTC +05:30</span>
        </footer>
      </div>
    </section>
  );
}
