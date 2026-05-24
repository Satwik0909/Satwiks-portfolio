'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ModeToggle from './ModeToggle';

interface NavbarProps {
    onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Process', href: '#process' },
        { name: 'FAQ', href: '#faq' },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6"
            style={{ backdropFilter: isMenuOpen ? 'none' : 'blur(10px)', transition: 'background 0.3s' }}
        >
            <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className="flex items-center gap-2 group z-50" onClick={closeMenu}>
                    <div className="w-8 h-8 grid grid-cols-2 gap-0.5 rotate-45 group-hover:rotate-90 transition-transform duration-500" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                        <div className="bg-foreground rounded-sm"></div>
                        <div className="bg-foreground/40 rounded-sm"></div>
                        <div className="bg-foreground/40 rounded-sm"></div>
                        <div className="bg-foreground rounded-sm"></div>
                    </div>
                    <span className="font-semibold text-lg tracking-tight ml-2">Portfolite</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <ModeToggle />

                    <button
                        onClick={onOpenResume}
                        className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors bg-foreground/5 px-4 py-2 rounded-lg border border-foreground/5 cursor-pointer"
                        style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.5rem 1rem' }}
                    >
                        Resume
                    </button>

                    <Link
                        href="#contact"
                        className="text-sm font-medium bg-foreground text-background px-6 py-2.5 rounded-full hover:scale-105 transition-all flex items-center gap-2"
                        style={{ background: 'var(--foreground)', color: 'var(--background)', padding: '0.625rem 1.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                    >
                        <span className="w-2 h-2 rounded-full bg-background/40"></span>
                        Work With Me
                    </Link>
                </div>

                {/* Mobile Menu Toggle & Theme Toggle */}
                <div className="flex items-center gap-2 md:hidden z-50">
                    <ModeToggle />
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 p-10"
                        style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '2.5rem' }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-3xl font-semibold text-white/60 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => { onOpenResume(); closeMenu(); }}
                            className="text-2xl font-medium text-white/60"
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Resume
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                        >
                            <Link
                                href="#contact"
                                onClick={closeMenu}
                                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg"
                                style={{ background: 'white', color: 'black', padding: '1rem 2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                            >
                                Work With Me
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
