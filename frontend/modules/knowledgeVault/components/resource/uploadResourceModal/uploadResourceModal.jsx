// import { useRef } from "react";
// import {
//   X,
//   UploadCloud,
//   FileText,
//   Folder,
// } from "lucide-react";

// const UploadResourceModal = ({
//   open,
//   onClose,

//   folders,

//   selectedFolder,
//   setSelectedFolder,

//   selectedFile,
//   setSelectedFile,

//   onUpload,
// }) => {

//   const fileInputRef = useRef(null);

//   if (!open) return null;

//   const handleBrowse = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];

//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

//       <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

//         {/* Header */}

//         <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

//           <h2 className="text-2xl font-semibold">
//             Upload Resource
//           </h2>

//           <button
//             onClick={onClose}
//             className="rounded-xl p-2 hover:bg-slate-100"
//           >
//             <X size={22} />
//           </button>

//         </div>

//         {/* Body */}

//         <div className="space-y-7 p-8">

//           {/* Hidden Input */}

//           <input
//             ref={fileInputRef}
//             type="file"
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           {/* Upload Area */}

//           <button
//             type="button"
//             onClick={handleBrowse}
//             className="
//               flex
//               w-full
//               flex-col
//               items-center
//               justify-center
//               rounded-3xl
//               border-2
//               border-dashed
//               border-violet-300
//               bg-violet-50
//               px-8
//               py-14
//               transition
//               hover:bg-violet-100
//             "
//           >

//             <UploadCloud
//               size={46}
//               className="mb-4 text-violet-600"
//             />

//             <h3 className="text-lg font-semibold">
//               Drag & Drop or Browse Files
//             </h3>

//             <p className="mt-2 text-sm text-slate-500">
//               PDF • DOCX • PPT • Images
//             </p>

//           </button>

//           {/* Folder Selector */}

//           <div>

//             <label className="mb-2 flex items-center gap-2 text-sm font-medium">

//               <Folder size={18} />

//               Select Folder

//             </label>

//             <select
//               value={selectedFolder}
//               onChange={(e) =>
//                 setSelectedFolder(Number(e.target.value))
//               }
//               className="
//                 h-12
//                 w-full
//                 rounded-xl
//                 border
//                 border-slate-200
//                 px-4
//                 outline-none
//                 focus:border-violet-500
//               "
//             >

//               <option value="">

//                 Choose Folder

//               </option>

//               {folders.map((folder) => (

//                 <option
//                   key={folder.id}
//                   value={folder.id}
//                 >

//                   {folder.name}

//                 </option>

//               ))}

//             </select>

//           </div>

//           {/* Preview */}

//           {selectedFile && (

//             <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

//               <FileText
//                 size={30}
//                 className="text-violet-600"
//               />

//               <div>

//                 <h4 className="font-medium">

//                   {selectedFile.name}

//                 </h4>

//                 <p className="text-sm text-slate-500">

//                   {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

//                 </p>

//               </div>

//             </div>

//           )}

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
//             onClick={onUpload}
//             className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
//           >

//             Upload Resource

//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default UploadResourceModal;
import { useRef } from "react";
import {
  X,
  UploadCloud,
  FileText,
  Folder,
} from "lucide-react";

const UploadResourceModal = ({
  open,
  onClose,
  folders,
  selectedFolder,
  setSelectedFolder,
  selectedFile,
  setSelectedFile,
  onUpload,
}) => {
  const fileInputRef = useRef(null);

  if (!open) return null;

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">

      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-[#111111] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-7 py-6">

          <div>

            <h2 className="text-xl font-semibold text-white">
              Upload Resource
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Upload PDFs, Notes, Presentations & Images
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-7 p-7">

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Upload Area */}

          <button
            type="button"
            onClick={handleBrowse}
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              rounded-3xl
              border-2
              border-dashed
              border-zinc-700
              bg-zinc-900
              px-8
              py-14
              transition-all
              duration-200
              hover:border-white
              hover:bg-zinc-800
            "
          >

            <UploadCloud
              size={46}
              className="mb-4 text-white"
            />

            <h3 className="text-lg font-semibold text-white">
              Drag & Drop or Browse Files
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              PDF • DOCX • PPT • Images
            </p>

          </button>

          {/* Folder */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">

              <Folder size={18} />

              Select Folder

            </label>

            <select
              value={selectedFolder}
              onChange={(e) =>
                setSelectedFolder(Number(e.target.value))
              }
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

          {/* Preview */}

          {selectedFile && (

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">

                <FileText
                  size={22}
                  className="text-white"
                />

              </div>

              <div className="min-w-0 flex-1">

                <h4 className="truncate font-medium text-white">
                  {selectedFile.name}
                </h4>

                <p className="text-sm text-zinc-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>

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
            onClick={onUpload}
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
            Upload Resource
          </button>

        </div>

      </div>

    </div>
  );
};

export default UploadResourceModal;