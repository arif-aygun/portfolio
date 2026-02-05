'use client';

import { useState, useRef, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface TerminalProps {
    onNavigate: (file: string) => void;
}

export function Terminal({ onNavigate }: TerminalProps) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>(['Welcome to Portfolio Shell v1.0.0', 'Type "help" for available commands.']);
    const [isOpen, setIsOpen] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    const handleCommand = (cmd: string) => {
        const parts = cmd.trim().split(' ');
        const mainCmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        let output = `~/portfolio $ ${cmd}`;
        setHistory(prev => [...prev, output]);

        switch (mainCmd) {
            case 'help':
                setHistory(prev => [...prev,
                    'Available commands:',
                    '  ls          List files',
                    '  cat [file]  Open file',
                    '  whoami      Display user info',
                    '  clear       Clear terminal',
                    '  contact     Show contact info'
                ]);
                break;
            case 'ls':
                setHistory(prev => [...prev,
                    'README.md',
                    'about.tsx',
                    'projects.tsx',
                    'skills.tsx',
                    'contact.tsx',
                    'package.json'
                ]);
                break;
            case 'cat':
                if (args.length === 0) {
                    setHistory(prev => [...prev, 'Usage: cat [filename]']);
                } else {
                    const file = args[0];
                    if (['README.md', 'about.tsx', 'projects.tsx', 'skills.tsx', 'contact.tsx', 'package.json'].includes(file)) {
                        setHistory(prev => [...prev, `Opening ${file}...`]);
                        onNavigate(file);
                    } else {
                        setHistory(prev => [...prev, `cat: ${file}: No such file or directory`]);
                    }
                }
                break;
            case 'whoami':
                setHistory(prev => [...prev, 'guest@portfolio']);
                break;
            case 'contact':
                onNavigate('contact.tsx');
                setHistory(prev => [...prev, 'Opening contact info...']);
                break;
            case 'clear':
                setHistory([]);
                break;
            case '':
                break;
            default:
                setHistory(prev => [...prev, `command not found: ${mainCmd}`]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    if (!isOpen) {
        return (
            <div
                className="h-8 bg-theme-sidebar border-t border-theme-border flex items-center px-4 cursor-pointer hover:bg-theme-bg"
                onClick={() => setIsOpen(true)}
            >
                <div className="flex items-center gap-2 text-xs text-concrete">
                    <ChevronUp className="w-3 h-3" />
                    <span>Terminal</span>
                </div>
            </div>
        );
    }

    return (
        <div className="h-48 bg-theme-sidebar border-t border-theme-border flex flex-col transition-all duration-300">
            <div className="h-8 bg-theme-sidebar flex items-center justify-between px-4 border-b border-theme-border/50">
                <div className="flex items-center gap-2 text-xs text-concrete font-medium cursor-pointer" onClick={() => setIsOpen(false)}>
                    <ChevronDown className="w-3 h-3" />
                    <span>Terminal</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-concrete hover:text-theme-fg">
                    <X className="w-3 h-3" />
                </button>
            </div>

            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto" onClick={() => document.getElementById('terminal-input')?.focus()}>
                {history.map((line, i) => (
                    <div key={i} className="text-sm text-concrete/80 mb-1">{line}</div>
                ))}
                <div className="flex items-center gap-2 text-sm text-theme-fg">
                    <span className="text-electric">~/portfolio $</span>
                    <input
                        id="terminal-input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-theme-fg shadow-none"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
}
