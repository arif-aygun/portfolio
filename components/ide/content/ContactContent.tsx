'use client';

import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function ContactContent() {
    return (
        <div className="p-8 font-mono text-sm">
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 30 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="mb-6">
                        <span className="text-purple-400">import</span>{' '}
                        <span className="text-concrete">{'{ '}</span>
                        <span className="text-yellow-400">ContactInfo</span>
                        <span className="text-concrete">{' }'}</span>{' '}
                        <span className="text-purple-400">from</span>{' '}
                        <span className="text-green-400">'@/types'</span>
                        <span className="text-concrete">;</span>
                    </div>

                    <div className="mb-4">
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-yellow-400">contact</span>
                        <span className="text-concrete">: </span>
                        <span className="text-blue-400">ContactInfo</span>
                        <span className="text-concrete"> = {'{'}</span>
                    </div>

                    <div className="ml-4 mb-6">
                        <div className="mb-3">
                            <div className="mb-1">
                                <span className="text-green-400">email</span>
                                <span className="text-concrete">: </span>
                                <a href="mailto:araygun48@gmail.com" className="text-orange-400 hover:underline">
                                    "araygun48@gmail.com"
                                </a>
                                <span className="text-concrete">,</span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">
                                <span className="text-green-400">github</span>
                                <span className="text-concrete">: </span>
                                <a href="https://github.com/arif-aygun" target="_blank" className="text-orange-400 hover:underline">
                                    "github.com/arif-aygun"
                                </a>
                                <span className="text-concrete">,</span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">
                                <span className="text-green-400">linkedin</span>
                                <span className="text-concrete">: </span>
                                <a href="https://linkedin.com/in/ahmetarifaygun" target="_blank" className="text-orange-400 hover:underline">
                                    "linkedin.com/in/ahmetarifaygun"
                                </a>
                                <span className="text-concrete">,</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-concrete mb-8">{'}'};</div>

                    <div className="mt-8 p-6 border border-electric/20 rounded bg-electric/5">
                        <div className="mb-4">
                            <span className="text-gray-500">{'// Quick Contact Links'}</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:araygun48@gmail.com"
                                className="flex items-center gap-2 px-4 py-2 bg-electric hover:bg-electric/80 text-white rounded transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Email Me</span>
                            </a>
                            <a
                                href="https://github.com/arif-aygun"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-[#333] hover:bg-[#444] text-white rounded transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/ahmetarifaygun"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#006aa0] text-white rounded transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="text-purple-400">export default</span>{' '}
                        <span className="text-yellow-400">contact</span>
                        <span className="text-concrete">;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
