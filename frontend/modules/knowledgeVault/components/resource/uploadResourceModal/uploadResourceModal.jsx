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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <h2 className="text-2xl font-semibold">
            Upload Resource
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-7 p-8">

          {/* Hidden Input */}

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
              border-violet-300
              bg-violet-50
              px-8
              py-14
              transition
              hover:bg-violet-100
            "
          >

            <UploadCloud
              size={46}
              className="mb-4 text-violet-600"
            />

            <h3 className="text-lg font-semibold">
              Drag & Drop or Browse Files
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              PDF • DOCX • PPT • Images
            </p>

          </button>

          {/* Folder Selector */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium">

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
                border-slate-200
                px-4
                outline-none
                focus:border-violet-500
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

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <FileText
                size={30}
                className="text-violet-600"
              />

              <div>

                <h4 className="font-medium">

                  {selectedFile.name}

                </h4>

                <p className="text-sm text-slate-500">

                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

                </p>

              </div>

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
            onClick={onUpload}
            className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
          >

            Upload Resource

          </button>

        </div>

      </div>

    </div>
  );
};

export default UploadResourceModal;