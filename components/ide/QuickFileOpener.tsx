'use client';

import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';

interface QuickFileOpenerProps {
    isOpen: boolean;
    onClose: () => void;
    onFileSelect: (fileName: string) => void;
}

const allFiles = [
    { name: 'README.md', icon: '📄', path: 'README.md' },
    { name: 'about.tsx', icon: '⚛️', path: 'src/about.tsx' },
    { name: 'projects.tsx', icon: '⚛️', path: 'src/projects.tsx' },
    { name: 'skills.tsx', icon: '⚛️', path: 'src/skills.tsx' },
    { name: 'contact.tsx', icon: '⚛️', path: 'src/contact.tsx' },
    { name: 'package.json', icon: '📦', path: 'package.json' },
];

export function QuickFileOpener({ isOpen, onClose, onFileSelect }: QuickFileOpenerProps) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filteredFiles = query.trim()
        ? allFiles.filter(file =>
            file.name.toLowerCase().includes(query.toLowerCase()) ||
            file.path.toLowerCase().includes(query.toLowerCase())
        )
        : allFiles;

    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % filteredFiles.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + filteredFiles.length) % filteredFiles.length);
            } else if (e.key === 'Enter' && filteredFiles[selectedIndex]) {
                e.preventDefault();
                onFileSelect(filteredFiles[selectedIndex].name);
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredFiles, onClose, onFileSelect]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50">
                <div className="bg-[#2d2d2d] border border-[#3e3e42] rounded-lg shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3e3e42]">
                        <Search className="w-5 h-5 text-concrete" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setSelectedIndex(0);
                            }}
                            placeholder="Search files..."
                            className="flex-1 bg-transparent text-paper text-lg outline-none"
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-[#3e3e42] rounded transition-colors"
                        >
                            <X className="w-5 h-5 text-concrete" />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-96 overflow-y-auto">
                        {filteredFiles.length === 0 ? (
                            <div className="p-8 text-center text-concrete/50">
                                No files found
                            </div>
                        ) : (
                            filteredFiles.map((file, index) => (
                                <div
                                    key={file.path}
                                    onClick={() => {
                                        onFileSelect(file.name);
                                        onClose();
                                    }}
                                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${index === selectedIndex
                                            ? 'bg-electric/20 border-l-2 border-electric'
                                            : 'hover:bg-[#3e3e42]'
                                        }`}
                                >
                                    <span className="text-2xl">{file.icon}</span>
                                    <div className="flex-1">
                                        <div className="text-paper font-medium">{file.name}</div>
                                        <div className="text-xs text-concrete/70">{file.path}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer hint */}
                    <div className="px-4 py-2 bg-[#252526] border-t border-[#3e3e42] text-xs text-concrete/50 flex gap-4">
                        <span>↑↓ Navigate</span>
                        <span>↵ Open</span>
                        <span>Esc Close</span>
                    </div>
                </div>
            </div>
        </>
    );
}
