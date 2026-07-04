import { useEffect, useState } from "react";
import {
  Star,
  Eye,
  Trash2,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileArchive,
  Link2,
} from "lucide-react";

import {
  getResources,
  deleteResource,
  toggleFavorite,
} from "../../services/resource.service";

import NotePreviewModal from "../../components/resource/notePreviewModal";
import EmptyState from "../../components/feedback/emptyResourceState";

const Favorites = () => {
  const [resources, setResources] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    try {
      const data = await getResources();
      setResources(data.filter((resource) => resource.isFavorite));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFavorite = async (id) => {
    try {
      await toggleFavorite(id);
      loadResources();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteResource(id);
      loadResources();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePreview = (resource) => {
    if (resource.type === "note") {
      setSelectedNote(resource);
      setIsPreviewOpen(true);
      return;
    }

    if (resource.filePath) {
      window.open(
        `http://localhost:5000${resource.filePath}`,
        "_blank"
      );
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
      case "note":
        return <FileText className="text-red-400" size={26} />;

      case "doc":
      case "docx":
        return <FileText className="text-blue-400" size={26} />;

      case "ppt":
      case "pptx":
        return <FileSpreadsheet className="text-orange-400" size={26} />;

      case "image":
        return <FileImage className="text-emerald-400" size={26} />;

      case "link":
        return <Link2 className="text-sky-400" size={26} />;

      default:
        return <FileArchive className="text-violet-400" size={26} />;
    }
  };

  if (resources.length === 0) {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Knowledge Vault
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Favorites
          </h1>

          <p className="mt-3 text-zinc-400">
            Star important resources to access them quickly.
          </p>
        </div>

        <EmptyState
          icon={Star}
          title="No favorites yet"
          description="Star a resource to see it here."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Knowledge Vault
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Favorites
        </h1>

        <p className="mt-3 text-zinc-400">
          Your starred study resources.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource._id}
            className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800">
                {getIcon(resource.type)}
              </div>

              <Star
                size={20}
                onClick={() => handleFavorite(resource._id)}
                className="cursor-pointer fill-yellow-400 text-yellow-400"
              />
            </div>

            <h3 className="truncate text-lg font-semibold text-white">
              {resource.name}
            </h3>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handlePreview(resource)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 py-2.5 text-white"
              >
                <Eye size={16} />
                Preview
              </button>

              <button
                onClick={() => handleDelete(resource._id)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500/10 py-2.5 text-red-400"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <NotePreviewModal
        open={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setSelectedNote(null);
        }}
        note={selectedNote}
      />
    </div>
  );
};

export default Favorites;