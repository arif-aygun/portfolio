'use client';

import { Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';

interface SearchPanelProps {
    onFileSelect: (fileName: string) => void;
}

export function SearchPanel({ onFileSelect }: SearchPanelProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const allContent = [
        { file: 'README.md', line: 1, text: 'Arif Aygun - Full Stack Developer' },
        { file: 'README.md', line: 5, text: 'Backend Infrastructure, Decentralized Systems' },
        { file: 'projects.tsx', line: 12, text: 'LetMeClick - Full-stack gamification platform' },
        { file: 'projects.tsx', line: 18, text: 'TypeScript, Docker, Redis' },
        { file: 'projects.tsx', line: 24, text: 'UAV Payload - Autonomous object detection' },
        { file: 'projects.tsx', line: 30, text: 'Python, OpenCV, ROS' },
        { file: 'skills.tsx', line: 8, text: 'Node.js, TypeScript, Express, Python' },
        { file: 'skills.tsx', line: 15, text: 'Docker, Next.js, MySQL, Firebase' },
        { file: 'contact.tsx', line: 6, text: 'araygun48@gmail.com' },
        { file: 'contact.tsx', line: 9, text: 'github.com/arif-aygun' },
        { file: 'contact.tsx', line: 12, text: 'linkedin.com/in/ahmetarifaygun' },
    ];

    const filteredResults = searchQuery.trim()
        ? allContent.filter(item =>
            item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.file.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] h-full flex flex-col">
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-concrete/70 font-semibold border-b border-[#3e3e42]">
                Search
            </div>

            {/* Search Input */}
            <div className="p-3 border-b border-[#3e3e42]">
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search files..."
                        className="w-full bg-[#3c3c3c] text-paper text-sm px-3 py-2 pr-8 rounded border border-[#3e3e42] focus:border-electric focus:outline-none"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-concrete hover:text-paper"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
                {searchQuery.trim() === '' ? (
                    <div className="p-4 text-sm text-concrete/50 text-center">
                        Type to search across all files
                    </div>
                ) : filteredResults.length === 0 ? (
                    <div className="p-4 text-sm text-concrete/50 text-center">
                        No results found
                    </div>
                ) : (
                    <div className="p-2">
                        <div className="text-xs text-concrete/70 px-2 py-1">
                            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                        </div>
                        {filteredResults.map((result, idx) => (
                            <div
                                key={idx}
                                onClick={() => onFileSelect(result.file)}
                                className="px-2 py-2 hover:bg-[#2a2d2e] cursor-pointer rounded transition-colors"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-electric text-xs font-mono">{result.file}</span>
                                    <span className="text-concrete/50 text-xs">:{result.line}</span>
                                </div>
                                <div className="text-sm text-concrete line-clamp-2">
                                    {result.text}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
