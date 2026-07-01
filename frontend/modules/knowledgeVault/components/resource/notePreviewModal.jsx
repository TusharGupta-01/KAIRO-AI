// import { X, FileText } from "lucide-react";

// const NotePreviewModal = ({
//   open,
//   onClose,
//   note,
// }) => {
//   if (!open || !note) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

//       <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

//         {/* Header */}

//         <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

//           <div className="flex items-center gap-3">

//             <FileText className="text-violet-600" />

//             <h2 className="text-2xl font-semibold">
//               {note.name}
//             </h2>

//           </div>

//           <button
//             onClick={onClose}
//             className="rounded-xl p-2 hover:bg-slate-100"
//           >
//             <X size={22} />
//           </button>

//         </div>

//         {/* Content */}

//         <div className="max-h-[70vh] overflow-y-auto p-8">

//           <div className="whitespace-pre-wrap text-slate-700 leading-8">

//             {note.content}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default NotePreviewModal;
import { X, FileText } from "lucide-react";

const NotePreviewModal = ({
  open,
  onClose,
  note,
}) => {
  if (!open || !note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">

      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#111111] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-7 py-6">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-800">

              <FileText
                className="text-white"
                size={20}
              />

            </div>

            <div>

              <h2 className="text-xl font-semibold text-white">
                {note.name}
              </h2>

              <p className="text-sm text-zinc-500">
                Knowledge Vault Note
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

        {/* Content */}

        <div className="max-h-[70vh] overflow-y-auto p-7">

          <article
            className="
              whitespace-pre-wrap
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-6
              text-[15px]
              leading-8
              text-zinc-300
            "
          >
            {note.content}
          </article>

        </div>

      </div>

    </div>
  );
};

export default NotePreviewModal;