import { useEffect, useState } from "react";
import {
  getResources,
  deleteResource,
  toggleFavorite,
} from "../../services/resource.service";
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
    searchQuery,
    openImportLinkModal,
    openCreateNoteModal,
    openChatModal,
  } = useFolders();
  const folder = folders.find(
    (item) => (item._id || item.id).toString() === folderId,
  );
  const [selectedNote, setSelectedNote] = useState(null);
  const [resources, setResources] = useState([]);
  useEffect(() => {
    loadResources();
  }, [folderId]);

  const loadResources = async () => {
    try {
      const data = await getResources(folderId);
      setResources(data);
    } catch (err) {
      console.error(err);
    }
  };
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
  // Notes
  if (resource.type === "note") {
    setSelectedNote(resource);
    return;
  }

  // External Links
  if (resource.type === "link") {
    window.open(resource.filePath, "_blank");
    return;
  }

  // Uploaded Files
  if (!resource.filePath) {
    alert("Preview unavailable.");
    return;
  }

  window.open(
    `http://localhost:5000${resource.filePath}`,
    "_blank"
  );
};

  const handleDelete = async (id) => {
    try {
      await deleteResource(id);

      setResources((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };
  const handleFavorite = async (id) => {
    try {
      const updated = await toggleFavorite(id);

      setResources((prev) =>
        prev.map((resource) => (resource._id === id ? updated : resource)),
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update favorite.");
    }
  };
  // --------------------------
  // Resource Search
  // --------------------------

  const filteredResources = resources.filter((resource) => {
    console.log("Searching:", searchQuery);
    console.log("Resource:", resource.name);

    return resource.name?.toLowerCase().includes(searchQuery.toLowerCase());
  });

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

      <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800"
              style={{
                border: `2px solid ${folder.color}`,
              }}
            >
              <Folder size={30} color={folder.color} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Knowledge Vault
              </p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                {folder.name}
              </h1>

              <p className="mt-3 text-zinc-400">
                {folder.description || "No description"}
              </p>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-zinc-500">
                <span>{filteredResources.length} Resources</span>

                <span>
                  Updated {new Date(folder.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={openUploadModal}
            className="
            flex
            items-center
            gap-2
            rounded-2xl
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
            <Upload size={18} />
            Upload Resource
          </button>
        </div>
      </section>

      {/* Quick Actions */}

      <section className="grid gap-5 md:grid-cols-3">
        <button
          onClick={openUploadModal}
          className="
          rounded-3xl
          border
          border-zinc-800
          bg-[#1A1A1E]
          p-6
          text-left
          transition
          hover:border-zinc-700
          hover:bg-zinc-900
        "
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800">
            <Upload className="text-white" size={22} />
          </div>

          <h3 className="font-semibold text-white">Upload Resource</h3>

          <p className="mt-2 text-sm text-zinc-500">PDF, PPT, DOCX, Images</p>
        </button>

        <button
          onClick={() => openImportLinkModal(folder._id || folder.id)}
          className="
          rounded-3xl
          border
          border-zinc-800
          bg-[#1A1A1E]
          p-6
          text-left
          transition
          hover:border-zinc-700
          hover:bg-zinc-900
        "
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800">
            <Link2 className="text-white" size={22} />
          </div>

          <h3 className="font-semibold text-white">Import Link</h3>

          <p className="mt-2 text-sm text-zinc-500">
            Save useful web resources
          </p>
        </button>

        <button
          onClick={() => openCreateNoteModal(folder._id || folder.id)}
          className="
          rounded-3xl
          border
          border-zinc-800
          bg-[#1A1A1E]
          p-6
          text-left
          transition
          hover:border-zinc-700
          hover:bg-zinc-900
        "
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800">
            <FilePlus2 className="text-white" size={22} />
          </div>

          <h3 className="font-semibold text-white">Create Note</h3>

          <p className="mt-2 text-sm text-zinc-500">
            Write your own study notes
          </p>
        </button>
      </section>

      {/* Resources */}

      <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Resources</h2>

            <p className="mt-2 text-zinc-500">
              {filteredResources.length} resource
              {filteredResources.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-400">
            {filteredResources.length} Items
          </span>
        </div>

        {filteredResources.length === 0 ? (
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/50 py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-800">
              <Upload size={34} className="text-zinc-500" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              No Resources Yet
            </h3>

            <p className="mt-3 max-w-md text-zinc-500">
              Upload your first PDF, Notes, PPT or Links to begin building your
              Knowledge Vault.
            </p>

            <button
              onClick={openUploadModal}
              className="
                mt-8
                rounded-2xl
                bg-white
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-zinc-200
              "
            >
              Upload Resource
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <div
                key={resource._id}
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-6
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-zinc-700
                "
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800">
                    {getResourceIcon(resource.type)}
                  </div>

                  <Star
                    size={18}
                    onClick={() => handleFavorite(resource._id)}
                    className={`cursor-pointer transition ${
                      resource.isFavorite
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-zinc-600 hover:text-yellow-400"
                    }`}
                  />
                </div>

                <h3 className="truncate text-lg font-semibold text-white">
                  {resource.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {resource.type === "note"
                    ? "Study Note"
                    : resource.type === "link"
                      ? "Web Link"
                      : `${(resource.fileSize / 1024 / 1024).toFixed(2)} MB`}
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  {new Date(resource.createdAt).toLocaleDateString()}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-5">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold uppercase text-zinc-400">
                    {resource.type}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(resource)}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-700
                        bg-zinc-800
                        px-3
                        py-2
                        text-sm
                        text-white
                        transition
                        hover:bg-zinc-700
                      "
                    >
                      <Eye size={16} />
                      Preview
                    </button>

                    <button
                      onClick={() => handleDelete(resource._id)}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-red-500/10
                        px-3
                        py-2
                        text-sm
                        text-red-400
                        transition
                        hover:bg-red-500/20
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <NotePreviewModal
        open={selectedNote !== null}
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />
    </div>
  );
};

export default FolderPage;
