'use client';

import { GitBranch, Circle } from 'lucide-react';

export function StatusBar() {
    return (
        <div className="h-6 bg-electric flex items-center justify-between px-4 text-xs text-white">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3" />
                    <span>ide-layout</span>
                </div>
                <div className="flex items-center gap-1">
                    <Circle className="w-2 h-2 fill-current" />
                    <span>0 errors</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span>TypeScript JSX</span>
                <span>UTF-8</span>
                <span>Ln 1, Col 1</span>
            </div>
        </div>
    );
}
