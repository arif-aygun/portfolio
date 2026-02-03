'use client';

export function AboutContent() {
    const profile = {
        name: "Arif Aygün",
        role: "Full-Stack Developer",
        location: "Turkey",
        email: "contact@example.com", // Update with real email
        interests: ["Web Development", "Systems Programming", "Open Source", "UI/UX"]
    };

    return (
        <div className="p-8 font-mono ">
            <div className="flex gap-6">
                <div className="text-concrete/30 select-none text-right" style={{ minWidth: '2.5rem' }}>
                    {Array.from({ length: 45 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="mb-6">
                        <span className="syntax-comment">{'// About Me - Software Engineer & Developer'}</span>
                    </div>

                    <div className="mb-6">
                        <span className="syntax-keyword">import</span>{' '}
                        <span className="syntax-function">{'{ Developer }'}</span>{' '}
                        <span className="syntax-keyword">from</span>{' '}
                        <span className="syntax-variable">'@/portfolio'</span>
                        <span className="text-concrete">;</span>
                    </div>

                    <div className="mb-4">
                        <span style={{ color: 'var(--theme-keyword)' }}>interface</span>{' '}
                        <span style={{ color: 'var(--theme-type)' }}>Profile</span>{' '}
                        <span className="text-concrete">{'{'}</span>
                    </div>

                    <div className="ml-4 mb-4">
                        <div className="mb-1">
                            <span style={{ color: 'var(--theme-variable)' }}>name</span>
                            <span className="text-concrete">: </span>
                            <span style={{ color: 'var(--theme-type)' }}>string</span>
                            <span className="text-concrete">;</span>
                        </div>
                        <div className="mb-1">
                            <span style={{ color: 'var(--theme-variable)' }}>role</span>
                            <span className="text-concrete">: </span>
                            <span style={{ color: 'var(--theme-type)' }}>string</span>
                            <span className="text-concrete">;</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">skills</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-type">string[]</span>
                            <span className="text-concrete">;</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">passion</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-type">string</span>
                            <span className="text-concrete">;</span>
                        </div>
                    </div>

                    <div className="mb-6 text-concrete">{'}'}</div>

                    <div className="mb-4">
                        <span className="syntax-keyword">const</span>{' '}
                        <span className="syntax-function">me</span>
                        <span className="text-concrete">: </span>
                        <span className="syntax-type">Profile</span>
                        <span className="text-concrete"> = {'{'}</span>
                    </div>

                    <div className="ml-4 mb-4">
                        <div className="mb-1">
                            <span className="syntax-variable">name</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"{profile.name}"</span>
                            <span className="text-concrete">,</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">role</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"{profile.role}"</span>
                            <span className="text-concrete">,</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">skills</span>
                            <span className="text-concrete">: [</span>
                        </div>
                        <div className="ml-4 mb-1">
                            <span className="syntax-string">"TypeScript"</span>
                            <span className="text-concrete">, </span>
                            <span className="syntax-string">"React"</span>
                            <span className="text-concrete">, </span>
                            <span className="syntax-string">"Node.js"</span>
                            <span className="text-concrete">,</span>
                        </div>
                        <div className="ml-4 mb-1">
                            <span className="syntax-string">"Python"</span>
                            <span className="text-concrete">, </span>
                            <span className="syntax-string">"Docker"</span>
                            <span className="text-concrete">, </span>
                            <span className="syntax-string">"OpenCV"</span>
                        </div>
                        <div className="mb-1">
                            <span className="text-concrete">],</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">passion</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"Building impactful software"</span>
                            <span className="text-concrete">,</span>
                        </div>
                    </div>

                    <div className="mb-6 text-concrete">{'},'}</div>

                    <div className="mb-4">
                        <span className="syntax-comment">{'// Current Focus'}</span>
                    </div>

                    <div className="mb-4">
                        <span className="syntax-keyword">const</span>{' '}
                        <span className="syntax-function">currentlyWorkingOn</span>{' '}
                        <span className="text-concrete">= {'{'}</span>
                    </div>

                    <div className="ml-4 mb-4">
                        <div className="mb-1">
                            <span className="syntax-variable">learning</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"Advanced system design patterns"</span>
                            <span className="text-concrete">,</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">building</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"Full-stack applications with modern tech"</span>
                            <span className="text-concrete">,</span>
                        </div>
                        <div className="mb-1">
                            <span className="syntax-variable">exploring</span>
                            <span className="text-concrete">: </span>
                            <span className="syntax-string">"Computer vision & robotics"</span>
                            <span className="text-concrete">,</span>
                        </div>
                    </div>

                    <div className="mb-6 text-concrete">{'},'}</div>

                    <div className="mb-4">
                        <span className="syntax-keyword">export default</span>{' '}
                        <span className="syntax-function">me</span>
                        <span className="text-concrete">;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

