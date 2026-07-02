import { Trash2 } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Trash = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}

      <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Recycle Bin
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">Trash</h1>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Deleted resources are stored here temporarily before being permanently
          removed.
        </p>
      </section>

      <EmptyState
        icon={Trash2}
        title="Trash is Empty"
        description="Deleted PDFs, notes, links and other resources will appear here until you permanently delete them."
      />
    </div>
  );
};

export default Trash;
// import { Trash2 } from "lucide-react";
// import EmptyState from "../../components/feedback/emptyResourceState";

// const Trash = () => {
//   return (
//     <div className="mx-auto max-w-5xl">

//       <div className="mb-8">

//         <h1 className="text-3xl font-bold">
//           Trash
//         </h1>

//         <p className="mt-2 text-slate-500">
//           Deleted resources will appear here before being permanently removed.
//         </p>

//       </div>

//       <EmptyState
//         icon={Trash2}
//         title="Trash is empty"
//         description="Deleted files, notes and links will appear here."
//       />

//     </div>
//   );
// };

// export default Trash;
