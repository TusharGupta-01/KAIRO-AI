import {
  Search,
  Bell,
  SunMoon,
  CircleUserRound,
} from "lucide-react";

import { useFolders } from "../../../hooks/folderContext";

const Navbar = () => {
  const {
    searchQuery,
    setSearchQuery,
  } = useFolders();

  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-sm">
      <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition-all duration-200 focus-within:border-purple-300 focus-within:bg-white">

        <Search
          className="h-[18px] w-[18px] text-slate-400"
          strokeWidth={2}
        />

        <input
          type="text"
          placeholder="Search your Knowledge Vault..."
          value={searchQuery}
          onChange={(e) =>
            setSearchQuery(e.target.value)
          }
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />

      </div>

      <div className="flex items-center gap-3">

        <button
          type="button"
          aria-label="Notifications"
          className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-500 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
        >
          <Bell
            className="h-5 w-5"
            strokeWidth={2}
          />
        </button>

        <button
          type="button"
          aria-label="Toggle theme"
          className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-500 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
        >
          <SunMoon
            className="h-5 w-5"
            strokeWidth={2}
          />
        </button>

        <button
          type="button"
          aria-label="Profile"
          className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-500 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
        >
          <CircleUserRound
            className="h-5 w-5"
            strokeWidth={2}
          />
        </button>

      </div>
    </header>
  );
};

export default Navbar;