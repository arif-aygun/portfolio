'use client';

import { X } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { ContextMenu } from './ContextMenu';

interface Tab {
    name: string;
    icon: string;
}

interface TabBarProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabName: string) => void;
    onTabClose: (tabName: string) => void;
    onOpenPreview?: (tabName: string) => void;
}

export function TabBar({ tabs, activeTab, onTabChange, onTabClose, onOpenPreview }: TabBarProps) {
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number; tabName: string } | null>(null);

    const handleContextMenu = (e: MouseEvent, tabName: string) => {
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            tabName,
        });
    };

    return (
        <>
            <div className="flex items-center bg-[#2d2d2d] border-b border-[#3e3e42] overflow-x-auto">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        onClick={() => onTabChange(tab.name)}
                        onContextMenu={(e) => handleContextMenu(e, tab.name)}
                        className={`group flex items-center gap-2 px-4 py-2 border-r border-[#3e3e42] cursor-pointer min-w-fit relative ${activeTab === tab.name
                                ? 'bg-[#1e1e1e] text-paper'
                                : 'bg-[#2d2d2d] text-concrete hover:bg-[#1e1e1e]/50'
                            }`}
                    >
                        {activeTab === tab.name && (
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-electric" />
                        )}
                        <span className="text-sm">{tab.icon}</span>
                        <span className="text-sm font-mono">{tab.name}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onTabClose(tab.name);
                            }}
                            className="opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded p-0.5 transition-opacity"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>

            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    fileName={contextMenu.tabName}
                    onClose={() => setContextMenu(null)}
                    onOpenPreview={() => {
                        if (onOpenPreview) {
                            onOpenPreview(contextMenu.tabName);
                        }
                    }}
                />
            )}
        </>
    );
}
