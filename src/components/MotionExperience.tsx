'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { type ReactNode, useEffect, useRef } from 'react';
import CursorFollow from '@/components/ui/smoothui/cursor-follow';
import PagePreloader from '@/components/ui/smoothui/page-preloader';

interface MotionExperienceProps {
  children: ReactNode;
}

export default function MotionExperience({ children }: MotionExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef>(null);

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
      gsap.utils.toArray<HTMLElement>('main > section:not(#home)').forEach((section) => {
        const content = section.querySelector<HTMLElement>(':scope > .container') ?? section;

        gsap.fromTo(
          content,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            duration: 0.4,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
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
      <PagePreloader
        background="bg-[var(--background)]"
        duration={950}
        variant="words"
        words={['mapping the gap', 'building the system', 'ready to ship']}
      />
      <ReactLenis
        ref={lenisRef}
        root
        options={{
          anchors: { offset: -72 },
          autoRaf: false,
          duration: 1.05,
          smoothWheel: true,
        }}
      >
        <CursorFollow className="motion-root">{children}</CursorFollow>
      </ReactLenis>
    </div>
  );
}
