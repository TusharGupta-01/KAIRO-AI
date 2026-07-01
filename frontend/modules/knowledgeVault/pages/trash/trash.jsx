import { Trash2 } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Trash = () => {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Trash
        </h1>

        <p className="mt-2 text-slate-500">
          Deleted resources will appear here before being permanently removed.
        </p>

      </div>

      <EmptyState
        icon={Trash2}
        title="Trash is empty"
        description="Deleted files, notes and links will appear here."
      />

    </div>
  );
};

export default Trash;