import { ArrowRight, Clock3 } from "lucide-react";

function WelcomeCard({ mission }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-2xl">

          <p className="text-sm text-zinc-400">
            Good Morning 👋
          </p>

          <h1 className="mt-2 text-4xl font-bold leading-tight">
            Continue your journey.
          </h1>

          <p className="mt-4 text-zinc-400">
            Stay consistent. Every completed mission gets you closer
            to your first AI job.
            Day {mission.day}
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 lg:w-80">

          <p className="text-sm text-zinc-500">
            Today's Focus
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            {mission?.mission}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-400">

            <Clock3 size={16} />

            {mission?.estimatedTime}

          </div>

          <button
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-white
              py-3
              font-medium
              text-black
              transition
              hover:scale-[1.02]
            "
          >

            Resume Mission

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;