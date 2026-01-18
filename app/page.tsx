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
  SiApachemaven
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white py-6 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-mono font-bold text-zinc-400">~/portfolio</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/electrogu"
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
        <section className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 pb-2 leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Ahmet Arif Aygun
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
            Computer Engineering student and passionate learner. Specializing in backend infrastructure and decentralized applications, while contributing to autonomous UAV systems.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="mailto:araygun48@gmail.com"
              className="px-8 py-3 bg-zinc-900 border border-zinc-800 font-semibold rounded-full hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Tech Stack Overview */}
        <section className="mb-24">
          <div>
            <h2 className="text-3xl font-bold font-mono text-zinc-100">~/tech-stack</h2>
            <p className="text-zinc-400 mt-1 font-mono">Core technologies & tools</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Backend</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiNodedotjs className="w-4 h-4 text-green-500" />
                    Node.js
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <FaJava className="w-4 h-4 text-orange-500" />
                    Java
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiTypescript className="w-4 h-4 text-blue-500" />
                    TypeScript
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiExpress className="w-4 h-4" />
                    Express
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiApachemaven className="w-4 h-4 text-red-500" />
                    Maven
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiMysql className="w-4 h-4 text-blue-400" />
                    MySQL
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Embedded</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiPython className="w-4 h-4 text-yellow-400" />
                    Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiOpencv className="w-4 h-4 text-red-500" />
                    OpenCV
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">DroneKit</span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiArduino className="w-4 h-4 text-teal-400" />
                    Arduino
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">
                    <SiRaspberrypi className="w-4 h-4 text-red-600" />
                    Raspberry Pi
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider font-mono">Blockchain</p>
                <div className="flex flex-wrap gap-2 font-mono">
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Move</span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Sui</span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Base</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Down */}
        <div className="flex justify-center mb-24 text-zinc-600">
          <ArrowDown className="w-10 h-10 animate-bounce" />
        </div>

        {/* Backend & Infrastructure Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-mono text-emerald-400">~/backend</h2>
            <p className="text-zinc-400 mt-1 font-mono">Production-ready APIs and Containerized Microservices</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
              <p className="text-zinc-400 mb-4 leading-relaxed">Gamification platform with Discord bot, admin dashboard, and MySQL integration. Dockerized deployment with Nginx.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Node.js</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">TypeScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">MySQL</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Docker</span>
              </div>
            </a>

            <a
              href="https://github.com/electrogu/midnight-guardian"
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

            <a
              href="https://github.com/electrogu/EYS"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">EYS - Inventory Management</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Comprehensive inventory management system with UML architecture, client interviews, and complete documentation.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Java</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Maven</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">UML</span>
              </div>
            </a>

            <a
              href="https://github.com/electrogu/Logistic-Route-Optimizer"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 font-mono">Logistic Route Optimizer</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">TSP solver using Floyd-Warshall metric closure and greedy nearest neighbor heuristic with interactive visualization.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">JavaScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">HTML5</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Canvas API</span>
              </div>
            </a>
          </div>
        </section>

        {/* Web3 Development Section */}
        <section className="mb-24">
          <div>
            <h2 className="text-3xl font-bold font-mono text-violet-400">~/web3</h2>
            <p className="text-zinc-400 mt-1 font-mono">Smart contract development on Sui Network</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://letmeclick.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-violet-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-violet-400 group-hover:text-violet-300 font-mono">LetMeClick NFT Implementation</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">On-chain achievement system with Move smart contracts. Automated badge minting and player progression tracking.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Move</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Sui SDK</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">TypeScript</span>
              </div>
            </a>

            <a
              href="https://github.com/electrogu/base-genius"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-violet-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-violet-400 group-hover:text-violet-300 font-mono">Base Genius</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Weekly quiz mini-app for Base blockchain and Farcaster. Perfect scorers mint collectible NFT badges as proof of knowledge.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">TypeScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Base</span>
              </div>
            </a>
          </div>
        </section>

        {/* UAV Systems Section */}
        <section className="mb-24">
          <div>
            <h2 className="text-3xl font-bold font-mono text-sky-400">~/uav-systems</h2>
            <p className="text-zinc-400 mt-1 font-mono">Embedded systems and autonomous flight control</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/GTU-Kuzgun/kuzgun_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-sky-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-sky-400 group-hover:text-sky-300 font-mono">Kuzgun 2025 - Payload Drop System</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-sky-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Computer vision payload drop system with real-time shape detection, color-based targeting, and physics-based drop calculations.</p>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Python</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">OpenCV</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">DroneKit</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Raspberry Pi</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">NumPy</span>
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