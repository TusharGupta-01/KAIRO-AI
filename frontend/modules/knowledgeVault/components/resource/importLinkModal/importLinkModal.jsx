// import { useEffect, useState } from "react";
// import {

//   X,
//   Link2,
//   Folder,
//   Globe,
// } from "lucide-react";
// import { useFolders } from "../../../hooks/folderContext";

// const ImportLinkModal = ({
//   open,
//   onClose,

//   folders,

//   onImport,
// }) => {

//   const [url, setUrl] = useState("");

//   const [title, setTitle] = useState("");

//   const [selectedFolder, setSelectedFolder] =
//     useState("");
//     const { activeFolderId } = useFolders();

// useEffect(() => {
//   if (open) {
//     if (activeFolderId) {
//       setSelectedFolder(activeFolderId.toString());
//     } else {
//       setSelectedFolder("");
//     }
//   }
// }, [open, activeFolderId]);

//   if (!open) return null;

//   const handleImport = () => {

//     if (!url.trim()) return;

//     if (!selectedFolder) return;

//     onImport({

//       title,

//       url,

//       folderId: Number(selectedFolder),

//     });

//     setUrl("");

//     setTitle("");

//     setSelectedFolder("");

//   };

//   return (

//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

//       <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

//         {/* Header */}

//         <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

//           <h2 className="flex items-center gap-3 text-2xl font-semibold">

//             <Link2 className="text-violet-600" />

//             Import Link

//           </h2>

//           <button
//             onClick={onClose}
//             className="rounded-xl p-2 hover:bg-slate-100"
//           >

//             <X size={22} />

//           </button>

//         </div>

//         {/* Body */}

//         <div className="space-y-6 p-8">

//           <div>

//             <label className="mb-2 block text-sm font-medium">

//               Link

//             </label>

//             <div className="flex items-center rounded-xl border border-slate-200 px-4">

//               <Globe
//                 size={18}
//                 className="text-slate-400"
//               />

//               <input
//                 type="text"
//                 placeholder="https://..."
//                 value={url}
//                 onChange={(e) =>
//                   setUrl(e.target.value)
//                 }
//                 className="h-12 w-full px-3 outline-none"
//               />

//             </div>

//           </div>

//           <div>

//             <label className="mb-2 block text-sm font-medium">

//               Title (Optional)

//             </label>

//             <input
//               type="text"
//               value={title}
//               onChange={(e) =>
//                 setTitle(e.target.value)
//               }
//               placeholder="Operating System Notes"
//               className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
//             />

//           </div>

//           {!activeFolderId && (
//   <div>
//     <label className="mb-2 flex items-center gap-2 text-sm font-medium">
//       <Folder size={18} />
//       Select Folder
//     </label>

//     <select
//       value={selectedFolder}
//       onChange={(e) => setSelectedFolder(e.target.value)}
//       className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
//     >
//       <option value="">Choose Folder</option>

//       {folders.map((folder) => (
//         <option
//           key={folder.id}
//           value={folder.id}
//         >
//           {folder.name}
//         </option>
//       ))}
//     </select>
//   </div>
// )}

//         </div>

//         {/* Footer */}

//         <div className="flex justify-end gap-4 border-t border-slate-200 px-8 py-6">

//           <button
//             onClick={onClose}
//             className="rounded-xl border px-6 py-3"
//           >

//             Cancel

//           </button>

//           <button
//             onClick={handleImport}
//             className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
//           >

//             Save Link

//           </button>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default ImportLinkModal;
import { useEffect, useState } from "react";
import { X, Link2, Folder, Globe } from "lucide-react";
import { useFolders } from "../../../hooks/folderContext";

const ImportLinkModal = ({
  open,
  onClose,
  folders,
  onImport,
}) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");

  const { activeFolderId } = useFolders();

  useEffect(() => {
    if (open) {
      if (activeFolderId) {
        setSelectedFolder(activeFolderId.toString());
      } else {
        setSelectedFolder("");
      }
    }
  }, [open, activeFolderId]);

  if (!open) return null;

  const handleImport = () => {
    if (!url.trim()) return;
    if (!selectedFolder) return;

    onImport({
      title,
      url,
      folderId: Number(selectedFolder),
    });

    setUrl("");
    setTitle("");
    setSelectedFolder("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">

      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-[#111111] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-7 py-6">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-800">
              <Link2 className="text-white" size={20} />
            </div>

            <div>

              <h2 className="text-xl font-semibold text-white">
                Import Link
              </h2>

              <p className="text-sm text-zinc-500">
                Save useful resources to your vault
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-6 p-7">

          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Link
            </label>

            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 px-4">

              <Globe
                size={18}
                className="text-zinc-500"
              />

              <input
                type="text"
                placeholder="https://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="
                  h-12
                  w-full
                  bg-transparent
                  px-3
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                "
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Title (Optional)
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Operating System Notes"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900
                px-4
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-white
              "
            />

          </div>

          {!activeFolderId && (

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">

                <Folder size={18} />

                Select Folder

              </label>

              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-zinc-700
                  bg-zinc-900
                  px-4
                  text-white
                  outline-none
                  transition
                  focus:border-white
                "
              >

                <option value="">
                  Choose Folder
                </option>

                {folders.map((folder) => (
                  <option
                    key={folder.id}
                    value={folder.id}
                  >
                    {folder.name}
                  </option>
                ))}

              </select>

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-zinc-800 px-7 py-5">

          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              border-zinc-700
              bg-zinc-800
              px-5
              py-3
              text-sm
              font-medium
              text-zinc-300
              transition
              hover:bg-zinc-700
              hover:text-white
            "
          >
            Cancel
          </button>

          <button
            onClick={handleImport}
            className="
              rounded-xl
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-zinc-200
            "
          >
            Save Link
          </button>

        </div>

      </div>

    </div>
  );
};

export default ImportLinkModal;