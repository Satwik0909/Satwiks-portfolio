'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-kicker">
            <span>status: available</span>
            <span className="syntax-muted">·</span>
            <span>backend / full-stack</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Satwik <strong>builds</strong>
            <br />
            systems that <em>hold up</em>
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="hero-description">
            Backend-focused software developer based in India. I design secure APIs,
            multi-role SaaS products, and the interfaces that make complex workflows feel simple.
            <br />
            <code>python</code> + <code>django</code> + a bias for shipping.
          </p>

          <div className="hero-actions">
            <Link href="#contact" className="button-primary">
              start a project <span className="button-arrow">↗</span>
            </Link>
            <button type="button" className="button-secondary" onClick={onOpenResume}>
              open resume <span className="button-arrow">↓</span>
            </button>
          </div>

          <div className="hero-meta" aria-label="Core technologies">
            <span className="hero-meta-item">Python / Django</span>
            <span className="hero-meta-item">React / TypeScript</span>
            <span className="hero-meta-item">PostgreSQL / APIs</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terminal-card" aria-label="Developer profile snapshot">
            <div className="terminal-topbar">
              <div className="terminal-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span className="terminal-file">~/satwik/README.md</span>
              <span className="terminal-status">● live</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="line-number">01</span>
                <span className="line-content syntax-comment">{'// who_is_satwik?'}</span>
              </div>
              <div className="terminal-line">
                <span className="line-number">02</span>
                <span className="line-content syntax-value">const developer = {'{'}</span>
              </div>
              <div className="terminal-line">
                <span className="line-number">03</span>
                <span className="line-content">
                  <span className="syntax-key">name</span>: <span className="syntax-string">&quot;Satwik Kukadolli&quot;</span>,
                </span>
              </div>
              <div className="terminal-line">
                <span className="line-number">04</span>
                <span className="line-content">
                  <span className="syntax-key">focus</span>: <span className="syntax-string">&quot;backend + systems&quot;</span>,
                </span>
              </div>
              <div className="terminal-line">
                <span className="line-number">05</span>
                <span className="line-content">
                  <span className="syntax-key">location</span>: <span className="syntax-string">&quot;Dharwad, IN&quot;</span>,
                </span>
              </div>
              <div className="terminal-line">
                <span className="line-number">06</span>
                <span className="line-content">
                  <span className="syntax-key">stack</span>: [<span className="syntax-string">&quot;Python&quot;</span>, <span className="syntax-string">&quot;Django&quot;</span>, <span className="syntax-string">&quot;React&quot;</span>],
                </span>
              </div>
              <div className="terminal-line">
                <span className="line-number">07</span>
                <span className="line-content">
                  <span className="syntax-key">available</span>: <span className="syntax-string">true</span>,
                </span>
              </div>
              <div className="terminal-line">
                <span className="line-number">08</span>
                <span className="line-content syntax-value">{'}'};</span>
              </div>

              <div className="terminal-divider" />

              <div className="terminal-line">
                <span className="line-number">09</span>
                <span className="line-content syntax-comment">{'// current_signal'}</span>
              </div>
              <div className="terminal-line">
                <span className="line-number">10</span>
                <span className="line-content syntax-muted">$ ship --something-useful</span>
              </div>
              <div className="terminal-signal">
                <span><span className="signal-dot" />open to good problems</span>
                <span>200 OK</span>
              </div>
            </div>
          </div>

          <div className="hero-note">
            <strong>ship note_</strong>
            Reliable systems are built one clear decision at a time.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
