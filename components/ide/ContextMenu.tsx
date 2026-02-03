'use client';

import { Eye } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    onOpenPreview: () => void;
    fileName: string;
}

export function ContextMenu({ x, y, onClose, onOpenPreview, fileName }: ContextMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Only show preview option for markdown files
    const isMarkdown = fileName.endsWith('.md');

    return (
        <div
            ref={menuRef}
            className="fixed bg-[#2d2d2d] border border-[#3e3e42] rounded shadow-lg py-1 z-50 min-w-[200px]"
            style={{ left: `${x}px`, top: `${y}px` }}
        >
            {isMarkdown && (
                <button
                    onClick={() => {
                        onOpenPreview();
                        onClose();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-paper hover:bg-[#094771] flex items-center gap-2"
                >
                    <Eye className="w-4 h-4" />
                    Open Preview
                </button>
            )}
            <button
                onClick={onClose}
                className="w-full px-4 py-2 text-left text-sm text-paper hover:bg-[#094771]"
            >
                Close
            </button>
        </div>
    );
}
