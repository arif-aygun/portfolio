'use client';

import { FileCode, FolderOpen, Folder, ChevronRight, ChevronDown, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface FileNode {
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
    icon?: string;
}

interface SidebarProps {
    onFileSelect: (fileName: string) => void;
    activeFile: string;
    isOpen: boolean;
    onClose?: () => void;
}

export function Sidebar({ onFileSelect, activeFile, isOpen, onClose }: SidebarProps) {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src']));
    const isMobile = useIsMobile();

    const fileTree: FileNode[] = [
        { name: 'README.md', type: 'file', icon: '📄' },
        {
            name: 'src',
            type: 'folder',
            icon: '📁',
            children: [
                { name: 'about.tsx', type: 'file', icon: '⚛️' },
                { name: 'projects.tsx', type: 'file', icon: '⚛️' },
                { name: 'skills.tsx', type: 'file', icon: '⚛️' },
                { name: 'contact.tsx', type: 'file', icon: '⚛️' },
            ],
        },
        { name: 'package.json', type: 'file', icon: '📦' },
    ];

    const toggleFolder = (folderName: string) => {
        const newExpanded = new Set(expandedFolders);
        if (newExpanded.has(folderName)) {
            newExpanded.delete(folderName);
        } else {
            newExpanded.add(folderName);
        }
        setExpandedFolders(newExpanded);
    };

    const handleFileSelect = (fileName: string) => {
        onFileSelect(fileName);
        // Close sidebar on mobile after file selection
        if (isMobile && onClose) {
            onClose();
        }
    };

    const renderNode = (node: FileNode, level: number = 0) => {
        const isExpanded = expandedFolders.has(node.name);
        const isActive = activeFile === node.name;

        if (node.type === 'folder') {
            return (
                <div key={node.name}>
                    <div
                        onClick={() => toggleFolder(node.name)}
                        className="flex items-center gap-1 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer select-none text-sm active:bg-[#3e3e42]"
                        style={{ paddingLeft: `${level * 12 + 8}px` }}
                    >
                        {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-concrete" />
                        ) : (
                            <ChevronRight className="w-4 h-4 text-concrete" />
                        )}
                        <span className="mr-1">{isExpanded ? '📂' : '📁'}</span>
                        <span className="text-concrete">{node.name}</span>
                    </div>
                    {isExpanded && node.children && (
                        <div>
                            {node.children.map((child) => renderNode(child, level + 1))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div
                key={node.name}
                onClick={() => handleFileSelect(node.name)}
                className={`flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer select-none text-sm active:bg-[#3e3e42] ${isActive ? 'bg-[#37373d]' : ''
                    }`}
                style={{ paddingLeft: `${level * 12 + 24}px` }}
            >
                <span>{node.icon}</span>
                <span className={`text-concrete ${isActive ? 'text-paper' : ''}`}>{node.name}</span>
            </div>
        );
    };

    if (isMobile) {
        // Mobile: Drawer with backdrop
        return (
            <>
                {/* Backdrop */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                        onClick={onClose}
                    />
                )}

                {/* Drawer */}
                <div
                    className={`fixed top-0 left-0 bottom-14 w-72 bg-[#252526] border-r border-[#3e3e42] z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#3e3e42]">
                        <div className="text-xs uppercase tracking-wider text-concrete/70 font-semibold">
                            Explorer
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-[#2a2d2e] rounded transition-colors text-concrete"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="overflow-y-auto pb-4" style={{ height: 'calc(100% - 56px)' }}>
                        {fileTree.map((node) => renderNode(node))}
                    </div>
                </div>
            </>
        );
    }

    // Desktop: Static sidebar
    return (
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] h-full overflow-y-auto">
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-concrete/70 font-semibold">
                Explorer
            </div>
            <div className="pb-4">
                {fileTree.map((node) => renderNode(node))}
            </div>
        </div>
    );
}
