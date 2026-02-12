'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LandingPage } from '@/components/landing/LandingPage';
import { IdeLayout } from '@/components/ide/IdeLayout';

export default function Home() {
  const [mode, setMode] = useState<'landing' | 'ide'>('landing');

  return (
    <div className="w-full bg-black text-white">
      <AnimatePresence mode="wait">
        {mode === 'landing' ? (
          <motion.div
            key="landing"
            className="w-full min-h-screen"
            exit={{ y: -1000, opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <LandingPage onEnterIde={() => setMode('ide')} />
          </motion.div>
        ) : (
          <motion.div
            key="ide"
            className="w-full h-screen fixed inset-0 z-50 overflow-hidden"
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <IdeLayout onExit={() => setMode('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
