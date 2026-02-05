'use client';

import { useEffect, useState } from 'react';

export function Minimap() {
    const [blocks, setBlocks] = useState<{ width: string, opacity: number }[]>([]);

    useEffect(() => {
        // Generate random "code blocks"
        const newBlocks = Array.from({ length: 60 }, (_, i) => ({
            width: `${Math.max(20, Math.random() * 80)}%`,
            opacity: Math.random() > 0.3 ? 0.8 : 0.3,
            indent: Math.random() > 0.7 ? (Math.random() > 0.5 ? '10%' : '20%') : '0'
        }));
        setBlocks(newBlocks as any);
    }, []);

    return (
        <div className="w-16 h-full bg-theme-bg border-l border-theme-border flex-shrink-0 opacity-50 py-2 select-none pointer-events-none hidden md:block">
            {blocks.map((block: any, i) => (
                <div
                    key={i}
                    className="h-[3px] bg-theme-fg mb-[2px] rounded-sm"
                    style={{
                        width: block.width,
                        marginLeft: block.indent,
                        opacity: block.opacity * 0.3
                    }}
                />
            ))}
        </div>
    );
}
