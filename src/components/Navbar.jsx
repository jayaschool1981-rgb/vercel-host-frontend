import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-xl font-extrabold tracking-tight">
            Vercal_Host
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600 hover:text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600 hover:text-black"
            }
          >
            Pricing
          </NavLink>

          <button className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90">
            Deploy Site
          </button>
        </div>
      </div>
    </nav>
  );
}
