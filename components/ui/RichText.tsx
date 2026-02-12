'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * RichText — renders text with inline tooltip links.
 *
 * Syntax:  [visible text](url|tooltip label)
 *
 * Example in portfolio.ts:
 *   bio: "Student at [GTU](https://gtu.edu.tr|Gebze Technical University) specializing in..."
 *
 * Renders "GTU" as a clickable button that shows a tooltip with "Gebze Technical University ↗"
 * which links to gtu.edu.tr.
 */

const LINK_REGEX = /\[([^\]]+)\]\(([^|)]+)\|([^)]+)\)/g;

interface RichTextProps {
    text: string;
    className?: string;
}

interface TooltipButtonProps {
    label: string;
    href: string;
    tooltip: string;
}

function TooltipButton({ label, href, tooltip }: TooltipButtonProps) {
    const [show, setShow] = useState(false);

    return (
        <span className="relative inline-block">
            <button
                onClick={() => setShow(v => !v)}
                className="text-electric hover:text-white transition-colors font-mono border-b border-electric/30 hover:border-electric cursor-pointer"
            >
                {label}
            </button>
            {show && (
                <motion.a
                    href={href}
                    target="_blank"
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap bg-[#161616] border border-white/15 rounded-lg px-3 py-1.5 text-[11px] font-mono text-electric hover:text-white transition-colors shadow-xl z-50"
                    onClick={(e) => e.stopPropagation()}
                >
                    {tooltip} ↗
                </motion.a>
            )}
        </span>
    );
}

export function RichText({ text, className }: RichTextProps) {
    const parts: (string | { label: string; href: string; tooltip: string })[] = [];
    let lastIndex = 0;

    // Reset regex state
    LINK_REGEX.lastIndex = 0;

    let match;
    while ((match = LINK_REGEX.exec(text)) !== null) {
        // Add text before this match
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push({
            label: match[1],
            href: match[2],
            tooltip: match[3],
        });
        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return (
        <span className={className}>
            {parts.map((part, i) =>
                typeof part === 'string' ? (
                    <span key={i}>{part}</span>
                ) : (
                    <TooltipButton key={i} label={part.label} href={part.href} tooltip={part.tooltip} />
                )
            )}
        </span>
    );
}
