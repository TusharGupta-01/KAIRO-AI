import { useEffect, useState } from "react";
import {
  X,
  FileText,
  Folder,
} from "lucide-react";

import { useFolders } from "../../../hooks/folderContext";

const CreateNoteModal = ({
  open,
  onClose,
  folders,
  onCreate,
}) => {
  const { activeFolderId } = useFolders();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [selectedFolder, setSelectedFolder] =
    useState("");

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

  const handleCreate = () => {
    if (!title.trim()) return;

    if (!selectedFolder) return;

    onCreate({
      title,
      content,
      folderId: Number(selectedFolder),
    });

    setTitle("");

    setContent("");

    setSelectedFolder("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <h2 className="flex items-center gap-3 text-2xl font-semibold">

            <FileText className="text-violet-600" />

            Create Note

          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Note Title
            </label>

            <input
              type="text"
              placeholder="Operating System Notes"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

          </div>

          {!activeFolderId && (

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <Folder size={18} />

                Select Folder

              </label>

              <select
                value={selectedFolder}
                onChange={(e) =>
                  setSelectedFolder(e.target.value)
                }
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
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

          <div>

            <label className="mb-2 block text-sm font-medium">
              Note Content
            </label>

            <textarea
              rows={10}
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              placeholder="Write your notes here..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-violet-500"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t border-slate-200 px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
          >
            Save Note
          </button>

        </div>

      </div>

    </div>
  );
};

export default CreateNoteModal;