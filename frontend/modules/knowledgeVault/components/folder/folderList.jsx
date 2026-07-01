// import { Folder } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const FolderList = ({ folders }) => {
//   const navigate = useNavigate();

//   if (folders.length === 0) return null;

//   return (
//     <section className="mt-10">
//       {/* Header */}

//       <div className="mb-6 flex items-center justify-between">
//         <h2 className="text-2xl font-semibold text-slate-900">
//           Your Folders
//         </h2>

//         <p className="text-sm text-slate-500">
//           {folders.length} Folder{folders.length > 1 ? "s" : ""}
//         </p>
//       </div>

//       {/* Folder Grid */}

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {folders.map((folder) => (
//           <div
//             key={folder.id}
//             onClick={() => navigate(`folder/${folder.id}`)}
//             className="
//               cursor-pointer
//               rounded-2xl
//               border
//               border-slate-200
//               bg-white
//               p-6
//               shadow-sm
//               transition-all
//               duration-200
//               hover:-translate-y-1
//               hover:border-violet-300
//               hover:shadow-lg
//             "
//           >
//             <div
//               className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
//               style={{
//                 backgroundColor: `${folder.color}20`,
//               }}
//             >
//               <Folder
//                 size={28}
//                 color={folder.color}
//               />
//             </div>

//             <h3 className="text-lg font-semibold text-slate-900">
//               {folder.name}
//             </h3>

//             <p className="mt-2 text-sm text-slate-500">
//               {folder.description || "No description"}
//             </p>

//             <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
//               <span className="text-xs text-slate-400">
//                 {folder.resources?.length || 0} Resources
//               </span>

//               <span className="text-xs font-medium text-violet-600">
//                 Open →
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FolderList;
import { Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FolderList = ({ folders }) => {
  const navigate = useNavigate();

  if (folders.length === 0) return null;

  return (
    <section className="mt-10">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Your Folders
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Organize your learning resources
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-400">
          {folders.length} Folder{folders.length > 1 ? "s" : ""}
        </div>

      </div>

      {/* Folder Grid */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {folders.map((folder) => (

          <div
            key={folder.id}
            onClick={() => navigate(`folder/${folder.id}`)}
            className="
              group
              cursor-pointer
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900
              p-6
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-zinc-700
              hover:bg-zinc-800
            "
          >

            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `${folder.color}20`,
              }}
            >
              <Folder
                size={28}
                color={folder.color}
              />
            </div>

            <h3 className="text-lg font-semibold text-white">
              {folder.name}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
              {folder.description || "No description"}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">

              <span className="text-xs text-zinc-500">
                {folder.resources?.length || 0} Resources
              </span>

              <span className="text-sm font-semibold text-white transition group-hover:translate-x-1">
                Open →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FolderList;