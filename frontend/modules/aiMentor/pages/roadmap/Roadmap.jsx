import { useEffect, useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { getRoadmap } from "../../services/roadmap.service";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRoadmap = async () => {
      try {
        const data = await getRoadmap();

        setRoadmap(data);
        setSelectedDay(data.days[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadRoadmap();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-zinc-400">
        Loading roadmap...
      </div>
    );

  const completed = roadmap.days.filter((d) => d.completed).length;

  const progress = Math.round(
    (completed / roadmap.days.length) * 100
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8">

        <h1 className="text-3xl font-bold text-white">
          {roadmap.roadmapTitle}
        </h1>

        <p className="mt-3 max-w-4xl text-zinc-400">
          {roadmap.summary}
        </p>

        <div className="mt-8">

          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>
              {completed}/{roadmap.days.length} Days Completed
            </span>

            <span>{progress}%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">

            <div
              className="h-2 rounded-full bg-white"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

      <div className="flex min-w-0 flex-col gap-6">

  {/* Horizontal Timeline */}

  {/* <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent pb-2">

    <div className="flex min-w-max gap-3">

      {roadmap.days.map((day) => (

        <button
          key={day.day}
          onClick={() => setSelectedDay(day)}
          className={`min-w-[130px] rounded-2xl border p-4 text-left transition-all ${
            selectedDay.day === day.day
              ? "border-white bg-white text-black"
              : "border-zinc-800 bg-[#18181B] text-white hover:border-zinc-600"
          }`}
        >

          <div className="flex items-center justify-between">

            <span className="text-sm font-bold">
              Day {day.day}
            </span>

            {day.completed && (
              <CheckCircle2
                size={16}
                className="text-green-500"
              />
            )}

          </div>

          <p className="mt-3 line-clamp-2 text-xs opacity-70">
            {day.mission}
          </p>

        </button>

      ))}

    </div>

  </div> */}
  {/* Timeline */}

<div className="w-full max-w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#18181B] p-4">

  <div className="overflow-x-auto">

    <div className="flex w-max gap-3">

      {roadmap.days.map((day) => (

        <button
          key={day.day}
          onClick={() => setSelectedDay(day)}
          className={`w-36 shrink-0 rounded-2xl border p-4 text-left transition ${
            selectedDay.day === day.day
              ? "border-white bg-white text-black"
              : "border-zinc-800 bg-zinc-900 text-white hover:border-zinc-600"
          }`}
        >
          <div className="flex items-center justify-between">

            <span className="font-bold">
              Day {day.day}
            </span>

            {day.completed && (
              <CheckCircle2
                size={16}
                className="text-green-500"
              />
            )}

          </div>

          <p className="mt-3 line-clamp-2 text-xs opacity-70">
            {day.mission}
          </p>

        </button>

      ))}

    </div>

  </div>

</div>

  {/* Selected Day */}

  {selectedDay && (

    <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Day {selectedDay.day}
          </h2>

          <p className="mt-2 text-zinc-400">
            {selectedDay.estimatedTime}
          </p>

        </div>

        {selectedDay.completed ? (
          <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
            Completed
          </span>
        ) : (
          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm text-yellow-400">
            Pending
          </span>
        )}

      </div>

      <h3 className="text-2xl font-semibold text-white">
        {selectedDay.mission}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {selectedDay.why}
      </p>

      <div className="mt-8">

        <h4 className="mb-4 text-lg font-semibold text-white">
          Tasks
        </h4>

        <div className="grid gap-3">

          {selectedDay.tasks.map((task, index) => (

            <div
              key={index}
              className="flex items-start gap-3 rounded-xl bg-zinc-900 p-4"
            >

              <CheckCircle2
                size={18}
                className="mt-0.5 text-white"
              />

              <span className="text-zinc-300">
                {task}
              </span>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-zinc-900 p-6">

        <h4 className="font-semibold text-white">
          Deliverable
        </h4>

        <p className="mt-2 text-zinc-400">
          {selectedDay.deliverable}
        </p>

      </div>

      <div className="mt-5 rounded-2xl border border-green-900 bg-green-950/20 p-6">

        <h4 className="font-semibold text-green-400">
          Career Impact
        </h4>

        <p className="mt-2 text-zinc-300">
          {selectedDay.careerImpact}
        </p>

      </div>

    </div>

  )}

</div>

    </div>
  );
};

export default Roadmap;