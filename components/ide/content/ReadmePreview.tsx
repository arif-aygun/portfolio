'use client';

import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useFileSystem } from '@/components/ide/context/FileSystemContext';

export function ReadmePreview() {
    const { data } = useFileSystem();
    const { profile } = data;

    return (
        <div className="p-8 max-w-4xl prose prose-invert">
            <h1 className="text-5xl font-space-grotesk font-bold mb-4 text-theme-fg border-b border-electric/20 pb-4">
                {profile.name}
            </h1>

            <h2 className="text-3xl font-space-grotesk font-bold mb-3 text-electric mt-8">
                {profile.role}
            </h2>

            <p className="text-concrete text-lg leading-relaxed mb-6">
                {profile.bio}
            </p>

            <h3 className="text-2xl font-space-grotesk font-bold mb-3 text-acid mt-8">
                About
            </h3>

            <p className="text-concrete leading-relaxed mb-4">
                I'm a developer passionate about creating efficient, scalable systems.
                My experience spans from building full-stack applications with microservices
                architecture to developing autonomous systems for UAVs.
            </p>

            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-acid mt-8">
                Quick Links
            </h3>

            <div className="flex flex-wrap gap-4 mb-8">
                <a
                    href={profile.social.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-electric/20 hover:bg-electric/30 border border-electric/40 rounded-lg transition-colors group"
                >
                    <Github className="w-5 h-5 text-electric" />
                    <span className="text-theme-fg font-medium">GitHub</span>
                    <ArrowUpRight className="w-4 h-4 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                    href={profile.social.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-electric/20 hover:bg-electric/30 border border-electric/40 rounded-lg transition-colors group"
                >
                    <Linkedin className="w-5 h-5 text-electric" />
                    <span className="text-theme-fg font-medium">LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                    href={profile.social.email}
                    className="flex items-center gap-2 px-4 py-2 bg-electric/20 hover:bg-electric/30 border border-electric/40 rounded-lg transition-colors group"
                >
                    <Mail className="w-5 h-5 text-electric" />
                    <span className="text-theme-fg font-medium">Email</span>
                    <ArrowUpRight className="w-4 h-4 text-electric opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>

            <blockquote className="border-l-4 border-electric pl-4 py-2 my-6 bg-electric/5 rounded-r">
                <p className="text-concrete/80 text-sm italic mb-0">
                    💡 Tip: Navigate through the <code className="text-electric bg-electric/10 px-1.5 py-0.5 rounded">src/</code> folder to explore my projects, skills, and more.
                </p>
            </blockquote>

            <hr className="border-electric/20 my-8" />

            <div className="text-concrete/50 text-sm">
                <p>Last updated: February 2026</p>
            </div>
        </div>
    );
}
