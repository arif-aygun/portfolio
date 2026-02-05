'use client';

import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
    path: string[];
}

export function Breadcrumbs({ path }: BreadcrumbsProps) {
    return (
        <div className="flex items-center gap-1 px-4 py-2 text-xs text-concrete border-b border-theme-border bg-theme-bg">
            <Home className="w-3 h-3" />
            <span className="text-concrete/50">portfolio</span>
            {path.map((segment, index) => (
                <div key={index} className="flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-concrete/50" />
                    <span className={index === path.length - 1 ? 'text-theme-fg' : ''}>
                        {segment}
                    </span>
                </div>
            ))}
        </div>
    );
}
