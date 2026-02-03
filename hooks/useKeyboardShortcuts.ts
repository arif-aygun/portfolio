'use client';

import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onToggleSidebar: () => void;
  onOpenQuickFile: () => void;
  onFocusSearch: () => void;
  onNextTab: () => void;
  onPreviousTab: () => void;
}

export function useKeyboardShortcuts({
  onToggleSidebar,
  onOpenQuickFile,
  onFocusSearch,
  onNextTab,
  onPreviousTab,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrl = e.ctrlKey || e.metaKey; // Support both Ctrl and Cmd (Mac)

      // Ctrl+B - Toggle Sidebar (VS Code standard)
      if (isCtrl && e.key === 'b' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        onToggleSidebar();
        return;
      }

      // Ctrl+P - Quick File Open (VS Code standard)
      if (isCtrl && e.key === 'p' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        onOpenQuickFile();
        return;
      }

      // Ctrl+Shift+F - Focus Search (VS Code standard)
      if (isCtrl && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        onFocusSearch();
        return;
      }

      // Alt+Right Arrow - Next Tab (browser-safe alternative)
      if (e.altKey && e.key === 'ArrowRight' && !isCtrl && !e.shiftKey) {
        e.preventDefault();
        onNextTab();
        return;
      }

      // Alt+Left Arrow - Previous Tab (browser-safe alternative)
      if (e.altKey && e.key === 'ArrowLeft' && !isCtrl && !e.shiftKey) {
        e.preventDefault();
        onPreviousTab();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleSidebar, onOpenQuickFile, onFocusSearch, onNextTab, onPreviousTab]);
}


