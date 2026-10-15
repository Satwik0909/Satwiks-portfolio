'use client';

import { useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canRender3D = window.matchMedia('(min-width: 721px)').matches;
    if (!containerRef.current || prefersReducedMotion || !canRender3D) return;

    let cancelled = false;

    const setup = async () => {
      const { default: createFog } = await import('vanta/dist/vanta.fog.min');
      if (cancelled || !containerRef.current) return;

      const isDark = resolvedTheme !== 'light';
      effectRef.current = createFog({
        THREE,
        baseColor: isDark ? 0x0d0c0a : 0xf5f4ef,
        blurFactor: 0.72,
        el: containerRef.current,
        gyroControls: false,
        highlightColor: isDark ? 0x86c77a : 0x9bcf9b,
        lowlightColor: isDark ? 0x172018 : 0xdfeade,
        midtoneColor: isDark ? 0x2f4a33 : 0xc8dbc8,
        mouseControls: true,
        speed: 0.55,
        touchControls: false,
        zoom: 1.25,
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
  }, [prefersReducedMotion, resolvedTheme]);

  return <div ref={containerRef} className="vanta-background" aria-hidden="true" />;
}
