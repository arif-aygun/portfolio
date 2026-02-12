'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { DraggableSticker } from './DraggableSticker';
import { ProfileCard } from './ProfileStack';
import { projects } from '@/data/portfolio';

// Approximate sticker dimensions for collision detection
const STICKER_W = 240;
const STICKER_H = 120;
const COLLISION_PAD = 20; // extra breathing room between items

// Center profile card bounding box (vertical/phone shape)
const PROFILE_W = 300;
const PROFILE_H = 320;

interface Rect { x: number; y: number; w: number; h: number }

function rectsOverlap(a: Rect, b: Rect): boolean {
    return (
        a.x < b.x + b.w + COLLISION_PAD &&
        a.x + a.w + COLLISION_PAD > b.x &&
        a.y < b.y + b.h + COLLISION_PAD &&
        a.y + a.h + COLLISION_PAD > b.y
    );
}

// Generate positions with collision avoidance
function generateSlots(count: number) {
    const safeX = 170;
    const safeY = 190;
    const orbitX = 360;
    const orbitY = 280;
    const MAX_RETRIES = 50;

    // Reserve the center profile card area
    const placed: Rect[] = [{
        x: -PROFILE_W / 2, y: -PROFILE_H / 2,
        w: PROFILE_W, h: PROFILE_H
    }];

    const slots: { x: number; y: number; r: number }[] = [];

    for (let i = 0; i < count; i++) {
        const baseAngle = (i / count) * 2 * Math.PI - Math.PI * 0.75;
        let bestSlot = { x: 0, y: 0, r: 0 };
        let found = false;

        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
            // Jitter angle within the sector
            const angleJitter = (Math.random() - 0.5) * 0.5;
            const angle = baseAngle + angleJitter;

            // Vary distance, push further out on retries
            const tMin = 0.4 + (attempt / MAX_RETRIES) * 0.3;
            const t = tMin + Math.random() * (1 - tMin);
            const rx = safeX + (orbitX - safeX) * t;
            const ry = safeY + (orbitY - safeY) * t;

            const cx = Math.cos(angle) * rx;
            const cy = Math.sin(angle) * ry;

            // Sticker rect (top-left corner)
            const rect: Rect = {
                x: cx - STICKER_W / 2,
                y: cy - STICKER_H / 2,
                w: STICKER_W,
                h: STICKER_H
            };

            // Check overlap with all placed items
            const collides = placed.some(p => rectsOverlap(rect, p));

            if (!collides) {
                bestSlot = {
                    x: rect.x,
                    y: rect.y,
                    r: (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 5)
                };
                placed.push(rect);
                found = true;
                break;
            }
        }

        // Fallback: place at max orbit if all retries failed
        if (!found) {
            const angle = baseAngle;
            const cx = Math.cos(angle) * orbitX * 1.2;
            const cy = Math.sin(angle) * orbitY * 1.2;
            bestSlot = {
                x: cx - STICKER_W / 2,
                y: cy - STICKER_H / 2,
                r: (i % 2 === 0 ? -1 : 1) * 4
            };
            placed.push({
                x: cx - STICKER_W / 2,
                y: cy - STICKER_H / 2,
                w: STICKER_W,
                h: STICKER_H
            });
        }

        slots.push(bestSlot);
    }

    return slots;
}

// Mobile layout: vertical column centered below profile card
const MOBILE_GAP = 24;
function generateMobileSlots(count: number) {
    const slots: { x: number; y: number; r: number }[] = [];
    const startY = PROFILE_H / 2 + MOBILE_GAP + 110; // Increased space for larger, spaced-out label
    for (let i = 0; i < count; i++) {
        slots.push({
            x: -STICKER_W / 2,
            y: startY + i * (STICKER_H + MOBILE_GAP),
            r: (i % 2 === 0 ? -1 : 1) * (1 + Math.random() * 2),
        });
    }
    return slots;
}

