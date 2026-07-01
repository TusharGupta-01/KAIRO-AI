import { X, FileText } from "lucide-react";

const NotePreviewModal = ({
  open,
  onClose,
  note,
}) => {
  if (!open || !note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <div className="flex items-center gap-3">

            <FileText className="text-violet-600" />

            <h2 className="text-2xl font-semibold">
              {note.name}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Content */}

        <div className="max-h-[70vh] overflow-y-auto p-8">

          <div className="whitespace-pre-wrap text-slate-700 leading-8">

            {note.content}

          </div>

        </div>

      </div>

    </div>
  );
};

export default NotePreviewModal;