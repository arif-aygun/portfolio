'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { profile, skills } from '@/data/portfolio';
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { RichText } from '@/components/ui/RichText';

const CARD_COUNT = 2;

const skillCategories = Object.entries(skills).map(([label, items]) => ({
    label,
    items,
}));

export function ProfileCard() {
    const [cardIndex, setCardIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goTo = (next: number) => {
        setDirection(next > cardIndex ? 1 : -1);
        setCardIndex(next);
    };

    const prev = () => goTo((cardIndex - 1 + CARD_COUNT) % CARD_COUNT);
    const next = () => goTo((cardIndex + 1) % CARD_COUNT);

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
    };

    return (
        <div className="relative w-64 md:w-72 select-none pointer-events-none">
            {/* Shadow layers */}
            <div className="absolute top-3 left-3 w-full h-full bg-[length:var(--lp-card-layer-2)] bg-[var(--lp-card-layer-2)] border-2 border-[var(--lp-card-border)] rounded-2xl transform rotate-2 opacity-50 transition-colors duration-300" />
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-[length:var(--lp-card-layer-1)] bg-[var(--lp-card-layer-1)] border-2 border-[var(--lp-card-border)] rounded-2xl transform -rotate-1 opacity-75 transition-colors duration-300" />

            {/* Main Card */}
            <div className="relative bg-[var(--lp-card-bg)] border-2 border-[var(--lp-card-border)] rounded-2xl p-5 shadow-2xl pointer-events-auto transition-colors duration-300" data-interactive="true">
                {/* Title bar */}
                <div className="flex justify-between items-center mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="font-mono text-[10px] text-[var(--lp-text-muted)] uppercase tracking-widest">
                        {cardIndex === 0 ? 'ABOUT.md' : 'Tech_Stack'}
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-electric/50 animate-pulse" />
                </div>

                {/* Animated card content */}
                <motion.div
                    className="relative min-h-[220px] touch-pan-y"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = offset.x; // positive = right swipe (prev), negative = left swipe (next)
                        if (swipe < -50 || velocity.x < -100) {
                            next();
                        } else if (swipe > 50 || velocity.x > 100) {
                            prev();
                        }
                    }}
                    onWheel={(e) => {
                        // Debounce or check delta to prevent rapid firing
                        // Simple vertical check: scroll down -> next, scroll up -> prev
                        // Or horizontal check if using trackpad
                        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                        if (Math.abs(delta) > 20) {
                            if (delta > 0) next();
                            else prev();
                        }
                    }}
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        {cardIndex === 0 && (
                            <motion.div
                                key="profile"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="cursor-grab active:cursor-grabbing"
                            >
                                {/* Vertical layout */}
                                <div className="text-center mb-4">
                                    <h1 className="text-2xl font-bold font-space-grotesk text-[var(--lp-fg)] mb-1 tracking-tighter">
                                        {profile.name}
                                    </h1>
                                    <p className="text-electric font-mono text-sm">
                                        {profile.role}
                                    </p>
                                </div>
                                <RichText text={profile.bio} className="text-[var(--lp-text-muted)] text-sm leading-relaxed text-center block max-w-full" />
                            </motion.div>
                        )}

                        {cardIndex === 1 && (
                            <motion.div
                                key="techstack"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="cursor-grab active:cursor-grabbing"
                            >
                                <div className="grid grid-cols-[min-content_1fr] gap-x-3 gap-y-1.5 text-left">
                                    {skillCategories.map(cat => (
                                        <div key={cat.label} className="contents">
                                            <div className="text-[11px] font-bold font-mono text-electric/60 uppercase text-right leading-tight mt-0.5">
                                                {cat.label}
                                            </div>
                                            <div className="text-xs text-[var(--lp-text-muted)] leading-tight">
                                                {cat.items.join(' · ')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Footer */}
                <div className="mt-3 pt-3 border-t border-[var(--lp-card-border)] flex justify-between items-center">
                    <div className="flex gap-3">
                        {cardIndex === 0 ? (
                            <>
                                <a href={profile.social.github} target="_blank" className="text-[var(--lp-text-muted)] hover:text-[var(--lp-fg)] transition-colors hover:scale-110 transform duration-200">
                                    <Github size={16} />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" className="text-[var(--lp-text-muted)] hover:text-[var(--lp-fg)] transition-colors hover:scale-110 transform duration-200">
                                    <Linkedin size={16} />
                                </a>
                                <a href={profile.social.email} className="text-[var(--lp-text-muted)] hover:text-[var(--lp-fg)] transition-colors hover:scale-110 transform duration-200">
                                    <Mail size={16} />
                                </a>
                            </>
                        ) : (
                            <div className="flex gap-4 text-[9px] font-mono text-[var(--lp-text-muted)]/50">
                                <span>BASED IN TURKEY</span>
                                <span>AVAILABLE</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={prev} className="text-[var(--lp-text-muted)]/40 hover:text-[var(--lp-fg)] transition-colors p-0.5">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1.5">
                            {Array.from({ length: CARD_COUNT }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === cardIndex ? 'bg-electric' : 'bg-[var(--lp-text-muted)]/20'
                                        }`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="text-[var(--lp-text-muted)]/40 hover:text-[var(--lp-fg)] transition-colors p-0.5">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
