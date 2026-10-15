'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canRender3D = window.matchMedia('(min-width: 721px)').matches;
    if (!containerRef.current || prefersReducedMotion || !canRender3D) return;

    let cancelled = false;

    const setup = async () => {
      const [{ default: createFog }, THREE] = await Promise.all([
        import('vanta/dist/vanta.fog.min'),
        import('three'),
      ]);
      if (cancelled || !containerRef.current) return;

      effectRef.current = createFog({
        THREE,
        baseColor: 0x05070c,
        blurFactor: 0.78,
        el: containerRef.current,
        gyroControls: false,
        highlightColor: 0xb7ff52,
        lowlightColor: 0x091a27,
        midtoneColor: 0x183a4c,
        mouseControls: true,
        speed: 0.5,
        touchControls: false,
        zoom: 1.18,
      });
    };

    setup().catch(() => {
      effectRef.current = null;
    });

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [prefersReducedMotion]);

  return <div ref={containerRef} className="vanta-background" aria-hidden="true" />;
}
