'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useReducedMotion } from 'framer-motion';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import CursorFollow from '@/components/ui/smoothui/cursor-follow';
import PortfolioLoader from '@/components/redesign/PortfolioLoader';

interface MotionExperienceProps {
  children: ReactNode;
}

export default function MotionExperience({ children }: MotionExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef>(null);
  const [isSiteRevealed, setIsSiteRevealed] = useState(false);
  const revealSite = useCallback(() => setIsSiteRevealed(true), []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);
    const syncScrollTrigger = () => ScrollTrigger.update();
    const lenis = lenisRef.current?.lenis;

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis?.on('scroll', syncScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-section-reveal]').forEach((section) => {
        const content = section.querySelector<HTMLElement>(':scope > .v2-container') ?? section;

        gsap.fromTo(
          content,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
            y: 0,
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax-layer]').forEach((layer) => {
        gsap.to(layer, {
          ease: 'none',
          scrollTrigger: {
            end: 'bottom top',
            scrub: 0.6,
            start: 'top top',
            trigger: layer.parentElement ?? layer,
          },
          yPercent: 8,
        });
      });

      gsap.to('.v2-scroll-progress__bar', {
        ease: 'none',
        scaleX: 1,
        scrollTrigger: {
          end: 'max',
          scrub: 0.2,
          start: 0,
        },
        transformOrigin: 'left center',
      });
    }, rootRef);

    ScrollTrigger.refresh();

    return () => {
      lenis?.off('scroll', syncScrollTrigger);
      gsap.ticker.remove(update);
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="motion-experience">
      <div className="v2-scroll-progress" aria-hidden="true"><span className="v2-scroll-progress__bar" /></div>
      <PortfolioLoader onReveal={revealSite} />
      <ReactLenis
        ref={lenisRef}
        root
        options={{
          anchors: { offset: -72 },
          autoRaf: false,
          duration: 1.12,
          smoothWheel: true,
        }}
      >
        <motion.div
          className="motion-site"
          initial={false}
          animate={isSiteRevealed
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0.42, scale: 1.018, y: 16 }}
          transition={prefersReducedMotion
            ? { duration: 0.08 }
            : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <CursorFollow className="motion-root">{children}</CursorFollow>
        </motion.div>
      </ReactLenis>
    </div>
  );
}
