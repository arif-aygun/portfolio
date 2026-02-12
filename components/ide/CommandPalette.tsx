'use client';

import { useEffect, useState, useRef } from 'react';
import { Search, Command, ChevronRight } from 'lucide-react';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    actions: {
        id: string;
        label: string;
        shortcut?: string;
        action: () => void;
    }[];
}

export function CommandPalette({ isOpen, onClose, actions }: CommandPaletteProps) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredActions = actions.filter(action =>
        action.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, filteredActions.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    filteredActions[selectedIndex].action();
                    onClose();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredActions, selectedIndex, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="w-[600px] max-w-[90vw] bg-theme-sidebar border border-theme-border rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100" onClick={e => e.stopPropagation()}>
                <div className="flex items-center gap-3 px-4 py-3 border-b border-theme-border">
                    <Command className="w-4 h-4 text-concrete" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a command..."
                        className="flex-1 bg-transparent border-none outline-none text-theme-fg placeholder-concrete/50"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                    />
                </div>

                <div className="max-h-[300px] overflow-y-auto py-2">
                    {filteredActions.length > 0 ? (
                        filteredActions.map((action, index) => (
                            <button
                                key={action.id}
                                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors ${index === selectedIndex ? 'bg-electric/10 text-electric' : 'text-theme-fg hover:bg-concrete/5'
                                    }`}
                                onClick={() => {
                                    action.action();
                                    onClose();
                                }}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <div className="flex items-center gap-2">
                                    {index === selectedIndex && <ChevronRight className="w-3 h-3" />}
                                    <span className={index === selectedIndex ? "ml-0" : "ml-5"}>{action.label}</span>
                                </div>
                                {action.shortcut && (
                                    <span className="text-xs text-concrete font-mono px-1.5 py-0.5 bg-concrete/10 rounded border border-theme-border/50">
                                        {action.shortcut}
                                    </span>
                                )}
                            </button>
                        ))
                    ) : (
                        <div className="px-4 py-8 text-center text-concrete/50 text-sm">
                            No matching commands
                        </div>
                    )}
                </div>
                <div className="px-4 py-2 bg-theme-bg border-t border-theme-border text-xs text-concrete flex justify-between">
                    <div>
                        <span className="font-semibold text-theme-fg">Tip:</span> Use arrows to navigate, Enter to select
                    </div>
                    <div>Currently in {filteredActions.length} commands</div>
                </div>
            </div>
        </div>
    );
}
