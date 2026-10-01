'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, Minus, Plus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumePath = '/resume/Satwik_Kukadolli_Resume.pdf';
const resumeBackup = 'https://drive.google.com/uc?export=download&id=1zEr_5gMx6rPXbYgr5NASmw0YRcZ58qNG';

type PdfState = 'idle' | 'loading' | 'ready' | 'error';

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pdfState, setPdfState] = useState<PdfState>('idle');
  const [storySkipped, setStorySkipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const wasSeen = window.sessionStorage.getItem('satwik-resume-story-seen') === 'true';
    setStorySkipped(wasSeen || Boolean(prefersReducedMotion));
    window.sessionStorage.setItem('satwik-resume-story-seen', 'true');
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a, input, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose, prefersReducedMotion]);

  useEffect(() => {
    if (!isOpen) {
      setPdfState('idle');
      setPage(1);
      setPageCount(0);
      setZoom(1);
      return;
    }

    let cancelled = false;
    setPdfState('loading');

    const renderPage = async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
        const loadingTask = pdfjs.getDocument({ url: resumePath });
        const pdf = await loadingTask.promise;
        if (cancelled) return;
        setPageCount(pdf.numPages);
        const currentPage = await pdf.getPage(page);
        const baseViewport = currentPage.getViewport({ scale: 1 });
        const containerWidth = previewRef.current?.clientWidth ?? baseViewport.width;
        const fitScale = Math.min(1.35, Math.max(0.55, (containerWidth - 28) / baseViewport.width));
        const viewport = currentPage.getViewport({ scale: fitScale * zoom });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);
        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;
        const context = canvas.getContext('2d');
        if (!context) throw new Error('Canvas is unavailable');
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        await currentPage.render({ canvas: canvas, canvasContext: context, viewport, transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined }).promise;
        if (!cancelled) setPdfState('ready');
      } catch {
        if (!cancelled) setPdfState('error');
      }
    };

    void renderPage();
    return () => {
      cancelled = true;
    };
  }, [isOpen, page, zoom]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`resume-backdrop${storySkipped ? ' resume-backdrop--skipped' : ''}`}
          initial={prefersReducedMotion || storySkipped ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            className="resume-dialog resume-dialog--viewer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            initial={prefersReducedMotion || storySkipped ? false : { opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="resume-viewer__header">
              <div>
                <span className="eyebrow">document_access / pdf.js</span>
                <h2 id="resume-title" className="resume-dialog-title">Satwik&apos;s resume</h2>
              </div>
              <button ref={closeButtonRef} type="button" className="resume-dialog-close" onClick={onClose} aria-label="Close resume dialog">
                <X size={15} aria-hidden="true" />
              </button>
            </header>

            <div className="resume-viewer__toolbar">
              <div className="resume-viewer__page-controls" aria-label="Resume page controls">
                <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page <= 1} aria-label="Previous resume page">←</button>
                <span>page {page} / {pageCount || '—'}</span>
                <button type="button" onClick={() => setPage((value) => Math.min(pageCount || value + 1, value + 1))} disabled={!pageCount || page >= pageCount} aria-label="Next resume page">→</button>
              </div>
              <div className="resume-viewer__page-controls" aria-label="Resume zoom controls">
                <button type="button" onClick={() => setZoom((value) => Math.max(0.75, value - 0.1))} aria-label="Zoom out"><Minus size={13} aria-hidden="true" /></button>
                <span>{Math.round(zoom * 100)}%</span>
                <button type="button" onClick={() => setZoom((value) => Math.min(1.5, value + 0.1))} aria-label="Zoom in"><Plus size={13} aria-hidden="true" /></button>
              </div>
              {!storySkipped && !prefersReducedMotion && <button type="button" className="resume-skip" onClick={() => setStorySkipped(true)}>skip intro</button>}
            </div>

            <div ref={previewRef} className={`resume-preview resume-preview--${pdfState}`}>
              <canvas ref={canvasRef} aria-label={`Resume page ${page}`} />
              {pdfState === 'loading' && <p className="resume-preview__message">Loading the resume canvas…</p>}
              {pdfState === 'error' && (
                <div className="resume-preview__message">
                  <p>The local preview could not load. The download and text-friendly links are still available.</p>
                  <a href={resumeBackup} target="_blank" rel="noreferrer">open Drive backup <ExternalLink size={13} aria-hidden="true" /></a>
                </div>
              )}
            </div>

            <footer className="resume-viewer__footer">
              <a className="button-primary" href={resumePath} download="Satwik_Kukadolli_Resume.pdf" onClick={onClose}>
                download PDF <Download size={15} aria-hidden="true" />
              </a>
              <a className="button-secondary" href={resumePath} target="_blank" rel="noreferrer">
                open in new tab <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a className="resume-text-link" href={resumePath} target="_blank" rel="noreferrer">text-friendly fallback ↗</a>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
