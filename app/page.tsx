import { Github, Linkedin, Server, Coins, Rocket, ExternalLink, Terminal, Layers, ArrowDown } from 'lucide-react';
import {
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPython,
  SiOpencv,
  SiArduino,
  SiRaspberrypi,
  SiApachemaven,
  SiFirebase,
  SiDiscord,
  SiTelegram,
  SiCplusplus,
  SiJavascript,
  SiC
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white py-6 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-mono font-bold text-zinc-400">~/portfolio</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/arif-aygun"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-medium text-zinc-400 hover:text-white transition-colors"
            >
              ~/github
            </a>
            <a
              href="https://linkedin.com/in/ahmetarifaygun"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-medium text-zinc-400 hover:text-white transition-colors"
            >
              ~/linkedin
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono mb-6 pb-2 leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Ahmet Arif Aygun
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
            Computer Engineering student and passionate learner. Specializing in backend infrastructure and decentralized applications, while contributing to autonomous UAV systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="mailto:araygun48@gmail.com"
              className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 font-semibold rounded-full hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Tech Stack Overview - Revised for Game Dev Context */}
        <section className="mb-24">
          <div>
            <h2 className="text-3xl font-bold font-mono text-zinc-100">~/tech-stack</h2>
            <p className="text-zinc-400 mt-1 font-mono">Engineering capabilities & Tools</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-2xl p-4 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">

              {/* 1. KUTU: Languages */}
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Languages</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <FaJava className="w-4 h-4 text-orange-500" />
                    Java
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiC className="w-4 h-4 text-blue-500" />
                    C
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiCplusplus className="w-4 h-4 text-blue-500" />
                    C++
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiPython className="w-4 h-4 text-yellow-400" />
                    Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiTypescript className="w-4 h-4 text-blue-500" />
                    TypeScript
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiJavascript className="w-4 h-4 text-yellow-300" />
                    JavaScript
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">SQL</span>
                </div>
              </div>

              {/* 2. KUTU: Backend & Cloud */}
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Backend & Cloud</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiNodedotjs className="w-4 h-4 text-green-500" />
                    Node.js
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiExpress className="w-4 h-4" />
                    Express
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiFirebase className="w-4 h-4 text-yellow-500" />
                    Firebase
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiMysql className="w-4 h-4 text-blue-400" />
                    MySQL
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Docker</span>
                </div>
              </div>

              {/* 3. KUTU: Libraries & Tools */}
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Libraries & Tools</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiOpencv className="w-4 h-4 text-red-500" />
                    OpenCV
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiApachemaven className="w-4 h-4 text-red-500" />
                    Maven
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiArduino className="w-4 h-4 text-teal-400" />
                    Arduino
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiRaspberrypi className="w-4 h-4 text-red-600" />
                    Raspberry Pi
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiDiscord className="w-4 h-4 text-indigo-400" />
                    Discord.js
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiTelegram className="w-4 h-4 text-blue-400" />
                    Telegraf
                  </span>
                </div>
              </div>

              {/* 4. KUTU: Concepts */}
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Concepts</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    Object-Oriented Programming
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    SOLID Principles
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    Design Patterns
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    Algorithms & Data Structures
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Arrow Down */}
        <div className="flex justify-center mb-24 text-zinc-600">
          <ArrowDown className="w-10 h-10 animate-bounce" />
        </div>

        {/* Selected Work Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-mono text-emerald-400">~/selected-work</h2>
            <p className="text-zinc-400 mt-1 font-mono">Interactive Systems & Algorithmic Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* 1. PROJE: Algoritma Yeteneği */}
            <a
              href="https://github.com/arif-aygun/Logistic-Route-Optimizer"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">TSP Solver (Visualization)</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Interactive tool solving the Traveling Salesman Problem using Graph Theory and Nearest Neighbor logic. Visualizes algorithmic efficiency in real-time.
              </p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Algorithms</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Canvas API</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Optimization</span>
              </div>
            </a>

            {/* 2. PROJE: Full Stack Platform */}
            <a
              href="https://letmeclick.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">LetMeClick</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Full-stack gamification platform managing user progression and rewards. High-availability architecture built with microservices.
              </p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Full Stack</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">TypeScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Docker</span>
              </div>
            </a>

            {/* 3. PROJE: CV & Embedded */}
            <a
              href="https://github.com/GTU-Kuzgun/kuzgun_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">Autonomous Payload System</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Real-time object detection and trajectory calculation system for autonomous UAV operations. Integration of embedded systems and computer vision.
              </p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Computer Vision</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Python</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Embedded</span>
              </div>
            </a>

            {/* 4. PROJE: Web3 Application */}
            <a
              href="https://github.com/arif-aygun/base-genius"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">Base Genius Quiz</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Interactive quiz application on Base blockchain. Features secure on-chain scoring logic and NFT minting functionality.
              </p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">dApp</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Smart Contracts</span>
              </div>
            </a>

            {/* 5. Midnight Guardian */}
            <a
              href="https://github.com/arif-aygun/midnight-guardian"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">Midnight Guardian</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Real-time window tracking with smart keyword filtering and progressive warnings. Web dashboard for monitoring and configuration.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Node.js</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Python</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Windows API</span>
              </div>
            </a>

            {/* 6. EYS - Inventory Management */}
            <a
              href="https://github.com/arif-aygun/EYS"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">Enterprise Inventory System (OOP)</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Designed with strict <strong>Object-Oriented Analysis (OOAD)</strong>. Utilizes <strong>Inheritance</strong> for item categorization and <strong>Interfaces</strong> for database abstraction. Fully documented with UML class diagrams.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Java (OOP)</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Design Patterns</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">UML Architecture</span>
              </div>
            </a>

            {/* 7. MES-Chatbot */}
            <a
              href="https://github.com/arif-aygun/MES-Chatbot-public"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">MES-Chatbot</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Telegram bot integration with Express server, Firebase Firestore, and automated notification scheduling using node-schedule.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Node.js</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Express</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Firebase</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Telegraf</span>
              </div>
            </a>

            {/* 8. CharityZone */}
            <a
              href="https://github.com/arif-aygun/CharityZone"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">CharityZone</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Discord bot for searching and learning about charity organizations with slash commands, maintenance mode, and comprehensive logging.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Node.js</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Discord.js</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">JavaScript</span>
              </div>
            </a>

          </div>
        </section>
      </div>
      <footer className="mt-32 pb-12 text-center">
        <p className="font-mono text-zinc-600 text-sm">
          Designed & Built by <span className="text-zinc-400">Arif</span> & <span className="text-zinc-400">AI</span>
        </p>
        <p className="font-mono text-zinc-700 text-xs mt-2">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}