import { Target, Briefcase, Clock3, ArrowRight } from "lucide-react";

function MissionCard({ mission }) {
  if (!mission) return null;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-700">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-zinc-800 p-2">

          <Target size={20} />

        </div>

        <div>

          <p className="text-sm text-zinc-400">
            Your Focus Today
          </p>

          <h2 className="text-2xl font-bold mt-1">
            {mission.mission}
          </h2>

        </div>

      </div>

      {/* Deliverable */}

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <div className="flex items-center gap-2">

          📦

          <span className="font-semibold">
            Deliverable
          </span>

        </div>

        <p className="mt-3 text-zinc-400 leading-7">

          {mission.deliverable}

        </p>

      </div>

      {/* Career Impact */}

      <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <div className="flex items-center gap-2">

          <Briefcase size={18} />

          <span className="font-semibold">
            Career Impact
          </span>

        </div>

        <p className="mt-3 text-zinc-400 leading-7">

          {mission.careerImpact}

        </p>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-zinc-400">

          <Clock3 size={18} />

          {mission.estimatedTime}

        </div>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-white
          px-5
          py-3
          font-medium
          text-black
          transition
          hover:scale-105
          "
        >

          Open Mission

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}

export default MissionCard;