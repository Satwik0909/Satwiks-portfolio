'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface PortfolioLoaderProps {
  onComplete?: () => void;
}

const HOLD_DURATION_MS = 1050;

export default function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const dismiss = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    const timer = window.setTimeout(dismiss, prefersReducedMotion ? 80 : HOLD_DURATION_MS);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismiss, prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current?.()}>
      {isVisible && (
        <motion.div
          className="v2-loader"
          exit={prefersReducedMotion ? { opacity: 0 } : { y: '-100%' }}
          initial={false}
          role="status"
          transition={prefersReducedMotion ? { duration: 0.08 } : { duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="v2-loader__grid" aria-hidden="true" />
          <div className="v2-loader__topline" aria-hidden="true">
            <span>SK / PORTFOLIO</span>
            <span>system boot · 01</span>
          </div>

          <div className="v2-loader__center">
            <motion.div
              className="v2-loader__mark"
              animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1], scale: [0.96, 1] }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              aria-hidden="true"
            >
              SK
            </motion.div>
            <div>
              <span className="v2-loader__label">Initializing field-to-growth system</span>
              <strong>Turning signal into shipped systems.</strong>
            </div>
          </div>

          <div className="v2-loader__progress" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={prefersReducedMotion ? { duration: 0.08 } : { duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <button className="v2-loader__skip" type="button" onClick={dismiss}>
            Skip intro
          </button>
          <span className="sr-only">Loading portfolio</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
