// modules/knowledgeVault/components/common/quickActions/quickActions.jsx
const QuickActions = ({ actions = [] }) => {
  if (actions.length === 0) return null;

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map(({ label, icon: Icon, onClick }) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            className="flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50">
              <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
            </div>
            <span className="text-sm font-medium text-slate-800">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;