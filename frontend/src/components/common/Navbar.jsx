import { Menu, Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageInfo = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Your personalized AI career overview",
    },
    "/mentor": {
      title: "AI Mentor",
      subtitle: "Ask anything about your roadmap",
    },
    "/roadmap": {
      title: "Roadmap",
      subtitle: "Your AI Engineer learning journey",
    },
    "/vault": {
      title: "Knowledge Vault",
      subtitle: "Everything you've learned",
    },
    "/profile": {
      title: "Profile",
      subtitle: "Manage your information",
    },
  };

  const current = pageInfo[location.pathname] ?? pageInfo["/dashboard"];
  return (
    <header
      className="
    sticky
    top-0
    z-40
    flex
    h-16
    items-center
    justify-between
    border-b
    border-zinc-800
    bg-black/70
backdrop-blur-xl
supports-[backdrop-filter]:bg-black/60
    backdrop-blur-lg

    px-4
    sm:px-6
    lg:px-8
    xl:px-10
  "
    >
      {/* Left */}

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile Menu */}

        <button
          className="
            rounded-xl
            p-2
            text-zinc-400
            hover:bg-zinc-900
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-base font-semibold text-white md:text-lg">
            {current.title}
          </h2>
          <p className="hidden text-xs text-zinc-500 md:block lg:text-sm">
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          className="
            hidden
            rounded-xl
            p-2
            text-zinc-400
            transition
            hover:bg-zinc-900
            md:block
          "
        >
          <Bell size={20} />
        </button>

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-zinc-700
            font-semibold
            text-white
          "
        >
          TG
        </div>
      </div>
    </header>
  );
}

export default Navbar;
