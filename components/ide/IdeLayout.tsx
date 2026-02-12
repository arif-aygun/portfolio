'use client';

import { useState } from 'react';
import { ActivityBar } from '@/components/ide/ActivityBar';
import { Sidebar } from '@/components/ide/Sidebar';
import { SearchPanel } from '@/components/ide/SearchPanel';
import { SettingsPanel } from '@/components/ide/SettingsPanel';
import { EditorArea } from '@/components/ide/EditorArea';
import { StatusBar } from '@/components/ide/StatusBar';
import { QuickFileOpener } from '@/components/ide/QuickFileOpener';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { CommandPalette } from '@/components/ide/CommandPalette';
import { useTheme } from '@/components/providers/theme-provider';
import { FileSystemProvider } from '@/components/ide/context/FileSystemContext';

interface IdeLayoutProps {
    onExit: () => void;
}

interface Tab {
    name: string;
    icon: string;
}

const fileIcons: Record<string, string> = {
    'README.md': '📄',
    'about.tsx': '⚛️',
    'projects.tsx': '⚛️',
    'skills.tsx': '⚛️',
    'contact.tsx': '⚛️',
    'package.json': '📦',
};

export function IdeLayout({ onExit }: IdeLayoutProps) {
    const [activeView, setActiveView] = useState('explorer');
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTab, setActiveTab] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [quickFileOpen, setQuickFileOpen] = useState(false);
    const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
    const isMobile = useIsMobile();
    const { setTheme, theme } = useTheme();

    const handleFileSelect = (fileName: string) => {
        // Check if tab already exists
        const existingTab = tabs.find(tab => tab.name === fileName);

        if (!existingTab) {
            // Add new tab
            setTabs([...tabs, { name: fileName, icon: fileIcons[fileName] || '📄' }]);
        }

        // Set as active
        setActiveTab(fileName);
    };

    const handleTabClose = (tabName: string) => {
        const newTabs = tabs.filter(tab => tab.name !== tabName);
        setTabs(newTabs);

        // If closing active tab, switch to another tab
        if (tabName === activeTab && newTabs.length > 0) {
            setActiveTab(newTabs[newTabs.length - 1].name);
        }
    };

    const handleNextTab = () => {
        if (tabs.length <= 1) return;
        const currentIndex = tabs.findIndex(tab => tab.name === activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].name);
    };

    const handlePreviousTab = () => {
        if (tabs.length <= 1) return;
        const currentIndex = tabs.findIndex(tab => tab.name === activeTab);
        const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[previousIndex].name);
    };

    // Keyboard shortcuts
    useKeyboardShortcuts({
        onToggleSidebar: () => setSidebarVisible(!sidebarVisible),
        onOpenQuickFile: () => setQuickFileOpen(true),
        onFocusSearch: () => setActiveView('search'),
        onNextTab: handleNextTab,
        onPreviousTab: handlePreviousTab,
        onOpenCommandPalette: () => setCommandPaletteOpen(true),
    });

    const commands = [
        { id: '1', label: 'Toggle Sidebar', shortcut: 'Ctrl+B', action: () => setSidebarVisible(!sidebarVisible) },
        { id: '2', label: 'Go to File...', shortcut: 'Ctrl+P', action: () => setQuickFileOpen(true) },
        { id: '3', label: 'Search in Files', shortcut: 'Ctrl+Shift+F', action: () => setActiveView('search') },
        { id: '4', label: 'Toggle Theme', action: () => setTheme(theme === 'dracula' ? 'github-light' : 'dracula') },
        { id: '5', label: 'Close Active Tab', action: () => handleTabClose(activeTab) },
        { id: '6', label: 'Close All Tabs', action: () => setTabs([]) },
        { id: '7', label: 'View: Explorer', action: () => setActiveView('explorer') },
        { id: '8', label: 'View: Settings', action: () => setActiveView('settings') },
        { id: '9', label: 'Exit IDE Mode', action: onExit },
    ];

    return (
        <FileSystemProvider>
            <div className={`h-screen flex flex-col bg-theme-bg text-theme-fg overflow-hidden ${isMobile ? 'pb-14' : ''}`}>
                {/* Quick File Opener Modal */}
                <QuickFileOpener
                    isOpen={quickFileOpen}
                    onClose={() => setQuickFileOpen(false)}
                    onFileSelect={handleFileSelect}
                />

                {/* Command Palette */}
                <CommandPalette
                    isOpen={commandPaletteOpen}
                    onClose={() => setCommandPaletteOpen(false)}
                    actions={commands}
                />

                {/* Main IDE Layout */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Activity Bar - Desktop only (mobile is bottom nav) */}
                    {!isMobile && (
                        <ActivityBar
                            activeView={activeView}
                            onViewChange={setActiveView}
                            sidebarVisible={sidebarVisible}
                            onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
                        />
                    )}

                    {/* Sidebar - Explorer/Search/Settings */}
                    {activeView === 'explorer' && sidebarVisible && (
                        <Sidebar
                            onFileSelect={handleFileSelect}
                            activeFile={activeTab}
                            isOpen={sidebarVisible}
                            onClose={() => setSidebarVisible(false)}
                        />
                    )}
                    {activeView === 'search' && sidebarVisible && (
                        <SearchPanel onFileSelect={handleFileSelect} />
                    )}
                    {activeView === 'settings' && sidebarVisible && (
                        <SettingsPanel />
                    )}

                    {/* Editor Area */}
                    <EditorArea
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        onTabClose={handleTabClose}
                    />
                </div>

                {/* Status Bar - Desktop only */}
                {!isMobile && (
                    <StatusBar
                        activeFile={activeTab}
                        language={
                            activeTab.endsWith('.md') ? 'Markdown' :
                                activeTab.endsWith('.json') ? 'JSON' :
                                    activeTab.endsWith('.css') ? 'CSS' :
                                        'TypeScript JSX'
                        }
                    />
                )}

                {/* Activity Bar - Mobile (bottom navigation) */}
                {isMobile && (
                    <ActivityBar
                        activeView={activeView}
                        onViewChange={setActiveView}
                        sidebarVisible={sidebarVisible}
                        onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
                    />
                )}
            </div>
        </FileSystemProvider>
    );
}
