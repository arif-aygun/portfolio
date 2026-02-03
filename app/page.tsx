'use client';

import { useState } from 'react';
import { ActivityBar } from '@/components/ide/ActivityBar';
import { Sidebar } from '@/components/ide/Sidebar';
import { SearchPanel } from '@/components/ide/SearchPanel';
import { SettingsPanel } from '@/components/ide/SettingsPanel';
import { EditorArea } from '@/components/ide/EditorArea';
import { StatusBar } from '@/components/ide/StatusBar';

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

export default function Home() {
  const [activeView, setActiveView] = useState('explorer');
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(true);

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

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-paper overflow-hidden">
      {/* Main IDE Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          activeView={activeView}
          onViewChange={setActiveView}
          sidebarVisible={sidebarVisible}
          onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
        />

        {/* Sidebar - Explorer/Search/Settings */}
        {sidebarVisible && (
          <>
            {activeView === 'explorer' && (
              <Sidebar onFileSelect={handleFileSelect} activeFile={activeTab} />
            )}
            {activeView === 'search' && (
              <SearchPanel onFileSelect={handleFileSelect} />
            )}
            {activeView === 'settings' && (
              <SettingsPanel />
            )}
          </>
        )}

        {/* Editor Area */}
        <EditorArea
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onTabClose={handleTabClose}
        />
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}
