'use client';

import { StickerCanvas } from './StickerCanvas';

interface LandingPageProps {
    onEnterIde: () => void;
}

export function LandingPage({ onEnterIde }: LandingPageProps) {
    return (
        <main className="h-screen w-full overflow-hidden bg-black">
            {/* 
                The StickerCanvas is now the main experience. 
                We might want to add a button in the ProfileStack to trigger 'onEnterIde' later 
                if we want to keep the IDE concept accessible.
             */}
            <StickerCanvas />

            {/* IDE mode hidden for now — uncomment when ready
            <button
                onClick={onEnterIde}
                className="fixed top-6 right-6 z-50 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-mono text-concrete transition-all hover:text-white"
            >
                CMD_MODE //
            </button>
            */}
        </main>
    );
}

