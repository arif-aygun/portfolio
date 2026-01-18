import { Github, Linkedin, Server, Coins, Rocket, ExternalLink } from 'lucide-react';
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
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white p-4 md:p-8 lg:p-12">
      {/* Top Navigation Bar */}
      <nav className="max-w-[1600px] mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Ahmet Arif Aygun
          </h1>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/electrogu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800/50 hover:border-zinc-700"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ahmetarifaygun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800/50 hover:border-zinc-700"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto">
        {/* Tech Stack Overview */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider">Backend</p>
                <div className="flex flex-wrap gap-2">
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
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider">Embedded</p>
                <div className="flex flex-wrap gap-2">
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
                <p className="text-sm text-zinc-500 mb-4 font-semibold uppercase tracking-wider">Blockchain</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Move</span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Sui</span>
                  <span className="px-3 py-1.5 bg-zinc-800/50 rounded-lg text-sm border border-zinc-700/30">Base</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Backend & Infrastructure Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Server className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Backend & Infrastructure</h2>
              <p className="text-zinc-400 mt-1">Production-ready APIs and Containerized Microservices</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://letmeclick.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300">LetMeClick</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Gamification platform with Discord bot, admin dashboard, and MySQL integration. Dockerized deployment with Nginx.</p>
              <div className="flex flex-wrap gap-2">
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
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300">Midnight Guardian</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Real-time window tracking with smart keyword filtering and progressive warnings. Web dashboard for monitoring and configuration.</p>
              <div className="flex flex-wrap gap-2">
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
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300">EYS - Inventory Management</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Comprehensive inventory management system with UML architecture, client interviews, and complete documentation.</p>
              <div className="flex flex-wrap gap-2">
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
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300">Logistic Route Optimizer</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">TSP solver using Floyd-Warshall metric closure and greedy nearest neighbor heuristic with interactive visualization.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">JavaScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">HTML5</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Canvas API</span>
              </div>
            </a>
          </div>
        </section>

        {/* Web3 Development Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-violet-500/10 rounded-xl">
              <Coins className="w-8 h-8 text-violet-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Web3 Development</h2>
              <p className="text-zinc-400 mt-1">Smart contract development on Sui Network</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://letmeclick.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-violet-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-violet-400 group-hover:text-violet-300">LetMeClick NFT Implementation</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">On-chain achievement system with Move smart contracts. Automated badge minting and player progression tracking.</p>
              <div className="flex flex-wrap gap-2">
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
                <h3 className="text-xl font-semibold text-violet-400 group-hover:text-violet-300">Base Genius</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Weekly quiz mini-app for Base blockchain and Farcaster. Perfect scorers mint collectible NFT badges as proof of knowledge.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">TypeScript</span>
                <span className="px-2 py-1 bg-zinc-800/30 rounded text-xs text-zinc-500 border border-zinc-800/20">Base</span>
              </div>
            </a>
          </div>
        </section>

        {/* UAV Systems Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-sky-500/10 rounded-xl">
              <Rocket className="w-8 h-8 text-sky-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">UAV Systems</h2>
              <p className="text-zinc-400 mt-1">Embedded systems and autonomous flight control</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/GTU-Kuzgun/kuzgun_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/30 rounded-xl p-6 hover:border-sky-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-sky-400 group-hover:text-sky-300">Kuzgun 2025 - Payload Drop System</h3>
                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-sky-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-zinc-400 mb-4 leading-relaxed">Computer vision payload drop system with real-time shape detection, color-based targeting, and physics-based drop calculations.</p>
              <div className="flex flex-wrap gap-2">
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
    </main>
  );
}