import {
  Sparkles,
  Folder,
  Building2,
  Target,
} from "lucide-react";

export default function FloatingCards() {
  return (
    <>

      <div className="absolute left-0 top-60 hidden xl:block">

        <div className="rounded-2xl bg-white p-5 shadow-xl">

          <div className="flex items-center gap-3">

            <Sparkles className="text-blue-600" />

            <span className="font-semibold">

              AI Mentor

            </span>

          </div>

        </div>

      </div>

      <div className="absolute right-0 top-36 hidden xl:flex flex-col gap-6">

        <Card
          icon={<Folder className="text-purple-600" />}
          title="Knowledge Vault"
        />

        <Card
          icon={<Building2 className="text-green-600" />}
          title="Top Internships"
        />

        <Card
          icon={<Target className="text-orange-500" />}
          title="Personalized Plan"
        />

      </div>

    </>
  );
}

function Card({ icon, title }) {
  return (
    <div className="rounded-2xl bg-white px-6 py-5 shadow-xl">

      <div className="flex items-center gap-3">

        {icon}

        <span className="font-semibold">

          {title}

        </span>

      </div>

    </div>
  );
}