export function StickerCanvas() {
    const [stickerZIndexes, setStickerZIndexes] = useState<number[]>(new Array(projects.length).fill(20));
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [slots, setSlots] = useState<{ x: number; y: number; r: number }[]>([]);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Canvas panning state
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const isPanning = useRef(false);
    const panStart = useRef({ x: 0, y: 0 });
    const panOrigin = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Generate slots based on correct viewport immediately
            setSlots(mobile ? generateMobileSlots(projects.length) : generateSlots(projects.length));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Recalculate slots if isMobile changes after initial mount
    useEffect(() => {
        if (!mounted) return;
        setSlots(isMobile ? generateMobileSlots(projects.length) : generateSlots(projects.length));
    }, [isMobile, mounted]);

    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        // Pan on any click that's NOT on a sticker or the profile card
        const target = e.target as HTMLElement;
        if (!target.closest('[data-interactive]')) {
            isPanning.current = true;
            setHasInteracted(true);
            panStart.current = { x: e.clientX, y: e.clientY };
            panOrigin.current = { ...pan };
            e.preventDefault();
        }
    }, [pan]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isPanning.current) return;
        const dx = e.clientX - panStart.current.x;
        const dy = e.clientY - panStart.current.y;
        setPan({
            x: panOrigin.current.x + dx,
            y: panOrigin.current.y + dy,
        });
    }, []);

    const handleMouseUp = useCallback(() => {
        isPanning.current = false;
    }, []);

    // Touch handlers for mobile panning
    const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-interactive]')) {
            isPanning.current = true;
            setHasInteracted(true);
            panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            panOrigin.current = { ...pan };
        }
    }, [pan]);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!isPanning.current) return;
        const dx = e.touches[0].clientX - panStart.current.x;
        const dy = e.touches[0].clientY - panStart.current.y;
        setPan({
            x: panOrigin.current.x + dx,
            y: panOrigin.current.y + dy,
        });
    }, []);

    const handleTouchEnd = useCallback(() => {
        isPanning.current = false;
    }, []);

    const bringToFront = (index: number) => {
        setStickerZIndexes(prev => {
            const next = [...prev];
            next[index] = Math.max(...next) + 1;
            return next;
        });
    };

    if (!mounted) {
        return (
            <div className="relative w-full h-[100dvh] overflow-hidden bg-[#050505]">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        backgroundPosition: '0px 0px',
                    }}
                />
            </div>
        );
    }

    return (
        <div
            className="relative w-full h-[100dvh] overflow-hidden bg-[#050505]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isPanning.current ? 'grabbing' : 'default', touchAction: 'none' }}
        >
            {/* Background Grid — moves with pan */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    backgroundPosition: `${pan.x}px ${pan.y}px`,
                }}
            />

            {/* Clickable background layer for panning */}
            <div className="absolute inset-0" data-canvas-bg="true" style={{ zIndex: 0 }} />

            {/* Single shared coordinate origin at center + pan offset */}
            <div
                className="absolute left-1/2 top-1/2"
                style={{
                    zIndex: 1,
                    transform: `translate(${pan.x}px, ${pan.y}px)`,
                }}
            >
                {/* Profile card — z-index 10, behind stickers (20+) */}
                <div style={{ transform: 'translate(-50%, -50%)', zIndex: 10, position: 'relative' }}>
                    <ProfileCard />
                </div>

                {/* Projects Identifier (Mobile Only) */}
                {isMobile && (
                    <div
                        className="absolute text-center pointer-events-none"
                        style={{
                            top: PROFILE_H / 2 + 90, // Closer to projects, further from profile
                            left: 0,
                            width: '100%',
                            zIndex: 5,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <div className="flex flex-col items-center gap-2 opacity-70">
                            <span className="font-mono text-xs text-concrete uppercase tracking-[0.3em]">
                                // Projects
                            </span>
                            <div className="w-px h-8 bg-gradient-to-b from-concrete/0 via-concrete/50 to-concrete/0" />
                        </div>
                    </div>
                )}

                {/* Stickers */}
                {projects.map((project, index) => {
                    const slot = slots[index];
                    if (!slot) return null; // Safety check

                    return (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                left: 0,
                                top: 0,
                                zIndex: stickerZIndexes[index],
                            }}
                        >
                            <DraggableSticker
                                project={project}
                                initialX={slot.x}
                                initialY={slot.y}
                                initialRotate={slot.r}
                                zIndex={stickerZIndexes[index]}
                                onFocus={() => bringToFront(index)}
                            />
                        </div>
                    );
                })}
            </div>

            <div
                className={`absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none transition-opacity duration-1000 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}
                style={{ zIndex: 5 }}
            >
                <div className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-white/5">
                    <p className="font-mono text-xs text-white/80 uppercase tracking-widest">
                        {isMobile ? 'Swipe to explore' : 'Click & drag to explore'}
                    </p>
                </div>
            </div>
        </div>
    );
}
