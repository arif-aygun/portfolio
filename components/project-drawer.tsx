'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        desc: string;
        tags: string[];
        href: string;
    } | null;
}

export function ProjectDrawer({ isOpen, onClose, project }: ProjectDrawerProps) {
    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-void border-l border-electric/20 z-50 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-void/95 backdrop-blur-md border-b border-electric/10 p-6 flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-space-grotesk font-bold mb-1">{project.title}</h2>
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-electric hover:text-acid transition-colors inline-flex items-center gap-1"
                                >
                                    View Project <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-electric/10 rounded-lg transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Description */}
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-concrete mb-2">Description</h3>
                                <p className="text-paper leading-relaxed">{project.desc}</p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-concrete mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-electric/10 border border-electric/20 rounded-lg text-sm font-medium hover:bg-electric/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-white/5">
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-electric hover:bg-electric/80 text-white rounded-lg font-medium transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
