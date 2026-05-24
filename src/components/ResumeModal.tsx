'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const resumeLink = "https://drive.google.com/uc?export=download&id=1_zgAaZ-eJmSxE3Uv32FsUWlNAxBukt3f";

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
                    style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)' }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg glass p-8 md:p-12 overflow-hidden"
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '30rem',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '32px'
                        }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-8 md:mb-10 text-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto text-white/60">
                                <Download size={28} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Resume Access</h2>
                            <p className="text-white/40 leading-relaxed text-xs md:text-sm max-w-xs mx-auto">
                                Download Satwik Kukadolli's professional resume to view his full technical background and impact history.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href={resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="w-full bg-white text-black font-bold h-12 md:h-14 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base"
                                style={{ background: 'white', color: 'black', textDecoration: 'none' }}
                            >
                                <Download size={18} />
                                Download PDF
                            </a>

                            <button
                                onClick={onClose}
                                className="w-full bg-white/5 text-white/60 font-semibold h-12 md:h-14 rounded-xl hover:bg-white/10 hover:text-white transition-all text-sm md:text-base cursor-pointer"
                                style={{ background: 'rgba(255,255,255,0.05)', border: 'none' }}
                            >
                                Maybe Later
                            </button>
                        </div>

                        <p className="mt-8 text-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
                            Verified Technical Resume • 2025
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
