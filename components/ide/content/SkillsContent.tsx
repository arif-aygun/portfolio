'use client';

import {
    SiNodedotjs, SiTypescript, SiExpress, SiMysql, SiPython,
    SiOpencv, SiArduino, SiRaspberrypi, SiFirebase, SiDocker,
    SiJavascript, SiCplusplus, SiC, SiSolidity, SiNextdotjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export function SkillsContent() {
    const skills = [
        { name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
        { name: 'TypeScript', icon: SiTypescript, category: 'backend' },
        { name: 'Express', icon: SiExpress, category: 'backend' },
        { name: 'Python', icon: SiPython, category: 'backend' },
        { name: 'Java', icon: FaJava, category: 'backend' },
        { name: 'MySQL', icon: SiMysql, category: 'database' },
        { name: 'Firebase', icon: SiFirebase, category: 'database' },
        { name: 'Docker', icon: SiDocker, category: 'devops' },
        { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
        { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
        { name: 'C++', icon: SiCplusplus, category: 'systems' },
        { name: 'C', icon: SiC, category: 'systems' },
        { name: 'Solidity', icon: SiSolidity, category: 'blockchain' },
        { name: 'OpenCV', icon: SiOpencv, category: 'ml' },
        { name: 'Arduino', icon: SiArduino, category: 'hardware' },
        { name: 'Raspberry Pi', icon: SiRaspberrypi, category: 'hardware' },
    ];

    const categories = ['backend', 'database', 'devops', 'frontend', 'systems', 'blockchain', 'ml', 'hardware'];

    return (
        <div className="p-8 font-mono ">
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 40 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="mb-6">
                        <span className="syntax-comment">{'// Technical Skills & Technologies'}</span>
                    </div>

                    {categories.map((category, catIdx) => {
                        const categorySkills = skills.filter(s => s.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <div key={category} className="mb-6">
                                <div className="mb-2">
                                    <span className="syntax-keyword">import</span>{' '}
                                    <span className="text-concrete">{'{ '}</span>
                                    {categorySkills.map((skill, idx) => (
                                        <span key={skill.name}>
                                            <span className="syntax-function">{skill.name.replace(/[.\s]/g, '')}</span>
                                            {idx < categorySkills.length - 1 && <span className="text-concrete">, </span>}
                                        </span>
                                    ))}
                                    <span className="text-concrete">{' }'}</span>
                                    <span className="syntax-keyword"> from</span>{' '}
                                    <span className="syntax-string">'{category}'</span>
                                    <span className="text-concrete">;</span>
                                </div>

                                <div className="ml-4 flex flex-wrap gap-3 mb-4">
                                    {categorySkills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-electric/10 border border-electric/20 rounded hover:bg-electric/20 transition-colors"
                                        >
                                            <skill.icon className="w-4 h-4 text-electric" />
                                            <span className="text-theme-fg text-xs">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-8 pt-4 border-t border-white/5">
                        <span className="syntax-keyword">export default</span>{' '}
                        <span className="text-concrete">{'{ '}</span>
                        {categories.map((cat, idx) => (
                            <span key={cat}>
                                <span className="syntax-variable">{cat}</span>
                                {idx < categories.length - 1 && <span className="text-concrete">, </span>}
                            </span>
                        ))}
                        <span className="text-concrete">{' };'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
