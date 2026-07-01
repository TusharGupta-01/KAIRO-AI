// const ResourceList = () => {

//     return (

//         <div>

//             Resource List

//         </div>

//     );

// };

// export default ResourceList;
import { FolderOpen } from "lucide-react";

const ResourceList = () => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/50 p-10 text-center">

      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-800">

        <FolderOpen
          size={36}
          className="text-zinc-500"
        />

      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        No Resources Yet
      </h2>

      <p className="mt-3 max-w-md leading-7 text-zinc-400">
        Upload PDFs, Notes, Presentations or Links to start
        building your personal Knowledge Vault.
      </p>

    </div>
  );
};

export default ResourceList;