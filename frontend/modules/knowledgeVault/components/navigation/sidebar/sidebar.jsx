import {
  FolderPlus,
  Folder,
  Share2,
  Star,
  Trash2,
  Activity,
  Settings,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useFolders } from "../../../hooks/folderContext";

const Sidebar = () => {
  const { folders, openCreateModal } = useFolders();

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <aside className="flex h-screen w-[300px] flex-col border-r border-slate-200 bg-white">
      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6">
        <h1 className="text-3xl font-bold text-violet-600">
          StudentOS
        </h1>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-5 py-6">
        <nav className="space-y-2">
          <SidebarLink
            to="/"
            label="My Library"
          />

          <SidebarLink
            to="/shared"
            icon={<Share2 size={18} />}
            label="Shared With Me"
          />

          <SidebarLink
            to="/favorites"
            icon={<Star size={18} />}
            label="Favorites"
          />

          <SidebarLink
            to="/trash"
            icon={<Trash2 size={18} />}
            label="Trash"
          />

          <SidebarLink
            to="/activity"
            icon={<Activity size={18} />}
            label="Activity"
          />

          <SidebarLink
            to="/settings"
            icon={<Settings size={18} />}
            label="Settings"
          />
        </nav>

        {/* Folder Section */}

        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Folders
            </p>

            <button
              onClick={openCreateModal}
              className="rounded-lg p-2 transition hover:bg-violet-50 hover:text-violet-600"
            >
              <FolderPlus size={18} />
            </button>
          </div>

          {folders.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center">
              <Folder
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-medium text-slate-700">
                No folders yet
              </h3>

              <button
                onClick={openCreateModal}
                className="mt-4 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
              >
                Create Folder
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {folders.map((folder) => {
                const isActive =
                  location.pathname === `/folder/${folder.id}`;

                return (
                  <button
                    key={folder.id}
                    onClick={() =>
                      navigate(`/folder/${folder.id}`)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                      isActive
                        ? "bg-violet-100 text-violet-700"
                        : "text-slate-700 hover:bg-violet-50"
                    }`}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: folder.color,
                      }}
                    />

                    <span className="truncate text-sm font-medium">
                      {folder.name}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

function SidebarLink({
  to,
  label,
  icon = <Folder size={18} />,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
          isActive
            ? "bg-violet-50 text-violet-600"
            : "text-slate-600 hover:bg-slate-100"
        }`
      }
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </NavLink>
  );
}

export default Sidebar;