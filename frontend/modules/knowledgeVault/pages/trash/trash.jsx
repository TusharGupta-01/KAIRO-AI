import { useEffect, useState } from "react";
import {
  Trash2,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileArchive,
  Link2,
  Eye,
} from "lucide-react";

import EmptyState from "../../components/feedback/emptyResourceState";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { getDeletedResources } from "../../services/resource.service";

const Trash = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    loadTrash();
  }, []);

  const loadTrash = async () => {
    try {
      const data = await getDeletedResources();
      setResources(data);
    } catch (error) {
      console.error(error);
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
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Recycle Bin
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">Trash</h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Deleted resources are stored here temporarily.
          </p>
        </section>

        <EmptyState
          icon={Trash2}
          title="Trash is Empty"
          description="Deleted resources will appear here."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Recycle Bin
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">Trash</h1>

        <p className="mt-3 text-zinc-400">Deleted resources</p>
      </section>

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

              <Trash2 className="text-red-400" size={22} />
            </div>

            <h3 className="truncate text-lg font-semibold text-white">
              {resource.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {(resource.fileSize / 1024 / 1024).toFixed(2)} MB
            </p>

            <button
              onClick={() =>
                window.open(`${BACKEND_URL}${resource.filePath}`, "_blank")
              }
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 py-3 text-white transition hover:bg-zinc-700"
            >
              <Eye size={16} />
              Preview
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trash;
