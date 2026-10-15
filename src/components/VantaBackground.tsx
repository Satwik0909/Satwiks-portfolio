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
        baseColor: isDark ? 0x05070c : 0xf2f0e8,
        blurFactor: 0.78,
        el: containerRef.current,
        gyroControls: false,
        highlightColor: isDark ? 0xb7ff52 : 0xc0dd78,
        lowlightColor: isDark ? 0x091a27 : 0xdbe8e8,
        midtoneColor: isDark ? 0x183a4c : 0xbacfd5,
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
  }, [prefersReducedMotion, resolvedTheme]);

  return <div ref={containerRef} className="vanta-background" aria-hidden="true" />;
}
