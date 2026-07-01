import { useState } from "react";
import {
  Folder,
  Upload,
  Link2,
  FilePlus2,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileArchive,
  Star,
  Eye,
  Trash2,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useFolders } from "../../hooks/folderContext";

import NotePreviewModal from "../../components/resource/notePreviewModal";

const FolderPage = () => {
  const { folderId } = useParams();

  const {
    folders,
    openUploadModal,
    deleteResource,
    toggleFavorite,
    searchQuery,
    openImportLinkModal,
    openCreateNoteModal,
    openChatModal,
  } = useFolders();
  const folder = folders.find((item) => item.id.toString() === folderId);
  const [selectedNote, setSelectedNote] = useState(null);
  const getResourceIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText size={28} className="text-red-500" />;

      case "doc":
      case "docx":
        return <FileText size={28} className="text-blue-500" />;

      case "ppt":
      case "pptx":
        return <FileSpreadsheet size={28} className="text-orange-500" />;

      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        return <FileImage size={28} className="text-green-500" />;

      case "note":
        return <FileText size={28} className="text-violet-500" />;

      case "link":
        return <Link2 size={28} className="text-blue-500" />;

      default:
        return <FileArchive size={28} className="text-violet-500" />;
    }
  };

  const handlePreview = (resource) => {
    if (resource.type === "note") {
      setSelectedNote(resource);
      return;
    }

    if (!resource.url) {
      alert("Preview unavailable.");
      return;
    }

    window.open(resource.url, "_blank");
  };

  // --------------------------
  // Resource Search
  // --------------------------

  const filteredResources = folder
    ? folder.resources.filter((resource) =>
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  if (!folder) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-800">
          Folder not found
        </h2>

        <p className="mt-3 text-slate-500">
          The folder you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: `${folder.color}20`,
              }}
            >
              <Folder size={34} color={folder.color} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {folder.name}
              </h1>

              <p className="mt-2 text-slate-500">
                {folder.description || "No description"}
              </p>

              <div className="mt-4 flex gap-6 text-sm text-slate-500">
                <span>{folder.resources.length} Resources</span>

                <span>
                  Updated {new Date(folder.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={openUploadModal}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
          >
            <Upload size={18} />
            Upload Resource
          </button>
        </div>
      </div>

      {/* Quick Actions */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <button
          onClick={openUploadModal}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:border-violet-300 hover:shadow-md"
        >
          <Upload className="mb-4 text-violet-600" size={28} />

          <h3 className="font-semibold">Upload Resource</h3>

          <p className="mt-2 text-sm text-slate-500">PDF, PPT, DOCX, Images</p>
        </button>

        <button
          onClick={() => openImportLinkModal(folder.id)}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:border-violet-300 hover:shadow-md"
        >
          <Link2 className="mb-4 text-violet-600" size={28} />

          <h3 className="font-semibold">Import Link</h3>

          <p className="mt-2 text-sm text-slate-500">
            Save useful web resources.
          </p>
        </button>

        <button
          onClick={() => {
            openCreateNoteModal(folder.id);
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:border-violet-300 hover:shadow-md"
        >
          <FilePlus2 className="mb-4 text-violet-600" size={28} />

          <h3 className="font-semibold">Create Note</h3>

          <p className="mt-2 text-sm text-slate-500">
            Write your own study notes.
          </p>
        </button>
      </div>

      {/* Resources */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Resources</h2>

          <span className="text-sm text-slate-500">
            {filteredResources.length} Item
            {filteredResources.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredResources.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
            <Upload className="mx-auto mb-4 text-slate-300" size={46} />

            <h3 className="text-xl font-semibold text-slate-800">
              No Resources Yet
            </h3>

            <p className="mt-3 text-slate-500">
              Upload your first study material to this folder.
            </p>

            <button
              onClick={openUploadModal}
              className="mt-8 rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
            >
              Upload Resource
            </button>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:shadow-lg
                "
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    {getResourceIcon(resource.type)}
                  </div>

                  <Star
                    size={18}
                    onClick={() => toggleFavorite(folder.id, resource.id)}
                    className={`cursor-pointer transition ${
                      resource.favorite
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300 hover:text-yellow-500"
                    }`}
                  />
                </div>

                <h3 className="truncate text-lg font-semibold text-slate-900">
                  {resource.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {resource.type === "note"
                    ? "Study Note"
                    : resource.type === "link"
                      ? "Web Link"
                      : `${(resource.size / 1024 / 1024).toFixed(2)} MB`}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {new Date(resource.uploadedAt).toLocaleDateString()}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase text-violet-700">
                    {resource.type}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(resource)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-violet-600 transition hover:bg-violet-50"
                    >
                      <Eye size={16} />
                      Preview
                    </button>

                    <button
                      onClick={() => deleteResource(folder.id, resource.id)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NotePreviewModal
        open={selectedNote !== null}
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />
    </div>
  );
};

export default FolderPage;
