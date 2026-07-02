// modules/knowledgeVault/pages/shared/shared.jsx
import { Share2 } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Shared = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}

      <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Collaboration
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">Shared With Me</h1>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Resources and study materials shared by teammates will appear here.
        </p>
      </section>

      <EmptyState
        icon={Share2}
        title="Nothing Shared Yet"
        description="When classmates or teammates share folders, notes or documents with you, they'll appear here."
      />
    </div>
  );
};

export default Shared;
// // modules/knowledgeVault/pages/shared/shared.jsx
// import { Share2 } from "lucide-react";
// import EmptyState from "../../components/feedback/emptyResourceState";

// const Shared = () => {
//   return (
//     <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
//       <div className="flex flex-col gap-2">
//         <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Shared With Me</h1>
//         <p className="text-sm text-slate-500">
//           Resources others have shared with you will appear here.
//         </p>
//       </div>

//       <EmptyState
//         icon={Share2}
//         title="Nothing shared yet."
//         description="When someone shares a resource with you, it will show up here."
//       />
//     </div>
//   );
// };

// export default Shared;
