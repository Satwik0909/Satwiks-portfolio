'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/data/portfolio';
import ModeToggle from '@/components/ModeToggle';

interface PortfolioNavProps {
  onOpenResume: () => void;
}

export default function PortfolioNav({ onOpenResume }: PortfolioNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <motion.header
      className="v2-nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="v2-nav__shell" aria-label="Primary navigation">
        <Link className="v2-nav__brand" href="#home" onClick={close} aria-label="Satwik Kukadolli home">
          <span className="v2-nav__monogram" aria-hidden="true">SK</span>
          <span>
            <strong>Satwik Kukadolli</strong>
            <small>FDE × GTM Engineer</small>
          </span>
        </Link>

        <div className="v2-nav__links">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>

        <div className="v2-nav__actions">
          <ModeToggle />
          <button className="v2-icon-button" type="button" onClick={onOpenResume} aria-label="Open résumé">
            <FileText aria-hidden="true" />
          </button>
          <Link className="v2-nav__cta" href="#contact">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
          <button
            className="v2-nav__menu"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="v2-mobile-nav"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="v2-mobile-nav"
            className="v2-mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navigation.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                <Link href={item.href} onClick={close}><span>0{index + 1}</span>{item.label}</Link>
              </motion.div>
            ))}
            <button type="button" onClick={() => { onOpenResume(); close(); }}>Open résumé <ArrowUpRight aria-hidden="true" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

