// import {
//   FolderPlus,
//   Upload,
//   Link2,
//   FileText,
//   Star,
//   Trash2,
//   Activity as ActivityIcon,
// } from "lucide-react";

// import EmptyState from "../../components/feedback/emptyResourceState";
// import { useFolders } from "../../hooks/folderContext";

// const Activity = () => {
//   const { activities } = useFolders();

//   const getIcon = (text) => {
//     if (text.includes("Created folder"))
//       return <FolderPlus size={20} className="text-violet-600" />;

//     if (text.includes("Uploaded"))
//       return <Upload size={20} className="text-blue-600" />;

//     if (text.includes("Saved link"))
//       return <Link2 size={20} className="text-sky-600" />;

//     if (text.includes("Created note"))
//       return <FileText size={20} className="text-violet-600" />;

//     if (text.includes("Favorites"))
//       return <Star size={20} className="text-yellow-500" />;

//     if (text.includes("Deleted"))
//       return <Trash2 size={20} className="text-red-500" />;

//     return <ActivityIcon size={20} className="text-slate-500" />;
//   };

//   if (activities.length === 0) {
//     return (
//       <div className="mx-auto max-w-5xl">

//         <h1 className="text-3xl font-bold text-slate-900">
//           Activity
//         </h1>

//         <p className="mt-2 mb-8 text-slate-500">
//           Recent actions inside your Knowledge Vault.
//         </p>

//         <EmptyState
//           icon={ActivityIcon}
//           title="No activity yet"
//           description="Your uploads, folders, notes and favorites will appear here."
//         />

//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-5xl">

//       <div className="mb-8">

//         <h1 className="text-3xl font-bold">
//           Activity
//         </h1>

//         <p className="mt-2 text-slate-500">
//           Everything you've done inside your Knowledge Vault.
//         </p>

//       </div>

//       <div className="space-y-4">

//         {activities.map((activity) => (

//           <div
//             key={activity.id}
//             className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
//           >

//             <div className="rounded-2xl bg-slate-100 p-3">

//               {getIcon(activity.text)}

//             </div>

//             <div className="flex-1">

//               <p className="font-semibold text-slate-800">

//                 {activity.text}

//               </p>

//               <p className="mt-2 text-sm text-slate-500">

//                 {new Date(activity.createdAt).toLocaleString()}

//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Activity;
import {
  FolderPlus,
  Upload,
  Link2,
  FileText,
  Star,
  Trash2,
  Activity as ActivityIcon,
} from "lucide-react";

import EmptyState from "../../components/feedback/emptyResourceState";
import { useFolders } from "../../hooks/folderContext";

const Activity = () => {
  const { activities } = useFolders();

  const getIcon = (text) => {
    if (text.includes("Created folder"))
      return <FolderPlus size={20} className="text-violet-400" />;

    if (text.includes("Uploaded"))
      return <Upload size={20} className="text-sky-400" />;

    if (text.includes("Saved link"))
      return <Link2 size={20} className="text-blue-400" />;

    if (text.includes("Created note"))
      return <FileText size={20} className="text-emerald-400" />;

    if (text.includes("Favorites"))
      return <Star size={20} className="text-yellow-400" />;

    if (text.includes("Deleted"))
      return <Trash2 size={20} className="text-red-400" />;

    return <ActivityIcon size={20} className="text-zinc-400" />;
  };

  if (activities.length === 0) {
    return (
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Knowledge Vault
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Activity
          </h1>

          <p className="mt-3 text-zinc-400">
            Recent actions inside your Knowledge Vault.
          </p>
        </div>

        <EmptyState
          icon={ActivityIcon}
          title="No activity yet"
          description="Your uploads, folders, notes and favorites will appear here."
        />

      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">

      <div className="mb-8">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Knowledge Vault
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Activity
        </h1>

        <p className="mt-3 text-zinc-400">
          Everything you've done inside your Knowledge Vault.
        </p>

      </div>

      <div className="space-y-4">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="
              flex
              items-start
              gap-5
              rounded-3xl
              border
              border-zinc-800
              bg-[#1A1A1E]
              p-6
              transition
              hover:border-zinc-700
              hover:bg-zinc-900
            "
          >

            <div className="rounded-2xl bg-zinc-800 p-3">
              {getIcon(activity.text)}
            </div>

            <div className="flex-1">

              <p className="font-semibold text-white">
                {activity.text}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {new Date(activity.createdAt).toLocaleString()}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Activity;