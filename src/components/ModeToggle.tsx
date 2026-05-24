'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="w-10 h-10 rounded-full border border-border" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid var(--border)' }} />
    );

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-surface"
            style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: 'var(--foreground)' }}
                    >
                        <Moon size={18} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: 'var(--foreground)' }}
                    >
                        <Sun size={18} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
