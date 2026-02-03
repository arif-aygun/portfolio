'use client';

import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';
import { ProjectDrawer } from '@/components/project-drawer';
import {
  SiNodedotjs, SiTypescript, SiExpress, SiMysql, SiPython,
  SiOpencv, SiArduino, SiRaspberrypi, SiFirebase, SiDocker,
  SiJavascript, SiCplusplus, SiC, SiTelegram, SiDiscord
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// --- Components ---

function KineticText({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function MagneticButton({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      ref={ref as any}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-concrete/30 bg-void/50 backdrop-blur-sm transition-all hover:bg-paper hover:text-void hover:border-electric hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] group cursor-pointer text-sm font-medium", className)}
    >
      {children}
    </Component>
  );
}

function ProjectListItem({ title, desc, tags, index, onClick }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onClick={onClick}
      className="group relative flex items-center gap-6 p-6 border border-electric/10 rounded-lg hover:border-electric/30 hover:bg-electric/5 transition-all cursor-pointer"
    >
      {/* Index */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-electric/20 flex items-center justify-center font-mono text-sm text-electric">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-space-grotesk font-bold mb-1 group-hover:text-electric transition-colors">
          {title}
        </h3>
        <p className="text-concrete text-sm line-clamp-1">{desc}</p>
      </div>

      {/* Tags Preview */}
      <div className="hidden md:flex gap-2 flex-shrink-0">
        {tags.slice(0, 2).map((tag: string) => (
          <span key={tag} className="px-2 py-1 text-xs bg-electric/10 rounded border border-electric/20 text-concrete">
            {tag}
          </span>
        ))}
        {tags.length > 2 && (
          <span className="px-2 py-1 text-xs text-concrete/50">
            +{tags.length - 2}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-electric/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-4 h-4 text-electric" />
      </div>
    </motion.div>
  );
}

function Marquee({ children, speed = 20 }: { children: React.ReactNode, speed?: number }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-6 border-y border-white/5">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: "-50%" }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function InteractiveOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate offset from center (reduced range for subtle effect)
        const offsetX = (e.clientX - centerX) * 0.15;
        const offsetY = (e.clientY - centerY) * 0.15;

        mouseX.set(offsetX);
        mouseY.set(offsetY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={orbRef} className="relative w-full h-full flex items-center justify-center">
      {/* Main Orb */}
      <motion.div
        style={{ x, y }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric via-acid to-electric rounded-full blur-3xl opacity-30 animate-pulse" />

        {/* Middle layer */}
        <div className="absolute inset-4 bg-gradient-to-br from-electric/50 to-acid/50 rounded-full blur-2xl" />

        {/* Core */}
        <div className="absolute inset-8 bg-gradient-to-br from-electric to-acid rounded-full backdrop-blur-sm border border-white/10" />

        {/* Highlight */}
        <div className="absolute top-12 left-12 w-16 h-16 bg-white/30 rounded-full blur-xl" />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        style={{ x: useTransform(x, (v) => v * -0.5), y: useTransform(y, (v) => v * -0.5) }}
        className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-acid/50 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        style={{ x: useTransform(x, (v) => v * -0.3), y: useTransform(y, (v) => v * 0.4) }}
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-electric/60 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        style={{ x: useTransform(x, (v) => v * 0.6), y: useTransform(y, (v) => v * -0.4) }}
        className="absolute top-1/3 left-1/2 w-2 h-2 bg-acid rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// --- Main Page ---

export default function Home() {
  const customCursorRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (customCursorRef.current) {
        customCursorRef.current.style.left = `${e.clientX}px`;
        customCursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const projects = [
    { title: "LetMeClick", desc: "Full-stack gamification platform with microservices architecture, Redis caching, and real-time leaderboards.", tags: ["TypeScript", "Docker", "Redis"], href: "https://letmeclick.io" },
    { title: "UAV Payload", desc: "Autonomous object detection & trajectory calculation system for competition UAVs using OpenCV.", tags: ["Python", "OpenCV", "ROS"], href: "https://github.com/GTU-Kuzgun/kuzgun_2025" },
    { title: "TSP Solver", desc: "Interactive visualization of Traveling Salesman Problem using genetic algorithms and Canvas API.", tags: ["JavaScript", "Algorithms"], href: "https://github.com/arif-aygun/Logistic-Route-Optimizer" },
    { title: "Base Genius", desc: "Decentralized quiz application on Base L2, featuring smart contract rewards and Web3 authentication.", tags: ["Solidity", "Web3", "Next.js"], href: "https://github.com/arif-aygun/base-genius" },
    { title: "Midnight Guardian", desc: "Real-time productivity tool with Windows API integration for activity tracking and focused work sessions.", tags: ["Node.js", "Electron", "WinAPI"], href: "https://github.com/arif-aygun/midnight-guardian" },
    { title: "Portfolio Archive", desc: "Collection of experimental web projects exploring creative code, generative art, and interactive experiences.", tags: ["Three.js", "GLSL", "Canvas"], href: "https://github.com/arif-aygun" },
  ];

  const techStack = [
    { name: "Backend", items: [SiNodedotjs, SiExpress, SiPython, FaJava] },
    { name: "Database", items: [SiMysql, SiFirebase] },
    { name: "DevOps", items: [SiDocker, SiTypescript] },
    { name: "Hardware", items: [SiArduino, SiRaspberrypi, SiOpencv] },
  ];

  return (
    <main className="min-h-screen bg-void selection:bg-acid selection:text-void">
      <div ref={customCursorRef} className="custom-cursor fixed top-0 left-0 w-4 h-4 rounded-full bg-paper mix-blend-difference pointer-events-none z-[9999] hidden md:block" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-electric/10 bg-void/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-syne font-bold text-lg tracking-tight">ARIF AYGUN</span>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm font-medium">
              <a href="#work" className="hover:text-electric transition-colors">WORK</a>
              <a href="#about" className="hover:text-electric transition-colors">ABOUT</a>
              <a href="mailto:araygun48@gmail.com" className="hover:text-electric transition-colors">CONTACT</a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-electric/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-paper" />
              ) : (
                <Moon className="w-5 h-5 text-paper" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 md:px-12 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="max-w-full">
              <div className="mb-4 overflow-visible">
                <KineticText className="text-fluid-h1 font-bold leading-none tracking-tighter block">
                  ARIF
                </KineticText>
                <KineticText delay={0.1} className="text-fluid-h1 font-bold leading-none tracking-tighter block">
                  AYGUN
                </KineticText>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-base md:text-lg text-concrete leading-relaxed mb-8"
              >
                Computer Engineering student at GTU specializing in{' '}
                <span className="text-paper">Backend Infrastructure</span>,{' '}
                <span className="text-electric">Decentralized Systems</span>, and{' '}
                <span className="text-acid">Interactive Experiences</span>.
                Building scalable solutions with modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton href="#work">VIEW WORK</MagneticButton>
                <MagneticButton href="https://github.com/arif-aygun"><Github className="w-4 h-4" /></MagneticButton>
                <MagneticButton href="https://linkedin.com/in/ahmetarifaygun"><Linkedin className="w-4 h-4" /></MagneticButton>
                <MagneticButton href="mailto:araygun48@gmail.com"><Mail className="w-4 h-4" /></MagneticButton>
              </motion.div>
            </div>

            {/* Right: Interactive Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden md:block h-[500px]"
            >
              <InteractiveOrb />
            </motion.div>
          </div>


        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-electric/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-acid/5 rounded-full blur-[100px] -z-10" />
      </section>

      {/* Tech Stack Marquee */}
      <div className="border-y border-electric/10">
        <Marquee speed={25}>
          {[SiNodedotjs, SiTypescript, SiExpress, SiMysql, SiFirebase, SiDocker, FaJava, SiPython, SiOpencv, SiArduino, SiRaspberrypi, SiTelegram, SiDiscord].map((Icon, i) => (
            <Icon key={i} className="w-10 h-10 opacity-30 hover:opacity-70 transition-opacity" />
          ))}
          {[SiNodedotjs, SiTypescript, SiExpress, SiMysql, SiFirebase, SiDocker, FaJava, SiPython, SiOpencv, SiArduino, SiRaspberrypi, SiTelegram, SiDiscord].map((Icon, i) => (
            <Icon key={`d-${i}`} className="w-10 h-10 opacity-30 hover:opacity-70 transition-opacity" />
          ))}
        </Marquee>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6 leading-tight">
                Building for<br />the Future
              </h2>
              <p className="text-concrete leading-relaxed mb-4">
                I'm a Computer Engineering student passionate about creating robust, scalable systems.
                My work spans from low-level hardware integration to high-level distributed architectures.
              </p>
              <p className="text-concrete leading-relaxed">
                Currently exploring blockchain technologies, computer vision, and cloud-native applications
                while contributing to open-source projects and competitive programming.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((category, i) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-neutral-900/30 border border-electric/10 rounded-lg hover:border-electric/30 transition-colors"
                >
                  <h3 className="text-xs uppercase tracking-wider text-acid mb-3">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((Icon, j) => (
                      <Icon key={j} className="w-6 h-6 text-paper opacity-60 hover:opacity-100 transition-opacity" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-950/50 border-t border-electric/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-fluid-h2 font-space-grotesk font-bold mb-4">Selected Works</h2>
            <p className="text-concrete max-w-xl">
              Click any project to view details
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((p, i) => (
              <ProjectListItem
                key={i}
                {...p}
                index={i}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 border-t border-electric/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-syne font-bold mb-4">Let's Connect</h3>
              <p className="text-concrete mb-6">
                Open to freelance opportunities, collaborations, and interesting conversations about technology.
              </p>
              <a
                href="mailto:araygun48@gmail.com"
                className="text-xl hover:text-acid transition-colors border-b border-white/20 pb-1 inline-block"
              >
                araygun48@gmail.com
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-3 mb-6">
                <MagneticButton href="https://github.com/arif-aygun">GitHub</MagneticButton>
                <MagneticButton href="https://linkedin.com/in/ahmetarifaygun">LinkedIn</MagneticButton>
              </div>
              <div className="text-xs text-concrete/50">
                <p>© 2026 Arif Aygun</p>
                <p className="mt-1">Designed & Built with Motion</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Drawer */}
      <ProjectDrawer
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </main>
  );
}
