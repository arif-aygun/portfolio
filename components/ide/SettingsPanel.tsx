'use client';

import { useTheme } from '@/components/theme-provider';
import { Sun, Moon, Palette, Type, Zap, LucideIcon } from 'lucide-react';

interface SettingItem {
    label: string;
    value: string;
    action?: () => void;
    icon?: LucideIcon;
    readOnly?: boolean;
}

interface SettingCategory {
    category: string;
    icon: LucideIcon;
    items: SettingItem[];
}

export function SettingsPanel() {
    const { theme, toggleTheme } = useTheme();

    const settings: SettingCategory[] = [
        {
            category: 'Appearance',
            icon: Palette,
            items: [
                {
                    label: 'Color Theme',
                    value: theme === 'dark' ? 'Dark' : 'Light',
                    action: toggleTheme,
                    icon: theme === 'dark' ? Moon : Sun,
                },
            ],
        },
        {
            category: 'Editor',
            icon: Type,
            items: [
                {
                    label: 'Font Family',
                    value: 'JetBrains Mono',
                    readOnly: true,
                },
                {
                    label: 'Font Size',
                    value: '14px',
                    readOnly: true,
                },
            ],
        },
        {
            category: 'Features',
            icon: Zap,
            items: [
                {
                    label: 'Line Numbers',
                    value: 'On',
                    readOnly: true,
                },
                {
                    label: 'Syntax Highlighting',
                    value: 'On',
                    readOnly: true,
                },
            ],
        },
    ];

    return (
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] h-full overflow-y-auto">
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-concrete/70 font-semibold border-b border-[#3e3e42]">
                Settings
            </div>

            <div className="p-4 space-y-6">
                {settings.map((section, idx) => (
                    <div key={idx}>
                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-paper">
                            <section.icon className="w-4 h-4 text-electric" />
                            {section.category}
                        </div>

                        <div className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="space-y-1">
                                    <div className="text-xs text-concrete">{item.label}</div>
                                    {item.action ? (
                                        <button
                                            onClick={item.action}
                                            className="w-full flex items-center justify-between px-3 py-2 bg-[#3c3c3c] hover:bg-[#3e3e42] rounded text-sm text-paper transition-colors"
                                        >
                                            <span>{item.value}</span>
                                            {item.icon && <item.icon className="w-4 h-4 text-electric" />}
                                        </button>
                                    ) : (
                                        <div className="px-3 py-2 bg-[#2d2d2d] rounded text-sm text-concrete border border-[#3e3e42]">
                                            {item.value}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Info Section */}
                <div className="pt-4 border-t border-[#3e3e42]">
                    <div className="text-xs text-concrete/50 space-y-1">
                        <div>Portfolio IDE v1.0.0</div>
                        <div>Built with Next.js</div>
                        <div className="pt-2">
                            <a
                                href="https://github.com/arif-aygun"
                                target="_blank"
                                className="text-electric hover:underline"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
