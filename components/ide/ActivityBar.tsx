'use client';

import { Files, Search, Settings, Sun, Moon, PanelLeftClose, PanelLeft } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface ActivityBarProps {
    activeView: string;
    onViewChange: (view: string) => void;
    sidebarVisible: boolean;
    onToggleSidebar: () => void;
}

export function ActivityBar({ activeView, onViewChange, sidebarVisible, onToggleSidebar }: ActivityBarProps) {
    const { theme, toggleTheme } = useTheme();

    const activities = [
        { id: 'explorer', icon: Files, label: 'Explorer' },
        { id: 'search', icon: Search, label: 'Search' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 border-r border-[#3e3e42]">
            {/* Sidebar Toggle */}
            <div className="mb-4 pb-4 border-b border-[#3e3e42]">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 hover:bg-[#2a2d2e] rounded transition-colors text-concrete"
                    title={sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
                >
                    {sidebarVisible ? (
                        <PanelLeftClose className="w-6 h-6" />
                    ) : (
                        <PanelLeft className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Activity Icons */}
            <div className="flex-1 flex flex-col gap-4">
                {activities.map((activity) => (
                    <button
                        key={activity.id}
                        onClick={() => onViewChange(activity.id)}
                        className={`p-2 hover:bg-[#2a2d2e] rounded transition-colors relative group ${activeView === activity.id ? 'text-paper' : 'text-concrete'
                            }`}
                        title={activity.label}
                    >
                        <activity.icon className="w-6 h-6" />
                        {activeView === activity.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-paper" />
                        )}
                    </button>
                ))}
            </div>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 hover:bg-[#2a2d2e] rounded transition-colors text-concrete"
                title="Toggle Theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-6 h-6" />
                ) : (
                    <Moon className="w-6 h-6" />
                )}
            </button>
        </div>
    );
}
