import { useEffect, useState } from "react";
import {

  X,
  Link2,
  Folder,
  Globe,
} from "lucide-react";
import { useFolders } from "../../../hooks/folderContext";

const ImportLinkModal = ({
  open,
  onClose,

  folders,

  onImport,
}) => {

  const [url, setUrl] = useState("");

  const [title, setTitle] = useState("");

  const [selectedFolder, setSelectedFolder] =
    useState("");
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

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <h2 className="flex items-center gap-3 text-2xl font-semibold">

            <Link2 className="text-violet-600" />

            Import Link

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

              Link

            </label>

            <div className="flex items-center rounded-xl border border-slate-200 px-4">

              <Globe
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="https://..."
                value={url}
                onChange={(e) =>
                  setUrl(e.target.value)
                }
                className="h-12 w-full px-3 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">

              Title (Optional)

            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Operating System Notes"
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
      onChange={(e) => setSelectedFolder(e.target.value)}
      className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
    >
      <option value="">Choose Folder</option>

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

        <div className="flex justify-end gap-4 border-t border-slate-200 px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >

            Cancel

          </button>

          <button
            onClick={handleImport}
            className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
          >

            Save Link

          </button>

        </div>

      </div>

    </div>

  );

};

export default ImportLinkModal;