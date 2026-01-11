import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Brand Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          🚀 Vercel_Host
        </h1>

        {/* Tagline */}
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Frontend-only Hosting Platform for college projects, demos, and
          simulated cloud deployments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pricing"
            className="px-8 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
          >
            View Hosting Plans
          </Link>

          <Link
            to="/pricing"
            className="px-8 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Footer Hint */}
        <p className="mt-12 text-sm text-gray-400">
          ⚡ No backend • UI-based deployment simulation
        </p>
      </div>
    </section>
  );
}
