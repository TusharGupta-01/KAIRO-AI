// modules/knowledgeVault/components/feedback/emptyResourceState/emptyResourceState.jsx
const EmptyState = ({ icon: Icon, title, description, actions = [] }) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-slate-200 bg-white px-10 py-20 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50">
        <Icon className="h-9 w-9 text-slate-300" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      {actions.length > 0 && (
        <div className="flex items-center gap-3">
          {actions.map(({ label, icon: ActionIcon, variant = "primary", onClick }) => (
            <button
              key={label}
              type="button"
              onClick={onClick}
              className={
                variant === "primary"
                  ? "flex items-center gap-2 rounded-2xl bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-purple-700 hover:shadow-md"
                  : "flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
              }
            >
              {ActionIcon && <ActionIcon className="h-4 w-4" strokeWidth={2} />}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmptyState;