'use client';

import { ExternalLink } from 'lucide-react';

export function ProjectsContent() {
    const projects = [
        { title: "LetMeClick", desc: "Full-stack gamification platform with microservices architecture, Redis caching, and real-time leaderboards.", tags: ["TypeScript", "Docker", "Redis"], href: "https://letmeclick.io" },
        { title: "UAV Payload", desc: "Autonomous object detection & trajectory calculation system for competition UAVs using OpenCV.", tags: ["Python", "OpenCV", "ROS"], href: "https://github.com/GTU-Kuzgun/kuzgun_2025" },
        { title: "TSP Solver", desc: "Interactive visualization of Traveling Salesman Problem using genetic algorithms and Canvas API.", tags: ["JavaScript", "Algorithms"], href: "https://github.com/arif-aygun/Logistic-Route-Optimizer" },
        { title: "Base Genius", desc: "Decentralized quiz application on Base L2, featuring smart contract rewards and Web3 authentication.", tags: ["Solidity", "Web3", "Next.js"], href: "https://github.com/arif-aygun/base-genius" },
        { title: "Midnight Guardian", desc: "Real-time productivity tool with Windows API integration for activity tracking and focused work sessions.", tags: ["Node.js", "Electron", "WinAPI"], href: "https://github.com/arif-aygun/midnight-guardian" },
    ];

    return (
        <div className="p-8 font-mono text-sm">
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 50 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="mb-6">
                        <span className="syntax-keyword">import</span>{' '}
                        <span className="syntax-function">{'{ Project }'}</span>{' '}
                        <span className="syntax-keyword">from</span>{' '}
                        <span className="syntax-string">'@/types'</span>
                        <span className="text-concrete">;</span>
                    </div>

                    <div className="mb-4">
                        <span className="syntax-keyword">export const</span>{' '}
                        <span className="syntax-function">projects</span>
                        <span className="text-concrete">: </span>
                        <span className="syntax-type">Project[]</span>
                        <span className="text-concrete"> = [</span>
                    </div>

                    {projects.map((project, idx) => (
                        <div key={idx} className="ml-4 mb-6 group">
                            <div className="text-concrete mb-2">{'{'}</div>
                            <div className="ml-4">
                                <div className="mb-1">
                                    <span className="syntax-variable">title</span>
                                    <span className="text-concrete">: </span>
                                    <span className="syntax-string">"{project.title}"</span>
                                    <span className="text-concrete">,</span>
                                </div>
                                <div className="mb-1">
                                    <span className="syntax-variable">description</span>
                                    <span className="text-concrete">: </span>
                                    <span className="syntax-string">"{project.desc}"</span>
                                    <span className="text-concrete">,</span>
                                </div>
                                <div className="mb-1">
                                    <span className="syntax-variable">stack</span>
                                    <span className="text-concrete">: [</span>
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>
                                            <span className="syntax-string">'{tag}'</span>
                                            {i < project.tags.length - 1 && <span className="text-concrete">, </span>}
                                        </span>
                                    ))}
                                    <span className="text-concrete">],</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="syntax-variable">link</span>
                                    <span className="text-concrete">: </span>
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        className="syntax-type hover:underline inline-flex items-center gap-1"
                                    >
                                        "{project.href.replace('https://', '')}"
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    <span className="text-concrete">,</span>
                                </div>
                            </div>
                            <div className="text-concrete">
                                {'}'}
                                {idx < projects.length - 1 && ','}
                            </div>
                        </div>
                    ))}

                    <div className="text-concrete mb-4">];</div>

                    <div className="mb-4">
                        <span className="syntax-keyword">export default</span>{' '}
                        <span className="syntax-function">projects</span>
                        <span className="text-concrete">;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

