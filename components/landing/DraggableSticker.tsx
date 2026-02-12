'use client';

import { motion, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Terminal, Cpu, Braces, Globe, Monitor, Server } from 'lucide-react';
import { useState, useRef } from 'react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    href?: string;
    liveUrl?: string;
    category: string;
}

interface DraggableStickerProps {
    project: Project;
    initialX: number;
    initialY: number;
    initialRotate: number;
    zIndex: number;
    onFocus: () => void;
}

// Visual style definitions per category
const STICKER_STYLES: Record<string, {
    bg: string;
    border: string;
    shape: string;
    accent: string;
    textColor: string;
    tagStyle: string;
    icon: React.ReactNode;
    width: string;
}> = {
    'Algorithms': {
        bg: 'bg-[var(--sticker-algo-bg)]',
        border: 'border-2 border-[var(--sticker-algo-border)]',
        shape: 'rounded-none',
        accent: 'text-[var(--sticker-algo-accent)]',
        textColor: 'text-[var(--sticker-algo-text)]',
        tagStyle: 'border-[var(--sticker-algo-border)] text-[var(--sticker-algo-accent)]',
        icon: <Terminal size={14} className="text-[var(--sticker-algo-accent)]" />,
        width: 'w-56',
    },
    'Full Stack': {
        bg: 'bg-[var(--sticker-fs-bg)]', // Switched to solid color for transition
        border: 'border-2 border-[var(--sticker-fs-border)]',
        shape: 'rounded-2xl',
        accent: 'text-[var(--sticker-fs-accent)]',
        textColor: 'text-[var(--sticker-fs-text)]',
        tagStyle: 'border-[var(--sticker-fs-border)] text-[var(--sticker-fs-accent)]',
        icon: <Globe size={14} className="text-[var(--sticker-fs-accent)]" />,
        width: 'w-60',
    },
    'Systems': {
        bg: 'bg-[var(--sticker-sys-bg)]',
        border: 'border-2 border-[var(--sticker-sys-border)]',
        shape: 'rounded-sm',
        accent: 'text-[var(--sticker-sys-accent)]',
        textColor: 'text-[var(--sticker-sys-text)]',
        tagStyle: 'border-[var(--sticker-sys-border)] text-[var(--sticker-sys-accent)]',
        icon: <Cpu size={14} className="text-[var(--sticker-sys-accent)]" />,
        width: 'w-56',
    },
    'Web3': {
        bg: 'bg-[var(--sticker-web3-bg)]',
        border: 'border-2 border-[var(--sticker-web3-border)]',
        shape: 'rounded-3xl',
        accent: 'text-[var(--sticker-web3-accent)]',
        textColor: 'text-[var(--sticker-web3-text)]',
        tagStyle: 'border-[var(--sticker-web3-border)] text-[var(--sticker-web3-accent)]',
        icon: <Braces size={14} className="text-[var(--sticker-web3-accent)]" />,
        width: 'w-52',
    },
    'Desktop': {
        bg: 'bg-[var(--sticker-desktop-bg)]',
        border: 'border-2 border-[var(--sticker-desktop-border)]',
        shape: 'rounded-xl',
        accent: 'text-[var(--sticker-desktop-accent)]',
        textColor: 'text-[var(--sticker-desktop-text)]',
        tagStyle: 'border-[var(--sticker-desktop-border)] text-[var(--sticker-desktop-accent)]',
        icon: <Monitor size={14} className="text-[var(--sticker-desktop-accent)]" />,
        width: 'w-64',
    },
    'Backend': {
        bg: 'bg-[var(--sticker-backend-bg)]',
        border: 'border-2 border-[var(--sticker-backend-border)]',
        shape: 'rounded-lg',
        accent: 'text-[var(--sticker-backend-accent)]',
        textColor: 'text-[var(--sticker-backend-text)]',
        tagStyle: 'border-[var(--sticker-backend-border)] text-[var(--sticker-backend-accent)]',
        icon: <Server size={14} className="text-[var(--sticker-backend-accent)]" />,
        width: 'w-58',
    },
};

const DEFAULT_STYLE = STICKER_STYLES['Desktop'];

export function DraggableSticker({
    project,
    initialX,
    initialY,
    initialRotate,
    zIndex,
    onFocus
}: DraggableStickerProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isDragging = useRef(false);
    const style = STICKER_STYLES[project.category] || DEFAULT_STYLE;

    // Use motion values to track position independently of renders
    const x = useMotionValue(initialX);
    const y = useMotionValue(initialY);

    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => {
                setTimeout(() => { isDragging.current = false; }, 0);
            }}
            className={`absolute p-4 ${style.bg} ${style.border} ${style.shape} ${style.width} backdrop-blur-sm transition-[background-color,background-image,border-color,color,box-shadow] duration-300`}
            style={{
                x,
                y,
                touchAction: 'none',
                zIndex,
                boxShadow: 'var(--sticker-shadow)'
            }}
            initial={{
                rotate: initialRotate,
                scale: 0.8,
                opacity: 0
            }}
            animate={{
                scale: isExpanded ? 1.08 : 1,
                opacity: 1,
            }}
            whileHover={{ scale: isExpanded ? 1.12 : 1.04, cursor: 'grab' }}
            whileDrag={{ scale: 1.08, cursor: 'grabbing', userSelect: 'none' }}
            onClick={() => {
                onFocus();
                if (!isDragging.current) {
                    setIsExpanded(!isExpanded);
                }
            }}
            data-interactive="true"
        >
            {/* Category header with unique icon */}
            <div className="flex justify-between items-center mb-3 pointer-events-none">
                <div className="flex items-center gap-1.5">
                    {style.icon}
                    <span className={`text-[10px] font-mono uppercase ${style.accent} opacity-70`}>
                        {project.category}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            className="pointer-events-auto flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className={`text-[9px] font-bold ${style.accent} opacity-50 hover:opacity-100 transition-opacity`}>LIVE</span>
                        </a>
                    )}
                    {project.href && (
                        <a
                            href={project.href}
                            target="_blank"
                            className="pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ArrowUpRight size={14} className={`${style.accent} opacity-50 hover:opacity-100 transition-opacity`} />
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 className={`text-lg font-bold font-space-grotesk ${style.textColor} mb-1 leading-tight pointer-events-none`}>
                {project.title}
            </h3>

            {/* Expanded details */}
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden pointer-events-none mt-2"
                >
                    <p className="text-[11px] text-concrete/80 leading-relaxed mb-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {project.tags.map(tag => (
                            <span key={tag} className={`text-[9px] font-mono border ${style.tagStyle} px-1.5 py-0.5 rounded-sm`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Collapsed indicator — unique per style */}
            {!isExpanded && (
                <div className={`h-0.5 w-6 ${style.accent} opacity-20 mt-2`} />
            )}
        </motion.div>
    );
}
