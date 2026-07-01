import {
  CheckCircle2,
  Circle,
  Rocket,
} from "lucide-react";

function CareerJourney({ roadmap }) {
  if (!roadmap) return null;

  const completed = roadmap.days.filter((d) => d.completed).length;

  const stages = [
    {
        title:"Python Foundation",
        days:[1,2,3,4,5]
    },
    {
        title:"Python Advanced",
        days:[6,7,8]
    },
    {
        title:"NumPy & Pandas",
        days:[9,10,11]
    },
]

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <Rocket className="text-green-400" size={22} />

        <div>

          <p className="text-sm text-zinc-400">
            Career Journey
          </p>

          <h2 className="text-2xl font-bold">
            AI Engineer
          </h2>

        </div>

      </div>

      <div className="relative ml-3 border-l border-zinc-700">

        {stages.map((stage, index) => {

          const done = completed >= stage.until;

          const current =
            !done &&
            completed < stage.until &&
            (
              index === 0 ||
              completed >= stages[index - 1].until
            );

          return (

            <div
              key={stage.title}
              className="relative mb-8 pl-8"
            >

              {/* Dot */}

              <div
                className="
                absolute
                -left-[13px]
                top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-zinc-900
                "
              >

                {done ? (

                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />

                ) : current ? (

                  <div className="h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-500/20 animate-pulse" />

                ) : (

                  <Circle
                    size={18}
                    className="text-zinc-600"
                  />

                )}

              </div>

              <h3
                className={`font-semibold ${
                  done
                    ? "text-white"
                    : current
                    ? "text-green-400"
                    : "text-zinc-500"
                }`}
              >
                {stage.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">

                {done
                  ? "Completed"
                  : current
                  ? "Current Focus"
                  : "Locked"}

              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default CareerJourney;