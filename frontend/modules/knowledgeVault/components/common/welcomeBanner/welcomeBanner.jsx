// modules/knowledgeVault/components/common/welcomeBanner/welcomeBanner.jsx
const WelcomeBanner = ({ title, description, actions = [] }) => {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white px-10 py-12 shadow-sm">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="max-w-xl text-base leading-relaxed text-slate-500">{description}</p>
      </div>

      {actions.length > 0 && (
        <div className="flex items-center gap-3">
          {actions.map(({ label, icon: Icon, variant = "primary", onClick }) => (
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
              {Icon && <Icon className="h-4 w-4" strokeWidth={2} />}
              {label}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default WelcomeBanner;