import useRoadmap from "../../hooks/useRoadmap";

import WelcomeCard from "../../components/cards/WelcomeCard";
import MissionCard from "../../components/cards/MissionCard";
import ProgressCard from "../../components/cards/ProgressCard";
import InsightCard from "../../components/cards/InsightCard";
import CareerJourney from "../../components/roadmap/CareerJourney";
import QuickActions from "../../components/cards/QuickActions";
import RecentActivity from "../../components/cards/RecentActivity";

function Dashboard() {
  const { roadmap, loading } = useRoadmap();

  if (loading) return <div>Loading...</div>;

  if (!roadmap || !roadmap.days) {
  return (
    <div className="flex h-[70vh] items-center justify-center text-white">
      Generating your roadmap...
    </div>
  );
}

const currentMission =
  roadmap.days.find((d) => !d.completed) ||
  roadmap.days[roadmap.days.length - 1];

  return (
    <div className="space-y-6">

      <WelcomeCard mission={currentMission} roadmap={roadmap} />

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <MissionCard mission={currentMission} />

        </div>

        <ProgressCard roadmap={roadmap} />

      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">

          <InsightCard roadmap={roadmap} />

          <QuickActions />

          <RecentActivity roadmap={roadmap} />

        </div>

        <CareerJourney roadmap={roadmap} />

      </div>

    </div>
  );
}

export default Dashboard;