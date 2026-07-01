// modules/knowledgeVault/pages/settings/settings.jsx
import { Settings as SettingsIcon } from "lucide-react";
import EmptyState from "../../components/feedback/emptyResourceState";

const Settings = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your Knowledge Vault preferences.</p>
      </div>

      <EmptyState
        icon={SettingsIcon}
        title="Settings coming soon."
        description="Preferences and workspace controls will appear here."
      />
    </div>
  );
};

export default Settings;