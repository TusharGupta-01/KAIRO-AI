// modules/knowledgeVault/pages/shared/shared.jsx
import { Share2 } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Shared = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Shared With Me</h1>
        <p className="text-sm text-slate-500">
          Resources others have shared with you will appear here.
        </p>
      </div>

      <EmptyState
        icon={Share2}
        title="Nothing shared yet."
        description="When someone shares a resource with you, it will show up here."
      />
    </div>
  );
};

export default Shared;