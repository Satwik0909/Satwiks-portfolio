'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface PortfolioLoaderProps {
  onComplete?: () => void;
  onReveal?: () => void;
}

const INTRO_DURATION_MS = 1550;
const wordmark = 'SATWIK';

export default function PortfolioLoader({ onComplete, onReveal }: PortfolioLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  const onRevealRef = useRef(onReveal);
  const hasDismissedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onRevealRef.current = onReveal;
  }, [onComplete, onReveal]);

  const dismiss = useCallback(() => {
    if (hasDismissedRef.current) return;
    hasDismissedRef.current = true;
    onRevealRef.current?.();
    setIsVisible(false);
  }, []);

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
          exit={prefersReducedMotion
            ? { opacity: 0 }
            : {
                clipPath: [
                  'inset(0% 0% 0% 0% round 0px)',
                  'inset(31% 8% 31% 8% round 999px)',
                  'inset(50% 50% 50% 50% round 999px)',
                ],
                opacity: [1, 1, 0],
              }}
          initial={false}
          onClick={dismiss}
          style={{ clipPath: 'inset(0% 0% 0% 0% round 0px)' }}
          transition={prefersReducedMotion
            ? { duration: 0.08 }
            : { duration: 0.9, ease: [0.76, 0, 0.24, 1], times: [0, 0.62, 1] }}
        >
          {!prefersReducedMotion && (
            <motion.span
              className="v2-loader__signal"
              initial={{ opacity: 0, scaleX: 0.08, scaleY: 0.32 }}
              animate={{ opacity: [0, 1, 1, 0], scaleX: [0.08, 1, 1.04, 1.12], scaleY: [0.32, 1, 1, 0.82] }}
              transition={{ delay: 0.18, duration: 1.3, ease: [0.22, 1, 0.36, 1], times: [0, 0.34, 0.78, 1] }}
              aria-hidden="true"
            />
          )}

          <motion.span
            className="v2-loader__wordmark"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.86, y: 28 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0, 1, 1, 0], scale: [0.86, 1, 1.015, 1.035], y: [28, 0, 0, -8] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.4, ease: [0.22, 1, 0.36, 1], times: [0, 0.24, 0.76, 1] }}
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

          <span className="sr-only" role="status">Loading portfolio</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
