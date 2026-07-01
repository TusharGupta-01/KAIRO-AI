  import {
    LayoutDashboard,
    MessageCircle,
    User,
    BookOpen,
    Map,
  } from "lucide-react";

  import { NavLink } from "react-router-dom";

  function Sidebar() {
    const navItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Roadmap",
        path: "/roadmap",
        icon: Map,
      },
      {
        name: "AI Mentor",
        path: "/mentor",
        icon: MessageCircle,
      },
      {
        name: "Knowledge Vault",
        path: "/vault",
        icon: BookOpen,
      },
      {
        name: "Profile",
        path: "/profile",
        icon: User,
      },
    ];

    return (
      <aside
        className="
      hidden
      lg:flex
      lg:w-64
      xl:w-72
      shrink-0
      flex-col
      border-r
      border-zinc-800
      bg-[#111111]
    "
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-zinc-800">
          <h1 className="text-3xl font-black tracking-tight text-white">
            KAIRO
            <span className="text-zinc-500"> AI</span>
          </h1>

          <p className="mt-1 text-xs text-zinc-500">Career Operating System</p>
        </div>

        {/* Navigation */}

        <nav className="flex flex-1 flex-col space-y-2 px-4 py-5">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4
                  rounded-xl px-4 py-3.5
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-zinc-800 border border-zinc-700 text-white shadow-sm"
                      : "text-zinc-400 hover:bg-zinc-900/70 hover:text-white"
                  }
                `
                }
              >
                <Icon size={20} />

                <span className="font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}

        <div className="border-t border-zinc-800 p-5">
          <div className="rounded-2xl bg-zinc-900 p-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-700 font-semibold">
              TG
            </div>

            <div>
              <p className="font-medium text-white">Tushar Gupta</p>

              <p className="text-sm text-zinc-500">AI Engineer</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-zinc-600">
          KAIRO AI • v1.0
        </p>
      </aside>
    );
  }

  export default Sidebar;
