function RecentActivity({ roadmap }) {

  const completedDays = roadmap.days
    .filter(day => day.completed)
    .slice(-3)
    .reverse();

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        {completedDays.map(day => (

          <div
            key={day.day}
            className="flex items-center gap-4"
          >

            ✅

            <div>

              <h3 className="font-medium">

                Completed Day {day.day}

              </h3>

              <p className="text-sm text-zinc-500">

                {day.mission}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;