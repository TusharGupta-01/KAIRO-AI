import { X } from "lucide-react";

const folderColors = [
  "#7C3AED",
  "#2563EB",
  "#059669",
  "#EA580C",
  "#DC2626",
  "#DB2777",
];

const CreateFolderModal = ({
  open,
  onClose,
  folderName,
  setFolderName,
  description,
  setDescription,
  selectedColor,
  setSelectedColor,
  onCreate,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">

          <h2 className="text-2xl font-semibold">

            Create Folder

          </h2>

          <button onClick={onClose}>

            <X size={22} />

          </button>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          <div>

            <label className="mb-2 block text-sm font-medium">

              Folder Name

            </label>

            <input
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Algorithms"
              className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">

              Description

            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Semester 3 DSA Notes..."
              rows={3}
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-violet-500 resize-none"
            />

          </div>

          <div>

            <label className="mb-3 block text-sm font-medium">

              Folder Color

            </label>

            <div className="flex gap-3">

              {folderColors.map((color) => (

                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-10 w-10 rounded-full border-4 ${
                    selectedColor === color
                      ? "border-gray-800"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />

              ))}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >

            Cancel

          </button>

          <button
            onClick={onCreate}
            className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
          >

            Create Folder

          </button>

        </div>

      </div>

    </div>
  );
};

export default CreateFolderModal;