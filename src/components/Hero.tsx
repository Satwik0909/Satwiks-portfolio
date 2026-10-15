'use client';

import { motion, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MagneticButton from '@/components/ui/smoothui/magnetic-button';
import TiltCard from '@/components/ui/smoothui/tilt-card';

const VantaBackground = dynamic(() => import('./VantaBackground'), { ssr: false });

interface HeroProps {
  onOpenResume: () => void;
}

const systemNodes = [
  { label: 'users', className: 'system-node--users' },
  { label: 'API', className: 'system-node--api' },
  { label: 'data', className: 'system-node--data' },
  { label: 'AI', className: 'system-node--ai' },
];

export default function Hero({ onOpenResume }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-vanta" data-parallax-layer>
        <VantaBackground />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-kicker">
            <span>status: available</span>
            <span className="syntax-muted">&middot;</span>
            <span>forward-deployed engineer</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            I find the gap,
            <br />
            then <strong>ship the fix</strong>
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="hero-description">
            I embed with the problem, design the system, and run the solution in production. Backend architecture,
            AI-ready automation, and full-stack delivery for real businesses&mdash;not demo environments.
          </p>

          <div className="hero-actions">
            <MagneticButton
              className="button-primary"
              data-cursor-text="Open resume"
              onClick={onOpenResume}
              radius={80}
              strength={0.18}
            >
              view resume <span className="button-arrow">&darr;</span>
            </MagneticButton>
            <Link href="#projects" className="button-secondary" data-cursor-text="View work">
              see selected work <span className="button-arrow">&#8600;</span>
            </Link>
            <Link href="#contact" className="hero-contact-link" data-cursor-text="Say hello">
              contact <span className="button-arrow">&#8599;</span>
            </Link>
          </div>

          <div className="hero-meta" aria-label="Core technologies">
            <span className="hero-meta-item">Django / DRF</span>
            <span className="hero-meta-item">React / TypeScript</span>
            <span className="hero-meta-item">PostgreSQL / CI/CD</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="hero-tilt" glare glareOpacity={0.12} maxTilt={4} parallax scale={1.012}>
            <div className="system-scene" aria-hidden="true">
              <div className="system-scene__grid" />
              <div className="system-scene__ring system-scene__ring--outer" />
              <div className="system-scene__ring system-scene__ring--inner" />
              <svg className="system-scene__connections" viewBox="0 0 520 520" fill="none" preserveAspectRatio="none">
                <path d="M90 154L260 260L418 132" />
                <path d="M260 260L408 366" />
                <path d="M260 260L112 382" />
                <path d="M112 382L408 366" />
              </svg>

              <div className="system-core" data-tilt-depth="0.35">
                <span>FDE</span>
                <small>ship the gap</small>
              </div>

              {systemNodes.map((node) => (
                <div key={node.label} className={`system-node ${node.className}`} data-tilt-depth="0.55">
                  <span className="system-node__dot" />
                  {node.label}
                </div>
              ))}

              <div className="system-scene__legend">
                <span><i className="legend-dot legend-dot--accent" /> problem &rarr; system</span>
                <span><i className="legend-dot" /> production feedback</span>
              </div>
            </div>

            <div className="hero-note" data-tilt-depth="0.8">
              <strong>field note_</strong>
              Understand the gap. Own the outcome. Stay on call.
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
