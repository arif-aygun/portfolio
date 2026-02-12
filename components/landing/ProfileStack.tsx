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
        enter: (dir: number) => ({ y: dir > 0 ? 60 : -60, opacity: 0 }),
        center: { y: 0, opacity: 1 },
        exit: (dir: number) => ({ y: dir > 0 ? -60 : 60, opacity: 0 }),
    };

    return (
        <div className="relative w-64 md:w-72 select-none pointer-events-none">
            {/* Shadow layers */}
            <div className="absolute top-3 left-3 w-full h-full bg-[#111] border border-white/10 rounded-2xl transform rotate-2 opacity-50" />
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#161616] border border-white/10 rounded-2xl transform -rotate-1 opacity-75" />

            {/* Main Card */}
            <div className="relative bg-[#0a0a0a] border border-white/20 rounded-2xl p-5 shadow-2xl pointer-events-auto" data-interactive="true">
                {/* Title bar */}
                <div className="flex justify-between items-center mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="font-mono text-[10px] text-concrete uppercase tracking-widest">
                        {cardIndex === 0 ? 'ABOUT.md' : 'Tech_Stack'}
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-electric/50 animate-pulse" />
                </div>

                {/* Animated card content */}
                <div className="relative min-h-[220px]">
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
                            >
                                {/* Vertical layout */}
                                <div className="text-center mb-4">
                                    <h1 className="text-2xl font-bold font-space-grotesk text-white mb-1 tracking-tighter">
                                        {profile.name}
                                    </h1>
                                    <p className="text-electric font-mono text-sm">
                                        {profile.role}
                                    </p>
                                </div>
                                <RichText text={profile.bio} className="text-concrete text-sm leading-relaxed text-center block" />
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
                            >
                                <div className="flex flex-wrap gap-x-5 gap-y-2">
                                    {skillCategories.map(cat => (
                                        <div key={cat.label} className="flex items-baseline gap-1.5">
                                            <span className="text-[10px] font-mono text-electric/60 uppercase">{cat.label}:</span>
                                            <span className="text-xs text-concrete">
                                                {cat.items.join(' · ')}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                    <div className="flex gap-3">
                        {cardIndex === 0 ? (
                            <>
                                <a href={profile.social.github} target="_blank" className="text-concrete hover:text-white transition-colors hover:scale-110 transform duration-200">
                                    <Github size={16} />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" className="text-concrete hover:text-white transition-colors hover:scale-110 transform duration-200">
                                    <Linkedin size={16} />
                                </a>
                                <a href={profile.social.email} className="text-concrete hover:text-white transition-colors hover:scale-110 transform duration-200">
                                    <Mail size={16} />
                                </a>
                            </>
                        ) : (
                            <div className="flex gap-4 text-[9px] font-mono text-concrete/50">
                                <span>BASED IN TURKEY</span>
                                <span>AVAILABLE</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={prev} className="text-concrete/40 hover:text-white transition-colors p-0.5">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1.5">
                            {Array.from({ length: CARD_COUNT }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === cardIndex ? 'bg-electric' : 'bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="text-concrete/40 hover:text-white transition-colors p-0.5">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
