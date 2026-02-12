'use client';

import { Files, Search, Settings } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface ActivityBarProps {
    activeView: string;
    onViewChange: (view: string) => void;
    sidebarVisible: boolean;
    onToggleSidebar: () => void;
}

export function ActivityBar({ activeView, onViewChange, sidebarVisible, onToggleSidebar }: ActivityBarProps) {
    const isMobile = useIsMobile();

    const activities = [
        { id: 'explorer', icon: Files, label: 'Explorer' },
        { id: 'search', icon: Search, label: 'Search' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    const handleActivityClick = (activityId: string) => {
        if (activeView === activityId) {
            // Clicking the same icon toggles sidebar
            onToggleSidebar();
        } else {
            // Clicking a different icon shows that view and ensures sidebar is visible
            onViewChange(activityId);
            if (!sidebarVisible) {
                onToggleSidebar();
            }
        }
    };

    if (isMobile) {
        // Mobile: Bottom navigation bar
        return (
            <div className="fixed bottom-0 left-0 right-0 h-14 bg-theme-activity-bar border-t border-theme-border flex items-center justify-around px-2 z-40">
                {/* Activity icons */}
                {activities.map((activity) => (
                    <button
                        key={activity.id}
                        onClick={() => handleActivityClick(activity.id)}
                        className={`p-3 hover:bg-concrete/10 rounded transition-colors relative ${activeView === activity.id && sidebarVisible ? 'text-theme-fg' : 'text-concrete'
                            }`}
                        aria-label={activity.label}
                    >
                        <activity.icon className="w-5 h-5" />
                        {activeView === activity.id && sidebarVisible && (
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-electric" />
                        )}
                    </button>
                ))}
            </div>
        );
    }

    // Desktop: Vertical sidebar
    return (
        <div className="w-12 bg-theme-activity-bar flex flex-col items-center py-4 border-r border-theme-border">
            {/* Activity Icons */}
            <div className="flex-1 flex flex-col gap-4">
                {activities.map((activity) => (
                    <button
                        key={activity.id}
                        onClick={() => handleActivityClick(activity.id)}
                        className={`p-2 hover:bg-concrete/10 rounded transition-colors relative group ${activeView === activity.id && sidebarVisible ? 'text-theme-fg' : 'text-concrete'
                            }`}
                        title={activity.label}
                    >
                        <activity.icon className="w-6 h-6" />
                        {activeView === activity.id && sidebarVisible && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-paper" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
