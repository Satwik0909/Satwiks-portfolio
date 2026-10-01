'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ModeToggle from './ModeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'work', href: '#projects' },
  { name: 'process', href: '#process' },
  { name: 'services', href: '#services' },
  { name: 'faq', href: '#faq' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="site-nav"
      aria-label="Primary navigation"
    >
      <div className="container nav-shell">
        <Link href="/" className="nav-brand" onClick={closeMenu} aria-label="Satwik Kukadolli home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>~/satwik</span>
          <span className="nav-path">/portfolio</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <ModeToggle />
          <button
            type="button"
            className="nav-resume"
            onClick={onOpenResume}
            aria-label="Open resume"
            title="Open resume"
          >
            <FileText aria-hidden="true" />
          </button>
          <Link href="#contact" className="nav-cta">
            let&apos;s talk
          </Link>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.045 }}
              >
                <Link href={link.href} className="mobile-menu-link" onClick={closeMenu}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <button
              type="button"
              className="button-primary"
              onClick={() => {
                onOpenResume();
                closeMenu();
              }}
            >
              open resume <span className="button-arrow">↗</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
