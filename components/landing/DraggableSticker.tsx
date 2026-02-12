'use client';

import { motion } from 'framer-motion';
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
        bg: 'bg-[#0c1a0c]',
        border: 'border border-green-500/40',
        shape: 'rounded-none',
        accent: 'text-green-400',
        textColor: 'text-green-100',
        tagStyle: 'border-green-500/30 text-green-400/70',
        icon: <Terminal size={14} className="text-green-400" />,
        width: 'w-56',
    },
    'Full Stack': {
        bg: 'bg-gradient-to-br from-[#1a1a2e] to-[#16213e]',
        border: 'border-2 border-blue-400/30',
        shape: 'rounded-2xl',
        accent: 'text-blue-400',
        textColor: 'text-white',
        tagStyle: 'border-blue-400/30 text-blue-300/70',
        icon: <Globe size={14} className="text-blue-400" />,
        width: 'w-60',
    },
    'Systems': {
        bg: 'bg-[#1a1410]',
        border: 'border border-amber-500/40',
        shape: 'rounded-sm',
        accent: 'text-amber-400',
        textColor: 'text-amber-50',
        tagStyle: 'border-amber-500/30 text-amber-400/60',
        icon: <Cpu size={14} className="text-amber-400" />,
        width: 'w-56',
    },
    'Web3': {
        bg: 'bg-gradient-to-br from-[#1a0a2e] to-[#0d0d1a]',
        border: 'border border-purple-400/50',
        shape: 'rounded-3xl',
        accent: 'text-purple-400',
        textColor: 'text-purple-50',
        tagStyle: 'border-purple-400/30 text-purple-300/60',
        icon: <Braces size={14} className="text-purple-400" />,
        width: 'w-52',
    },
    'Desktop': {
        bg: 'bg-[#1a0f14]',
        border: 'border-2 border-rose-400/30',
        shape: 'rounded-xl',
        accent: 'text-rose-400',
        textColor: 'text-rose-50',
        tagStyle: 'border-rose-400/25 text-rose-300/60',
        icon: <Monitor size={14} className="text-rose-400" />,
        width: 'w-64',
    },
    'Backend': {
        bg: 'bg-[#0a0f14]',
        border: 'border border-cyan-500/30',
        shape: 'rounded-lg',
        accent: 'text-cyan-400',
        textColor: 'text-cyan-50',
        tagStyle: 'border-cyan-500/25 text-cyan-400/60',
        icon: <Server size={14} className="text-cyan-400" />,
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

    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => {
                setTimeout(() => { isDragging.current = false; }, 0);
            }}
            initial={{
                x: initialX,
                y: initialY,
                rotate: initialRotate,
                scale: 0.8,
                opacity: 0
            }}
            animate={{
                scale: isExpanded ? 1.08 : 1,
                opacity: 1,
                zIndex: zIndex
            }}
            whileHover={{ scale: isExpanded ? 1.12 : 1.04, cursor: 'grab' }}
            whileDrag={{ scale: 1.08, cursor: 'grabbing', userSelect: 'none' }}
            onClick={() => {
                onFocus();
                if (!isDragging.current) {
                    setIsExpanded(!isExpanded);
                }
            }}
            className={`absolute p-4 ${style.bg} ${style.border} ${style.shape} shadow-2xl ${style.width} backdrop-blur-sm`}
            data-interactive="true"
            style={{ touchAction: 'none' }}
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
                            <span className={`text-[9px] font-mono ${style.accent} opacity-50 hover:opacity-100 transition-opacity`}>LIVE</span>
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
