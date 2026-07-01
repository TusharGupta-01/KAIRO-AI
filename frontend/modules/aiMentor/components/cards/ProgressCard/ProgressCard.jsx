import {
  TrendingUp,
  Trophy,
  Flame,
  Calendar,
  CheckCircle2,
} from "lucide-react";

function ProgressCard({ roadmap }) {
  if (!roadmap) return null;

  const completed = roadmap.days.filter((d) => d.completed).length;
  const total = roadmap.days.length;

  const percentage = Math.round((completed / total) * 100);

  const remaining = total - completed;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-zinc-800 p-2">

          <TrendingUp size={20} />

        </div>

        <div>

          <p className="text-sm text-zinc-400">
            Career Progress
          </p>

          <h2 className="text-xl font-bold">
            You're {percentage}% closer
          </h2>

        </div>

      </div>

      {/* Percentage */}

      <div className="mt-8">

        <h1 className="text-6xl font-black">

          {percentage}%

        </h1>

        <p className="mt-2 text-zinc-400">

          {completed} of {total} missions completed

        </p>

      </div>

      {/* Progress */}

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-white to-zinc-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">

          <div className="flex items-center gap-2">

            <CheckCircle2
              size={18}
              className="text-green-500"
            />

            <span className="text-sm text-zinc-400">

              Completed

            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold">

            {completed}

          </h3>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">

          <div className="flex items-center gap-2">

            <Calendar
              size={18}
              className="text-blue-400"
            />

            <span className="text-sm text-zinc-400">

              Remaining

            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold">

            {remaining}

          </h3>

        </div>

        {/* <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">

          <div className="flex items-center gap-2">

            <Flame
              size={18}
              className="text-orange-400"
            />

            <span className="text-sm text-zinc-400">

              Streak

            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold">

            6

          </h3>

        </div> */}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">

          <div className="flex items-center gap-2">

            <Trophy
              size={18}
              className="text-yellow-400"
            />

            <span className="text-sm text-zinc-400">

              Goal

            </span>

          </div>

          <h3 className="mt-3 text-lg font-semibold">

            AI Engineer

          </h3>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;