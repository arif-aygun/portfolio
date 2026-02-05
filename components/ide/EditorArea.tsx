'use client';

import { TabBar } from './TabBar';
import { ReadmeContent } from './content/ReadmeContent';
import { ReadmePreview } from './content/ReadmePreview';
import { AboutContent } from './content/AboutContent';
import { ProjectsContent } from './content/ProjectsContent';
import { SkillsContent } from './content/SkillsContent';
import { ContactContent } from './content/ContactContent';
import { Eye, Code } from 'lucide-react';
import { useState } from 'react';

interface Tab {
    name: string;
    icon: string;
}

interface EditorAreaProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabName: string) => void;
    onTabClose: (tabName: string) => void;
}

export function EditorArea({ tabs, activeTab, onTabChange, onTabClose }: EditorAreaProps) {
    const [previewMode, setPreviewMode] = useState<{ [key: string]: boolean }>({
        'README.md': true
    });

    const handleOpenPreview = (tabName: string) => {
        setPreviewMode({ ...previewMode, [tabName]: true });
    };

    const togglePreview = (tabName: string) => {
        setPreviewMode({ ...previewMode, [tabName]: !previewMode[tabName] });
    };

    const isInPreview = previewMode[activeTab] || false;

    const renderContent = () => {
        // If README.md and in preview mode, show preview
        if (activeTab === 'README.md' && isInPreview) {
            return <ReadmePreview />;
        }

        switch (activeTab) {
            case 'README.md':
                return <ReadmeContent />;
            case 'about.tsx':
                return <AboutContent />;
            case 'projects.tsx':
                return <ProjectsContent />;
            case 'skills.tsx':
                return <SkillsContent />;
            case 'contact.tsx':
                return <ContactContent />;
            case 'about.tsx':
                return <ReadmeContent />; // Can create separate AboutContent later
            case 'package.json':
                return <PackageJsonContent />;
            default:
                return <WelcomeScreen />;
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-theme-bg overflow-hidden" style={{ fontSize: 'var(--editor-font-size)' }}>
            {tabs.length > 0 ? (
                <>
                    <TabBar
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={onTabChange}
                        onTabClose={onTabClose}
                        onOpenPreview={handleOpenPreview}
                    />

                    {/* Preview toggle for markdown files */}
                    {activeTab.endsWith('.md') && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-theme-sidebar border-b border-theme-border">
                            <button
                                onClick={() => togglePreview(activeTab)}
                                className={`flex items-center gap-1 px-3 py-1 rounded text-xs transition-colors ${!isInPreview
                                    ? 'bg-electric/20 text-electric'
                                    : 'text-concrete hover:bg-concrete/10'
                                    }`}
                            >
                                <Code className="w-3 h-3" />
                                Code
                            </button>
                            <button
                                onClick={() => togglePreview(activeTab)}
                                className={`flex items-center gap-1 px-3 py-1 rounded text-xs transition-colors ${isInPreview
                                    ? 'bg-electric/20 text-electric'
                                    : 'text-concrete hover:bg-concrete/10'
                                    }`}
                            >
                                <Eye className="w-3 h-3" />
                                Preview
                            </button>
                        </div>
                    )}

                    <div className="flex-1 overflow-y-auto">
                        {renderContent()}
                    </div>
                </>
            ) : (
                <WelcomeScreen />
            )}
        </div>
    );
}

function WelcomeScreen() {
    return (
        <div className="flex-1 flex items-center justify-center text-center p-8">
            <div>
                <h1 className="text-4xl font-space-grotesk font-bold mb-4 text-theme-fg">
                    Welcome to Arif's Portfolio
                </h1>
                <p className="text-concrete mb-6">
                    Click on a file in the Explorer to get started
                </p>
                <div className=" text-concrete/50">
                    <p>💡 Try opening <span className="text-electric">README.md</span> first</p>
                </div>
            </div>
        </div>
    );
}

function PackageJsonContent() {
    return (
        <div className="p-8 font-mono ">
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 20 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="text-concrete">{'{'}</div>
                    <div className="ml-4">
                        <div><span className="syntax-variable">"name"</span><span>: </span><span className="syntax-string">"arif-aygun"</span>,</div>
                        <div><span className="syntax-variable">"version"</span><span>: </span><span className="syntax-string">"1.0.0"</span>,</div>
                        <div><span className="syntax-variable">"description"</span><span>: </span><span className="syntax-string">"Full Stack Developer Portfolio"</span>,</div>
                        <div><span className="syntax-variable">"author"</span><span>: </span><span className="syntax-string">"Arif Aygun"</span>,</div>
                        <div className="mt-2"><span className="syntax-variable">"skills"</span><span>: [</span></div>
                        <div className="ml-4">
                            <div><span className="syntax-string">"Backend Development"</span>,</div>
                            <div><span className="syntax-string">"Blockchain"</span>,</div>
                            <div><span className="syntax-string">"System Design"</span>,</div>
                            <div><span className="syntax-string">"DevOps"</span></div>
                        </div>
                        <div>],</div>
                        <div className="mt-2"><span className="syntax-variable">"education"</span><span>: </span><span className="syntax-string">"GTU Computer Engineering"</span></div>
                    </div>
                    <div className="text-concrete">{'}'}</div>
                </div>
            </div>
        </div>
    );
}

