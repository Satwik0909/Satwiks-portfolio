'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface PortfolioLoaderProps {
  onComplete?: () => void;
}

const INTRO_DURATION_MS = 2550;
const wordmark = 'SATWIK';

export default function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const dismiss = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    const timer = window.setTimeout(dismiss, prefersReducedMotion ? 80 : INTRO_DURATION_MS);
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
        <motion.button
          type="button"
          aria-label="Skip intro animation"
          className="v2-loader"
          exit={{ opacity: 0 }}
          initial={false}
          onClick={dismiss}
          transition={prefersReducedMotion ? { duration: 0.08 } : { duration: 0.24, ease: 'easeOut' }}
        >
          <motion.span
            className="v2-loader__wordmark"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.86, y: 28 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0, 1, 1, 0], scale: [0.86, 1, 1.04, 1.08], y: [28, 0, 0, -10] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.35, ease: [0.22, 1, 0.36, 1], times: [0, 0.28, 0.72, 1] }}
            aria-hidden="true"
          >
            {wordmark.split('').map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={prefersReducedMotion ? false : { scaleY: 0.08, y: '32%' }}
                animate={{ scaleY: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.06 + index * 0.045, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>

          <motion.span
            className="v2-loader__wipe"
            initial={prefersReducedMotion ? { scale: 1, borderRadius: 0 } : { scale: 0.015, borderRadius: '50%' }}
            animate={{ scale: 1, borderRadius: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.02, duration: 0.82, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          />

          {!prefersReducedMotion && (
            <motion.span
              className="v2-loader__aperture"
              initial={{ opacity: 0, scaleX: 0.08, scaleY: 0.18 }}
              animate={{ opacity: [0, 1, 1, 0], scaleX: [0.08, 1, 1, 0.02], scaleY: [0.18, 1, 1, 0.02] }}
              transition={{ delay: 1.28, duration: 1.08, ease: [0.76, 0, 0.24, 1], times: [0, 0.34, 0.66, 1] }}
              aria-hidden="true"
            />
          )}

          <span className="sr-only" role="status">Loading portfolio</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
