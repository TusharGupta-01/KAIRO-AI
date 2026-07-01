// modules/knowledgeVault/pages/settings/settings.jsx
import { Settings as SettingsIcon } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Settings = () => {
  return (
  <div className="mx-auto max-w-6xl space-y-8">

    {/* Header */}

    <section className="rounded-3xl border border-zinc-800 bg-[#1A1A1E] p-8">

      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Workspace
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white">
        Settings
      </h1>

      <p className="mt-3 max-w-2xl text-zinc-400">
        Manage your Knowledge Vault preferences and personalize your workspace.
      </p>

    </section>

    <EmptyState
      icon={SettingsIcon}
      title="Settings Coming Soon"
      description="Workspace preferences, themes, cloud sync and AI settings will be available in a future update."
    />

  </div>
);
};

export default Settings;
// // modules/knowledgeVault/pages/settings/settings.jsx
// import { Settings as SettingsIcon } from "lucide-react";
// import EmptyState from "../../components/feedback/emptyResourceState";

// const Settings = () => {
//   return (
//     <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
//       <div className="flex flex-col gap-2">
//         <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Settings</h1>
//         <p className="text-sm text-slate-500">Manage your Knowledge Vault preferences.</p>
//       </div>

//       <EmptyState
//         icon={SettingsIcon}
//         title="Settings coming soon."
//         description="Preferences and workspace controls will appear here."
//       />
//     </div>
//   );
// };

// export default Settings;