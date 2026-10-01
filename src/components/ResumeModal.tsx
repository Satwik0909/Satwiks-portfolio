'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeLink = 'https://drive.google.com/uc?export=download&id=1_zgAaZ-eJmSxE3Uv32FsUWlNAxBukt3f';

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="resume-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" className="resume-dialog-close" onClick={onClose} aria-label="Close resume dialog">
              <X size={15} aria-hidden="true" />
            </button>
            <span className="eyebrow">document_access</span>
            <h2 id="resume-title" className="resume-dialog-title">Satwik&apos;s resume</h2>
            <p className="resume-dialog-copy">
              A concise view of my experience across backend architecture, full-stack delivery, and production systems.
            </p>
            <div className="resume-dialog-actions">
              <a className="button-primary" href={resumeLink} target="_blank" rel="noreferrer" onClick={onClose}>
                download PDF <Download size={15} aria-hidden="true" />
              </a>
              <button type="button" className="button-secondary" onClick={onClose}>maybe later</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
