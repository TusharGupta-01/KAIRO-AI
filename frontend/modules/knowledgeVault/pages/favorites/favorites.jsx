// import { useState } from "react";
// import {
//   Star,
//   Eye,
//   FileText,
//   FileImage,
//   FileSpreadsheet,
//   FileArchive,
//   Link2,
//   Trash2,
// } from "lucide-react";

// import EmptyState from "../../components/feedback/emptyResourceState";
// import { useFolders } from "../../hooks/folderContext";
// import NotePreviewModal from "../../components/resource/notePreviewModal";
// const Favorites = () => {
//   const {
//     folders,
//     toggleFavorite,
//     deleteResource,
//   } = useFolders();

//   const [selectedNote, setSelectedNote] = useState(null);
// const [isPreviewOpen, setIsPreviewOpen] = useState(false);

//   const favoriteResources = folders.flatMap((folder) =>
//     folder.resources
//       .filter((resource) => resource.favorite)
//       .map((resource) => ({
//         ...resource,
//         folderId: folder.id,
//         folderName: folder.name,
//       }))
//   );

//   const getIcon = (type) => {
//     switch (type) {
//       case "pdf":
//       case "note":
//         return <FileText className="text-red-500" size={26} />;

//       case "doc":
//       case "docx":
//         return <FileText className="text-blue-500" size={26} />;

//       case "ppt":
//       case "pptx":
//         return <FileSpreadsheet className="text-orange-500" size={26} />;

//       case "jpg":
//       case "jpeg":
//       case "png":
//       case "gif":
//       case "webp":
//         return <FileImage className="text-green-500" size={26} />;

//       case "link":
//         return <Link2 className="text-sky-500" size={26} />;

//       default:
//         return <FileArchive className="text-violet-500" size={26} />;
//     }
//   };

//   const handlePreview = (resource) => {
//   if (resource.type === "note") {
//     setSelectedNote(resource);
//     setIsPreviewOpen(true);
//     return;
//   }

//   if (!resource.url) return;

//   window.open(resource.url, "_blank");
// };

//   if (favoriteResources.length === 0) {
//     return (
//       <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
//         <div>
//           <h1 className="text-2xl font-semibold">
//             Favorites
//           </h1>

//           <p className="text-slate-500">
//             Star a resource to pin it here.
//           </p>
//         </div>

//         <EmptyState
//           icon={Star}
//           title="No favorites yet."
//           description="Star a resource to see it here."
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">

//       <div>

//         <h1 className="text-3xl font-bold">
//           Favorites
//         </h1>

//         <p className="mt-2 text-slate-500">
//           Your starred study resources.
//         </p>

//       </div>

//       <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

//         {favoriteResources.map((resource) => (

//           <div
//             key={resource.id}
//             className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
//           >

//             <div className="mb-5 flex items-center justify-between">

//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">

//                 {getIcon(resource.type)}

//               </div>

//               <Star
//                 size={20}
//                 onClick={() =>
//                   toggleFavorite(resource.folderId, resource.id)
//                 }
//                 className="cursor-pointer fill-yellow-400 text-yellow-400"
//               />

//             </div>

//             <h3 className="truncate text-lg font-semibold">
//               {resource.name}
//             </h3>

//             <p className="mt-2 text-sm text-slate-500">
//               Folder: {resource.folderName}
//             </p>

//             <div className="mt-5 flex justify-between">

//               <button
//                 onClick={() => handlePreview(resource)}
//                 className="flex items-center gap-2 rounded-xl bg-violet-50 px-4 py-2 text-violet-600 hover:bg-violet-100"
//               >
//                 <Eye size={16} />
//                 Preview
//               </button>

//               <button
//                 onClick={() =>
//                   deleteResource(resource.folderId, resource.id)
//                 }
//                 className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100"
//               >
//                 <Trash2 size={16} />
//                 Delete
//               </button>

//             </div>

//           </div>

//         ))}

//       </div>
// <NotePreviewModal
//   open={isPreviewOpen}
//   onClose={() => {
//     setIsPreviewOpen(false);
//     setSelectedNote(null);
//   }}
//   note={selectedNote}
// />
//     </div>
//   );
// };

// export default Favorites;
import { useState } from "react";
import {
  Star,
  Eye,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileArchive,
  Link2,
  Trash2,
} from "lucide-react";

import EmptyState from "../../components/feedback/emptyResourceState";
import { useFolders } from "../../hooks/folderContext";
import NotePreviewModal from "../../components/resource/notePreviewModal";

const Favorites = () => {
  const {
    folders,
    toggleFavorite,
    deleteResource,
  } = useFolders();

  const [selectedNote, setSelectedNote] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const favoriteResources = folders.flatMap((folder) =>
    folder.resources
      .filter((resource) => resource.favorite)
      .map((resource) => ({
        ...resource,
        folderId: folder.id,
        folderName: folder.name,
      }))
  );

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
      case "note":
        return <FileText className="text-red-400" size={26} />;

      case "doc":
      case "docx":
        return <FileText className="text-blue-400" size={26} />;

      case "ppt":
      case "pptx":
        return <FileSpreadsheet className="text-orange-400" size={26} />;

      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        return <FileImage className="text-emerald-400" size={26} />;

      case "link":
        return <Link2 className="text-sky-400" size={26} />;

      default:
        return <FileArchive className="text-violet-400" size={26} />;
    }
  };

  const handlePreview = (resource) => {
    if (resource.type === "note") {
      setSelectedNote(resource);
      setIsPreviewOpen(true);
      return;
    }

    if (!resource.url) return;

    window.open(resource.url, "_blank");
  };

  if (favoriteResources.length === 0) {
    return (
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Knowledge Vault
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Favorites
          </h1>

          <p className="mt-3 text-zinc-400">
            Star important resources to access them quickly.
          </p>

        </div>

        <EmptyState
          icon={Star}
          title="No favorites yet"
          description="Star a resource to see it here."
        />

      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Knowledge Vault
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Favorites
        </h1>

        <p className="mt-3 text-zinc-400">
          Your starred study resources.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {favoriteResources.map((resource) => (

          <div
            key={resource.id}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-[#1A1A1E]
              p-6
              transition
              hover:-translate-y-1
              hover:border-zinc-700
            "
          >

            <div className="mb-6 flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800">
                {getIcon(resource.type)}
              </div>

              <Star
                size={20}
                onClick={() =>
                  toggleFavorite(resource.folderId, resource.id)
                }
                className="cursor-pointer fill-yellow-400 text-yellow-400 transition hover:scale-110"
              />

            </div>

            <h3 className="truncate text-lg font-semibold text-white">
              {resource.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {resource.folderName}
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => handlePreview(resource)}
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-xl
                  border
                  border-zinc-700
                  bg-zinc-800
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-zinc-700
                "
              >
                <Eye size={16} />
                Preview
              </button>

              <button
                onClick={() =>
                  deleteResource(resource.folderId, resource.id)
                }
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-xl
                  bg-red-500/10
                  py-2.5
                  text-sm
                  font-medium
                  text-red-400
                  transition
                  hover:bg-red-500/20
                "
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      <NotePreviewModal
        open={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setSelectedNote(null);
        }}
        note={selectedNote}
      />

    </div>
  );
};

export default Favorites;