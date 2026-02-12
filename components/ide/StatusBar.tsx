'use client';

import { GitBranch, Circle } from 'lucide-react';

interface StatusBarProps {
    activeFile: string;
    language: string;
}

export function StatusBar({ activeFile, language }: StatusBarProps) {
    return (
        <div className="h-6 bg-electric flex items-center justify-between px-4 text-xs text-white select-none">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                    <GitBranch className="w-3 h-3" />
                    <span>polish</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                    <Circle className="w-2 h-2 fill-current" />
                    <span>0 errors</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                    {language}
                </div>
                <div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                    UTF-8
                </div>
                <div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer transition-colors">
                    Ln {Math.floor(Math.random() * 50) + 1}, Col {Math.floor(Math.random() * 80) + 1}
                </div>
            </div>
        </div>
    );
}
