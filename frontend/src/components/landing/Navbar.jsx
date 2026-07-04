import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link
          to="/"
          className="shrink-0 text-3xl font-black tracking-tight text-black"
        >
          KAIRO
          <span className="text-blue-600"> AI</span>
        </Link>

        {/* Desktop */}

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-zinc-300 p-2 md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-zinc-200 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-52" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 p-5">
          <Link
            to="/login"
            className="rounded-xl border border-zinc-300 py-3 text-center font-medium text-zinc-700"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-black py-3 text-center font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}