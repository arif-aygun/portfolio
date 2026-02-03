'use client';

import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function ReadmeContent() {
    return (
        <div className="p-8 max-w-4xl font-mono ">
            {/* Line numbers */}
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 30 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="mb-8">
                        <h1 className="text-5xl font-space-grotesk font-bold mb-4 text-theme-fg">
                            # Arif Aygun
                        </h1>
                        <h2 className="text-2xl text-electric mb-2">
                            ## Full Stack Developer
                        </h2>
                        <p className="text-concrete leading-relaxed">
                            Computer Engineering student at GTU specializing in **Backend Infrastructure**,
                            **Decentralized Systems**, and **Interactive Experiences**.
                            Building scalable solutions with modern technologies.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl text-acid mb-3">### About</h3>
                        <p className="text-concrete leading-relaxed mb-4">
                            I'm a developer passionate about creating efficient, scalable systems.
                            My experience spans from building full-stack applications with microservices
                            architecture to developing autonomous systems for UAVs.
                        </p>
                        <p className="text-concrete leading-relaxed">
                            Currently working on blockchain applications, real-time productivity tools,
                            and exploring the intersection of web3 and traditional backend systems.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl text-acid mb-3">### Quick Links</h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/arif-aygun"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-electric/10 hover:bg-electric/20 border border-electric/30 rounded-lg transition-colors group"
                            >
                                <Github className="w-4 h-4 text-electric" />
                                <span className="text-theme-fg">GitHub</span>
                                <ArrowUpRight className="w-3 h-3 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://linkedin.com/in/ahmetarifaygun"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-electric/10 hover:bg-electric/20 border border-electric/30 rounded-lg transition-colors group"
                            >
                                <Linkedin className="w-4 h-4 text-electric" />
                                <span className="text-theme-fg">LinkedIn</span>
                                <ArrowUpRight className="w-3 h-3 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="mailto:araygun48@gmail.com"
                                className="flex items-center gap-2 px-4 py-2 bg-electric/10 hover:bg-electric/20 border border-electric/30 rounded-lg transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-electric" />
                                <span className="text-theme-fg">Email</span>
                                <ArrowUpRight className="w-3 h-3 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-concrete/50 text-xs">
                            ---
                            <br />
                            💡 Tip: Navigate through the `src/` folder to explore my projects, skills, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
