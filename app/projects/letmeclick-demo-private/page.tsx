import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LetMeClick - Private Demo',
  description: 'Private project showcase for CV.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LetMeClickPrivateDemo() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-16 px-6 md:px-12 font-inter text-gray-900" style={{ backgroundColor: '#F9F9F9' }}>
      <header className="mb-12 w-full max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-gray-900">LetMeClick</h1>
        <p className="text-gray-500 text-sm md:text-base tracking-wide">Private Project Showcase</p>
      </header>

      <section className="w-full max-w-4xl aspect-video rounded-lg border border-gray-300 shadow-sm overflow-hidden mb-16">
        <iframe
          src="https://www.youtube.com/embed/V-w-0lag23w"
          title="LetMeClick Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </section>

      <section className="w-full max-w-4xl space-y-10 text-left">
        <div className="border-b border-gray-200 pb-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Technical Overview</h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
            LetMeClick (Sui Clicker Arcade) is a comprehensive arcade platform built on the Sui Blockchain, featuring a high-performance monorepo architecture. It prioritizes frictionless onboarding by abstracting blockchain complexities, allowing users to play and earn without traditional wallet management via Sui's zkLogin and sponsored transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
            <h3 className="text-lg font-semibold text-gray-900">Backend Architecture</h3>
            <p>
              A robust <span className="font-medium text-gray-900">Node.js + Express</span> API server written in TypeScript, structured to handle frequent heartbeat updates from active players.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">Stack:</span> Node.js v20, Express.js, Drizzle ORM with MySQL, @mysten/sui SDK, Enoki for managed zkLogin sessions.</li>
              <li><span className="font-medium text-gray-800">Heartbeat Mechanism:</span> A rate-limited loop that evaluates player XP and mission completion in real-time, reducing DB overhead via in-memory caching.</li>
              <li><span className="font-medium text-gray-800">In-Memory ConfigManager:</span> Game settings and mission rules cached in memory with auto-refresh, ensuring sub-50ms API response latencies.</li>
              <li><span className="font-medium text-gray-800">Monorepo Shared SDK:</span> A dedicated <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">@letmeclick/sdk</code> package provides unified TypeScript interfaces across frontend and backend, eliminating API drift.</li>
            </ul>
            <p className="text-gray-600 text-xs pt-1">
              API domains: <code className="bg-gray-100 px-1 py-0.5 rounded">/api/player</code> (gameplay loop, missions), <code className="bg-gray-100 px-1 py-0.5 rounded">/api/game</code> (arcade metadata), <code className="bg-gray-100 px-1 py-0.5 rounded">/api/admin</code> (protected config routes).
            </p>
          </div>

          <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
            <h3 className="text-lg font-semibold text-gray-900">Railway Deployment</h3>
            <p>
              Each component — Backend, Frontend, Discord Bot — is containerized using optimized <span className="font-medium text-gray-900">Dockerfiles</span>. Railway's Dockerfile Builder detects the monorepo structure and builds specific workspace targets.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-800">CI/CD:</span> Push-to-deploy via GitHub. Every commit to main triggers parallel builds of affected services with automated health checks before traffic is routed.</li>
              <li><span className="font-medium text-gray-800">Database Sync:</span> Schema updates managed via <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">pnpm db:push</code> for rapid iteration without complex migration tooling.</li>
              <li><span className="font-medium text-gray-800">Scalability:</span> Stateless API design allows horizontal scaling during peak Season events. Managed MySQL with automated backups handles persistent data growth.</li>
              <li><span className="font-medium text-gray-800">Service Discovery:</span> Frontend communicates with Backend via Railway's internal network. Sensitive credentials managed through Railway's centralized environment dashboard.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
