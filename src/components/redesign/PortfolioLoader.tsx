'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface PortfolioLoaderProps {
  onComplete?: () => void;
}

const INTRO_DURATION_MS = 1750;
const introLines = ['WELCOME TO', 'THE WORLD OF', 'SATWIK'];

export default function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  const hasDismissedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const dismiss = useCallback(() => {
    if (hasDismissedRef.current) return;
    hasDismissedRef.current = true;
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
            : { y: '-100%' }}
          initial={false}
          onClick={dismiss}
          transition={prefersReducedMotion
            ? { duration: 0.08 }
            : { duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="v2-loader__copy" aria-hidden="true">
            <motion.span
              className="v2-loader__kicker"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.08, duration: 0.5 }}
            >
              Automation · Systems · Growth
            </motion.span>

            <span className="v2-loader__headline">
              {introLines.map((line, index) => (
                <span className={`v2-loader__line${index === 2 ? ' is-accent' : ''}`} key={line}>
                  <motion.span
                    initial={prefersReducedMotion ? false : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={prefersReducedMotion
                      ? { duration: 0 }
                      : { delay: 0.12 + index * 0.16, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </span>

            <motion.span
              className="v2-loader__rule"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.18, duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                initial={prefersReducedMotion ? false : { x: '-100%' }}
                animate={{ x: '100%' }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2, duration: 1.15, ease: 'easeInOut' }}
              />
            </motion.span>
          </span>

          <span className="sr-only" role="status">Loading portfolio</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
