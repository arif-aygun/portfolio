import { Github, Linkedin, ExternalLink, Zap, Trophy, Rocket, Star } from 'lucide-react';
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
    <main className="min-h-screen relative z-10 py-8 px-4 md:px-8">
      {/* Retro Header */}
      <nav className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 border-4 border-neon-cyan p-4 bg-pixel-purple/30">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-neon-yellow animate-pulse" />
            <span className="text-xs sm:text-sm text-neon-pink">PORTFOLIO.EXE</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs">
            <a
              href="https://github.com/arif-aygun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-yellow transition-colors retro-btn px-3 py-2 border-2 border-current"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/ahmetarifaygun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:text-neon-yellow transition-colors retro-btn px-3 py-2 border-2 border-current"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* HERO SECTION - Arcade Style */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center mb-20 relative">
          {/* Decorative pixels */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-neon-pink"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-neon-cyan"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-neon-yellow"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-neon-green"></div>

          <div className="mb-8 text-neon-yellow text-xs sm:text-sm animate-pulse">
            ▲ PLAYER 1 READY ▲
          </div>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 neon-text text-neon-pink leading-relaxed px-4">
            AHMET ARIF<br />AYGUN
          </h1>

          <div className="border-4 border-neon-cyan bg-pixel-purple/50 p-6 mb-10 max-w-2xl">
            <p className="text-[10px] sm:text-xs md:text-sm text-neon-cyan leading-relaxed">
              &gt; COMPUTER ENGINEERING STUDENT<br />
              &gt; BACKEND INFRASTRUCTURE SPECIALIST<br />
              &gt; UAV SYSTEMS CONTRIBUTOR<br />
              &gt; WEB3 DEVELOPER
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm">
            <a
              href="#projects"
              className="retro-btn px-6 py-3 bg-neon-pink text-pixel-black border-4 border-neon-pink hover:bg-neon-yellow hover:border-neon-yellow font-bold"
            >
              ► VIEW PROJECTS
            </a>
            <a
              href="mailto:araygun48@gmail.com"
              className="retro-btn px-6 py-3 bg-transparent text-neon-cyan border-4 border-neon-cyan hover:bg-neon-cyan hover:text-pixel-black font-bold"
            >
              ✉ CONTACT
            </a>
          </div>

          {/* Score display */}
          <div className="mt-12 flex gap-8 text-[10px] sm:text-xs">
            <div className="text-neon-yellow">
              SCORE: <span className="text-neon-pink">999999</span>
            </div>
            <div className="text-neon-green">
              LEVEL: <span className="text-neon-cyan">99</span>
            </div>
          </div>
        </section>

        {/* TECH STACK - Game HUD Style */}
        <section className="mb-20">
          <div className="border-4 border-neon-green bg-pixel-gray/50 p-1 mb-4 inline-block">
            <h2 className="text-sm sm:text-lg text-neon-green px-4 py-2">
              ≡ TECH INVENTORY ≡
            </h2>
          </div>

          <div className="border-4 border-neon-cyan bg-pixel-purple/30 p-4 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

              {/* Languages */}
              <div className="border-2 border-neon-pink/50 p-4 bg-pixel-black/50">
                <p className="text-[10px] sm:text-xs text-neon-pink mb-4">
                  [LANGUAGES]
                </p>
                <div className="flex flex-wrap gap-2 text-[8px] sm:text-[10px]">
                  <span className="px-2 py-1 bg-neon-orange/20 border-2 border-neon-orange text-neon-orange">
                    JAVA
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    C
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    C++
                  </span>
                  <span className="px-2 py-1 bg-neon-yellow/20 border-2 border-neon-yellow text-neon-yellow">
                    PYTHON
                  </span>
                  <span className="px-2 py-1 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink">
                    TYPESCRIPT
                  </span>
                  <span className="px-2 py-1 bg-neon-yellow/20 border-2 border-neon-yellow text-neon-yellow">
                    JAVASCRIPT
                  </span>
                  <span className="px-2 py-1 bg-neon-green/20 border-2 border-neon-green text-neon-green">
                    SQL
                  </span>
                </div>
              </div>

              {/* Backend */}
              <div className="border-2 border-neon-cyan/50 p-4 bg-pixel-black/50">
                <p className="text-[10px] sm:text-xs text-neon-cyan mb-4">
                  [BACKEND+CLOUD]
                </p>
                <div className="flex flex-wrap gap-2 text-[8px] sm:text-[10px]">
                  <span className="px-2 py-1 bg-neon-green/20 border-2 border-neon-green text-neon-green">
                    NODE.JS
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    EXPRESS
                  </span>
                  <span className="px-2 py-1 bg-neon-yellow/20 border-2 border-neon-yellow text-neon-yellow">
                    FIREBASE
                  </span>
                  <span className="px-2 py-1 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink">
                    MYSQL
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    DOCKER
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="border-2 border-neon-yellow/50 p-4 bg-pixel-black/50">
                <p className="text-[10px] sm:text-xs text-neon-yellow mb-4">
                  [LIBRARIES+TOOLS]
                </p>
                <div className="flex flex-wrap gap-2 text-[8px] sm:text-[10px]">
                  <span className="px-2 py-1 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink">
                    OPENCV
                  </span>
                  <span className="px-2 py-1 bg-neon-orange/20 border-2 border-neon-orange text-neon-orange">
                    MAVEN
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    ARDUINO
                  </span>
                  <span className="px-2 py-1 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink">
                    RASPBERRY.PI
                  </span>
                  <span className="px-2 py-1 bg-neon-yellow/20 border-2 border-neon-yellow text-neon-yellow">
                    DISCORD.JS
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    TELEGRAF
                  </span>
                </div>
              </div>

              {/* Concepts */}
              <div className="border-2 border-neon-green/50 p-4 bg-pixel-black/50">
                <p className="text-[10px] sm:text-xs text-neon-green mb-4">
                  [CONCEPTS]
                </p>
                <div className="flex flex-wrap gap-2 text-[8px] sm:text-[10px]">
                  <span className="px-2 py-1 bg-neon-green/20 border-2 border-neon-green text-neon-green">
                    OOP
                  </span>
                  <span className="px-2 py-1 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink">
                    SOLID
                  </span>
                  <span className="px-2 py-1 bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan">
                    DESIGN.PATTERNS
                  </span>
                  <span className="px-2 py-1 bg-neon-yellow/20 border-2 border-neon-yellow text-neon-yellow">
                    ALGOS+DS
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Animated divider */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-2 text-neon-pink animate-pulse text-2xl">
            ▼ ▼ ▼
          </div>
        </div>

        {/* PROJECTS - Boss Battle Cards */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <div className="border-4 border-neon-pink bg-pixel-gray/50 p-1 mb-8 inline-block">
            <h2 className="text-sm sm:text-lg text-neon-pink px-4 py-2">
              ★ QUEST LOG ★
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {/* Project 1 */}
            <a
              href="https://github.com/arif-aygun/Logistic-Route-Optimizer"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-cyan bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-yellow hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-cyan group-hover:text-neon-yellow">
                    TSP.SOLVER
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-pink" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-cyan/80 mb-4 leading-relaxed">
                INTERACTIVE TRAVELING SALESMAN SOLVER. GRAPH THEORY + NEAREST NEIGHBOR. REAL-TIME VISUALIZATION.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">ALGORITHMS</span>
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">CANVAS.API</span>
                <span className="px-2 py-1 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow">OPTIMIZATION</span>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://letmeclick.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-pink bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-yellow hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-pink group-hover:text-neon-yellow">
                    LETMECLICK
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-pink/80 mb-4 leading-relaxed">
                FULL-STACK GAMIFICATION PLATFORM. USER PROGRESSION + REWARDS. MICROSERVICES ARCHITECTURE.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">FULLSTACK</span>
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">TYPESCRIPT</span>
                <span className="px-2 py-1 bg-neon-green/20 border border-neon-green text-neon-green">DOCKER</span>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://github.com/GTU-Kuzgun/kuzgun_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-green bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-yellow hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-green group-hover:text-neon-yellow">
                    UAV.PAYLOAD
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-pink" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-green/80 mb-4 leading-relaxed">
                AUTONOMOUS PAYLOAD SYSTEM. OBJECT DETECTION + TRAJECTORY CALC. EMBEDDED + CV INTEGRATION.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">COMP.VISION</span>
                <span className="px-2 py-1 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow">PYTHON</span>
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">EMBEDDED</span>
              </div>
            </a>

            {/* Project 4 */}
            <a
              href="https://github.com/arif-aygun/base-genius"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-yellow bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-pink hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-yellow group-hover:text-neon-pink">
                    BASE.GENIUS
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-green" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-yellow/80 mb-4 leading-relaxed">
                WEB3 QUIZ APP ON BASE BLOCKCHAIN. ON-CHAIN SCORING + NFT MINTING FUNCTIONALITY.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">DAPP</span>
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">SMART.CONTRACTS</span>
              </div>
            </a>

            {/* Project 5 */}
            <a
              href="https://github.com/arif-aygun/midnight-guardian"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-pink bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-green hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-pink group-hover:text-neon-green">
                    MIDNIGHT.GUARDIAN
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-pink/80 mb-4 leading-relaxed">
                REAL-TIME WINDOW TRACKER. KEYWORD FILTER + PROGRESSIVE WARNINGS. WEB DASHBOARD.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-green/20 border border-neon-green text-neon-green">NODE.JS</span>
                <span className="px-2 py-1 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow">PYTHON</span>
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">WIN.API</span>
              </div>
            </a>

            {/* Project 6 */}
            <a
              href="https://github.com/arif-aygun/EYS"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-cyan bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-pink hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-cyan group-hover:text-neon-pink">
                    INVENTORY.SYSTEM
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-pink" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-cyan/80 mb-4 leading-relaxed">
                ENTERPRISE OOP DESIGN. INHERITANCE + INTERFACES. FULL UML DOCUMENTATION.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-orange/20 border border-neon-orange text-neon-orange">JAVA.OOP</span>
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">PATTERNS</span>
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">UML</span>
              </div>
            </a>

            {/* Project 7 */}
            <a
              href="https://github.com/arif-aygun/MES-Chatbot-public"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-green bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-cyan hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-green group-hover:text-neon-cyan">
                    MES.CHATBOT
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-yellow" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-green/80 mb-4 leading-relaxed">
                TELEGRAM BOT + EXPRESS SERVER. FIREBASE FIRESTORE. AUTO NOTIFICATIONS.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-green/20 border border-neon-green text-neon-green">NODE.JS</span>
                <span className="px-2 py-1 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow">FIREBASE</span>
                <span className="px-2 py-1 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan">TELEGRAF</span>
              </div>
            </a>

            {/* Project 8 */}
            <a
              href="https://github.com/arif-aygun/CharityZone"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-neon-yellow bg-pixel-purple/30 p-4 sm:p-6 hover:border-neon-green hover:bg-pixel-purple/50 transition-all group retro-btn"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-neon-yellow" />
                  <h3 className="text-xs sm:text-sm text-neon-yellow group-hover:text-neon-green">
                    CHARITYZONE
                  </h3>
                </div>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-neon-pink" />
              </div>
              <p className="text-[10px] sm:text-xs text-neon-yellow/80 mb-4 leading-relaxed">
                DISCORD BOT FOR CHARITY SEARCH. SLASH COMMANDS. MAINTENANCE MODE + LOGGING.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-[8px] sm:text-[10px]">
                <span className="px-2 py-1 bg-neon-green/20 border border-neon-green text-neon-green">NODE.JS</span>
                <span className="px-2 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink">DISCORD.JS</span>
                <span className="px-2 py-1 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow">JAVASCRIPT</span>
              </div>
            </a>

          </div>
        </section>
      </div>

      {/* FOOTER - Game Over Style */}
      <footer className="mt-32 pb-12 text-center border-t-4 border-neon-pink pt-8">
        <div className="text-neon-yellow text-xs sm:text-sm mb-4 animate-pulse">
          ★ GAME COMPLETE ★
        </div>
        <p className="text-[10px] sm:text-xs text-neon-cyan mb-2">
          DESIGNED+BUILT.BY <span className="text-neon-pink">ARIF</span> & <span className="text-neon-yellow">AI</span>
        </p>
        <p className="text-[8px] sm:text-[10px] text-neon-green">
          © {new Date().getFullYear()} - INSERT.COIN.TO.CONTINUE
        </p>
      </footer>
    </main>
  );
}