// import {
//   FolderPlus,
//   Folder,
//   Share2,
//   Star,
//   Trash2,
//   Activity,
//   Settings,
// } from "lucide-react";

// import { NavLink, useNavigate, useLocation } from "react-router-dom";

// import { useFolders } from "../../../hooks/folderContext";

// const Sidebar = () => {
//   const { folders, openCreateModal } = useFolders();

//   const navigate = useNavigate();

//   const location = useLocation();

//   return (
//     <aside className="flex h-full w-72 shrink-0 flex-col border-r border-zinc-800 bg-[#111111]">
//       {/* Logo */}

//       <div className="border-b border-zinc-800 px-7 py-7">
//         <h1 className="text-3xl font-black tracking-tight text-white">
//           KAIRO
//           <span className="ml-1 text-zinc-500">Vault</span>
//         </h1>

//         <p className="mt-1 text-sm text-zinc-500">Knowledge Workspace</p>
//       </div>

//       {/* Navigation */}

//       <div className="flex-1 overflow-y-auto px-4 py-5">
//         <nav className="space-y-2">
//           <SidebarLink to="/vault" label="My Library" />

//           <SidebarLink
//             to="/vault/shared"
//             icon={<Share2 size={18} />}
//             label="Shared With Me"
//           />

//           <SidebarLink
//             to="/vault/favorites"
//             icon={<Star size={18} />}
//             label="Favorites"
//           />

//           <SidebarLink
//             to="/vault/trash"
//             icon={<Trash2 size={18} />}
//             label="Trash"
//           />

//           <SidebarLink
//             to="/vault/activity"
//             icon={<Activity size={18} />}
//             label="Activity"
//           />

//           <SidebarLink
//             to="/vault/settings"
//             icon={<Settings size={18} />}
//             label="Settings"
//           />
//         </nav>

//         {/* Folder Section */}

//         <div className="mt-10">
//           <div className="mb-4 flex items-center justify-between">
//             <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
//               Folders
//             </p>

//             <button
//               onClick={openCreateModal}
//               className="
// rounded-xl
// p-2
// text-zinc-500
// transition
// hover:bg-zinc-800
// hover:text-white
// "
//             >
//               <FolderPlus size={18} />
//             </button>
//           </div>

//           {folders.length === 0 ? (
//             <div
//               className="rounded-2xl
// border
// border-dashed
// border-zinc-800
// bg-zinc-900/40 p-6 text-center"
//             >
//               <Folder size={40} className="mx-auto text-zinc-600" />

//               <h3 className="mt-4 font-medium text-zinc-300">No folders yet</h3>

//               <button
//                 onClick={openCreateModal}
//                 className="mt-4 rounded-xl px-4 py-2 text-sm font-medium bg-white
// text-black
// hover:bg-zinc-200"
//               >
//                 Create Folder
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-2">
//               {folders.map((folder) => {
//                 const isActive = location.pathname === `/folder/${folder.id}`;

//                 return (
//                   <button
//                     key={folder.id}
//                     // onClick={() => navigate(`/folder/${folder.id}`)}
//                     onClick={() => navigate(`/vault/folder/${folder.id}`)}
//                     className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
//                       isActive
//                         ? "bg-zinc-800 text-white"
//                         : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//                     }`}
//                   >
//                     <div
//                       className="h-3 w-3 rounded-full"
//                       style={{
//                         backgroundColor: folder.color,
//                       }}
//                     />

//                     <span className="truncate text-sm font-medium ">
//                       {folder.name}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// };

// function SidebarLink({ to, label, icon = <Folder size={18} /> }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center gap-3 rounded-xl px-3 py-3 transition ${
//           isActive
//             ? "bg-zinc-800 text-white"
//             : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//         }`
//       }
//     >
//       {icon}

//       <span className="font-semibold">{label}</span>
//     </NavLink>
//   );
// }

// export default Sidebar;

//KnowledgeVaultLayout.jsx
{/* <div className="flex h-screen w-full bg-[#0F0F12]">
  <Sidebar />

  <div className="flex flex-1 flex-col overflow-hidden"></div> */}

// topbar
import {
  FolderPlus,
  Folder,
  Share2,
  Star,
  Trash2,
  Activity,
  Settings,
} from "lucide-react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useFolders } from "../../../hooks/folderContext";

const Sidebar = () => {
  const { folders, openCreateModal } = useFolders();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full border-b border-zinc-800 bg-[#111111]">
      {/* Navigation */}

      <div className="flex items-center justify-between px-6 py-4">
        <nav className="flex items-center gap-2 overflow-x-auto">
          <SidebarLink to="/vault" label="My Library" />

          <SidebarLink
            to="/vault/shared"
            icon={<Share2 size={16} />}
            label="Shared"
          />

          <SidebarLink
            to="/vault/favorites"
            icon={<Star size={16} />}
            label="Favorites"
          />

          <SidebarLink
            to="/vault/trash"
            icon={<Trash2 size={16} />}
            label="Trash"
          />

          <SidebarLink
            to="/vault/activity"
            icon={<Activity size={16} />}
            label="Activity"
          />

          <SidebarLink
            to="/vault/settings"
            icon={<Settings size={16} />}
            label="Settings"
          />
        </nav>

        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          <FolderPlus size={16} />
          New Folder
        </button>
      </div>

      {/* Folder Pills */}

      {folders.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto border-t border-zinc-800 px-6 py-3">
          {folders.map((folder) => {
            const isActive =
              location.pathname === `/vault/folder/${folder.id}`;

            return (
              <button
                key={folder.id}
                onClick={() =>
                  navigate(`/vault/folder/${folder.id}`)
                }
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: folder.color,
                  }}
                />

                {folder.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

function SidebarLink({
  to,
  label,
  icon = <Folder size={16} />,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
          isActive
            ? "bg-white text-black"
            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}

export default Sidebar;