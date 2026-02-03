'use client';

import { useTheme, THEME_CONFIGS, Theme, FontFamily } from '@/components/theme-provider';
import { Palette, Type, Zap, Check, Search, LucideIcon, Minus, Plus } from 'lucide-react';
import { useState, useMemo } from 'react';

interface SettingItem {
    label: string;
    value?: string;
    action?: () => void;
    icon?: LucideIcon;
    readOnly?: boolean;
    render?: () => React.ReactNode;
}

interface SettingCategory {
    category: string;
    icon: LucideIcon;
    items: SettingItem[];
}

export function SettingsPanel() {
    const {
        theme, setTheme,
        fontFamily, setFontFamily,
        fontSize, setFontSize
    } = useTheme();
    const [showThemePicker, setShowThemePicker] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter themes based on search
    const filteredThemes = useMemo(() => {
        const allThemes = Object.keys(THEME_CONFIGS) as Theme[];
        if (!searchQuery) return allThemes;

        return allThemes.filter(themeKey =>
            THEME_CONFIGS[themeKey].name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Group themes by category
    const themesByCategory = useMemo(() => {
        const grouped: { [key: string]: Theme[] } = {};
        filteredThemes.forEach(themeKey => {
            const category = THEME_CONFIGS[themeKey].category || 'Other';
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push(themeKey);
        });
        return grouped;
    }, [filteredThemes]);

    const settings: SettingCategory[] = [
        {
            category: 'Editor',
            icon: Type,
            items: [
                {
                    label: 'Font Family',
                    render: () => (
                        <select
                            value={fontFamily}
                            onChange={(e) => setFontFamily(e.target.value as FontFamily)}
                            className="w-full bg-concrete/10 border border-theme-border rounded px-2 py-1.5 text-sm text-theme-fg focus:outline-none focus:border-electric"
                        >
                            <option value="JetBrains Mono">JetBrains Mono</option>
                            <option value="Fira Code">Fira Code</option>
                            <option value="Source Code Pro">Source Code Pro</option>
                            <option value="Consolas">Consolas</option>
                            <option value="Monospace">Monospace</option>
                        </select>
                    )
                },
                {
                    label: 'Font Size',
                    render: () => (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                                className="p-1.5 bg-concrete/10 hover:bg-concrete/20 rounded border border-theme-border transition-colors text-theme-fg"
                                disabled={fontSize <= 12}
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <div className="flex-1 text-center text-sm font-mono bg-concrete/5 rounded border border-theme-border py-1.5 text-theme-fg">
                                {fontSize}px
                            </div>
                            <button
                                onClick={() => setFontSize(Math.min(24, fontSize + 1))}
                                className="p-1.5 bg-concrete/10 hover:bg-concrete/20 rounded border border-theme-border transition-colors text-theme-fg"
                                disabled={fontSize >= 24}
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    )
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
        <div className="w-64 bg-theme-sidebar border-r border-theme-border h-full overflow-y-auto">
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-concrete/70 font-semibold border-b border-theme-border">
                Settings
            </div>

            <div className="p-4 space-y-6">
                {/* Color Theme Selector */}
                <div>
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-theme-fg">
                        <Palette className="w-4 h-4 text-electric" />
                        Appearance
                    </div>

                    <div className="space-y-3">
                        <div className="space-y-1">
                            <div className="text-xs text-concrete">Color Theme</div>

                            <div className="relative">
                                <button
                                    onClick={() => setShowThemePicker(!showThemePicker)}
                                    className="w-full flex items-center justify-between px-3 py-2 bg-concrete/10 hover:bg-concrete/10 rounded text-sm text-theme-fg transition-colors"
                                >
                                    <span>{THEME_CONFIGS[theme].name}</span>
                                    <Palette className="w-4 h-4 text-electric" />
                                </button>

                                {showThemePicker && (
                                    <>
                                        {/* Backdrop */}
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setShowThemePicker(false)}
                                        />

                                        {/* Popup */}
                                        <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-theme-sidebar border border-theme-border rounded shadow-xl z-50 max-h-80 overflow-y-auto">
                                            {/* Search Box */}
                                            <div className="mb-2 sticky top-0 bg-theme-sidebar pb-2 z-10">
                                                <div className="relative">
                                                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-concrete/50" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search themes..."
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        className="w-full pl-8 pr-3 py-1.5 bg-concrete/10 border border-theme-border rounded text-sm text-theme-fg placeholder-concrete/50 focus:outline-none focus:border-electric"
                                                    />
                                                </div>
                                            </div>

                                            {/* Themes grouped by category */}
                                            {Object.entries(themesByCategory).map(([category, themes]) => (
                                                <div key={category} className="mb-3 last:mb-0">
                                                    <div className="text-xs text-concrete/70 font-semibold mb-1 px-1">
                                                        {category}
                                                    </div>
                                                    <div className="space-y-1">
                                                        {themes.map((themeKey) => (
                                                            <button
                                                                key={themeKey}
                                                                onClick={() => {
                                                                    setTheme(themeKey);
                                                                    setShowThemePicker(false);
                                                                    setSearchQuery('');
                                                                }}
                                                                className="w-full flex items-center justify-between px-3 py-2 hover:bg-concrete/10 rounded text-sm text-theme-fg transition-colors group"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    {/* Color preview squares */}
                                                                    <div className="flex gap-0.5">
                                                                        <div
                                                                            className="w-3 h-3 rounded"
                                                                            style={{ backgroundColor: THEME_CONFIGS[themeKey].background }}
                                                                        />
                                                                        <div
                                                                            className="w-3 h-3 rounded"
                                                                            style={{ backgroundColor: THEME_CONFIGS[themeKey].keyword }}
                                                                        />
                                                                        <div
                                                                            className="w-3 h-3 rounded"
                                                                            style={{ backgroundColor: THEME_CONFIGS[themeKey].string }}
                                                                        />
                                                                    </div>
                                                                    <span className={theme === themeKey ? 'text-electric' : ''}>
                                                                        {THEME_CONFIGS[themeKey].name}
                                                                    </span>
                                                                </div>
                                                                {theme === themeKey && (
                                                                    <Check className="w-4 h-4 text-electric" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}

                                            {filteredThemes.length === 0 && (
                                                <div className="text-center py-4 text-concrete/50 text-sm">
                                                    No themes found
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other settings */}
                {settings.map((section, idx) => (
                    <div key={idx}>
                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-theme-fg">
                            <section.icon className="w-4 h-4 text-electric" />
                            {section.category}
                        </div>

                        <div className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="space-y-1">
                                    <div className="text-xs text-concrete">{item.label}</div>
                                    {item.render ? (
                                        item.render()
                                    ) : item.action ? (
                                        <button
                                            onClick={item.action}
                                            className="w-full flex items-center justify-between px-3 py-2 bg-concrete/10 hover:bg-concrete/10 rounded text-sm text-theme-fg transition-colors"
                                        >
                                            <span>{item.value}</span>
                                            {item.icon && <item.icon className="w-4 h-4 text-electric" />}
                                        </button>
                                    ) : (
                                        <div className="px-3 py-2 bg-theme-sidebar rounded text-sm text-concrete border border-theme-border">
                                            {item.value}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Info Section */}
                <div className="pt-4 border-t border-theme-border">
                    <div className="text-xs text-concrete/50 space-y-1">
                        <div>Portfolio IDE v1.0.0</div>
                        <div>{Object.keys(THEME_CONFIGS).length} Themes Available</div>
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
