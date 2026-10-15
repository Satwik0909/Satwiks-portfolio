'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MagneticButton from '@/components/ui/smoothui/magnetic-button';
import VantaBackground from '@/components/VantaBackground';

const SystemOrb = dynamic(() => import('./SystemOrb'), { ssr: false });

interface PortfolioHeroProps {
  onOpenResume: () => void;
}

const heroLines = ['I engineer the space', 'between customer need', 'and company growth.'];

export default function PortfolioHero({ onOpenResume }: PortfolioHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="v2-hero" aria-labelledby="v2-hero-title">
      <div className="v2-hero__vanta" data-parallax-layer><VantaBackground /></div>
      <div className="v2-hero__noise" aria-hidden="true" />
      <div className="v2-container v2-hero__layout">
        <div className="v2-hero__copy">
          <motion.div
            className="v2-hero__eyebrow"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
          >
            <span><i /> Available for high-agency teams</span>
            <span>India · Remote</span>
          </motion.div>

          <h1 id="v2-hero-title" className="v2-hero__title">
            {heroLines.map((line, index) => (
              <span className="v2-hero__line" key={line}>
                <motion.span
                  initial={prefersReducedMotion ? false : { y: '115%', rotate: 1.5 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {index === 2 ? <em>{line}</em> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="v2-hero__lower"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75 }}
          >
            <p>
              I work like a forward-deployed engineer and think like a GTM engineer: find the operational bottleneck,
              build the production system, activate the workflow, and turn field learning into compounding growth.
            </p>
            <div className="v2-hero__actions">
              <MagneticButton className="v2-button v2-button--primary" onClick={onOpenResume} strength={0.16} radius={90} data-cursor-text="Résumé">
                View résumé <ArrowUpRight aria-hidden="true" />
              </MagneticButton>
              <Link className="v2-button v2-button--ghost" href="#work" data-cursor-text="Case studies">
                Explore systems <ArrowDownRight aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="v2-hero__system"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Interactive field-to-growth system visualization"
        >
          <div className="v2-system__topline">
            <span>FIELD_TO_GROWTH.OS</span>
            <span><i /> live model</span>
          </div>
          <SystemOrb />
          <div className="v2-system__core" aria-hidden="true">
            <strong>FDE</strong><span>×</span><strong>GTM</strong>
          </div>
          <span className="v2-system__node v2-system__node--customer">customer signal</span>
          <span className="v2-system__node v2-system__node--system">production system</span>
          <span className="v2-system__node v2-system__node--revenue">revenue action</span>
          <span className="v2-system__node v2-system__node--feedback">product feedback</span>
          <div className="v2-system__legend">
            <span><i className="is-lime" /> discover</span>
            <span><i className="is-cyan" /> deploy</span>
            <span><i className="is-orange" /> compound</span>
          </div>
        </motion.aside>
      </div>

      <div className="v2-hero__ticker" aria-hidden="true">
        <div>
          <span>DISCOVERY</span><i /> <span>SYSTEM DESIGN</span><i /> <span>FULL-STACK DELIVERY</span><i />
          <span>GTM AUTOMATION</span><i /> <span>PRODUCTION ADOPTION</span><i /> <span>FIELD FEEDBACK</span><i />
          <span>DISCOVERY</span><i /> <span>SYSTEM DESIGN</span><i /> <span>FULL-STACK DELIVERY</span><i />
          <span>GTM AUTOMATION</span><i /> <span>PRODUCTION ADOPTION</span><i /> <span>FIELD FEEDBACK</span><i />
        </div>
      </div>
    </section>
  );
}
