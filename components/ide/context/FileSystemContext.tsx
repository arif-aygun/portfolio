'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { profile as initialProfile, projects as initialProjects, skills as initialSkills } from '@/data/portfolio';

// Define the shape of our data
interface PortfolioData {
    profile: typeof initialProfile;
    projects: typeof initialProjects;
    skills: typeof initialSkills;
}

interface FileSystemContextType {
    files: Record<string, string>;
    updateFile: (filename: string, content: string) => void;
    // We expose the parsed data so components can use it directly
    data: PortfolioData;
    error: string | null;
}

const FileSystemContext = createContext<FileSystemContextType | undefined>(undefined);

export function FileSystemProvider({ children }: { children: React.ReactNode }) {
    // Initialize virtual files
    const [files, setFiles] = useState<Record<string, string>>({
        'portfolio.json': JSON.stringify({
            profile: initialProfile,
            projects: initialProjects,
            skills: initialSkills
        }, null, 2),
        'README.md': `# Welcome to the Interactive IDE\n\nThis is a live environment. You can edit the data files and see the changes reflected instantly.\n\nTry opening 'portfolio.json' and changing your name or role!`
    });

    const [data, setData] = useState<PortfolioData>({
        profile: initialProfile,
        projects: initialProjects,
        skills: initialSkills
    });

    const [error, setError] = useState<string | null>(null);

    // Parse portfolio.json whenever it changes
    useEffect(() => {
        try {
            const content = files['portfolio.json'];
            if (!content) return;

            const parsed = JSON.parse(content);

            // Basic validation could go here, for now we just assume struct is correct if valid JSON
            setData(parsed);
            setError(null);
        } catch (e) {
            console.error("Failed to parse portfolio.json", e);
            setError((e as Error).message);
        }
    }, [files]);

    const updateFile = (filename: string, content: string) => {
        setFiles(prev => ({
            ...prev,
            [filename]: content
        }));
    };

    return (
        <FileSystemContext.Provider value={{ files, updateFile, data, error }}>
            {children}
        </FileSystemContext.Provider>
    );
}

export function useFileSystem() {
    const context = useContext(FileSystemContext);
    if (context === undefined) {
        throw new Error('useFileSystem must be used within a FileSystemProvider');
    }
    return context;
}
