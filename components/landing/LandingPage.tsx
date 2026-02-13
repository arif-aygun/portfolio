'use client';

import { useState, useEffect } from 'react';
import { StickerCanvas } from './StickerCanvas';
import { Moon, Sun } from 'lucide-react';

interface LandingPageProps {
    onEnterIde: () => void;
}

export function LandingPage({ onEnterIde }: LandingPageProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const stored = localStorage.getItem('landing-theme');
        if (stored === 'dark') {
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('landing-theme', newTheme);
    };

    return (
        <main className="h-[100dvh] w-full overflow-hidden bg-[var(--lp-bg)] transition-colors duration-300" data-theme={theme}>
            <StickerCanvas />

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[var(--glass-bg)] hover:bg-[var(--glass-hover)] border border-[var(--glass-border)] backdrop-blur-md transition-all text-[var(--lp-fg)]"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </main>
    );
}

