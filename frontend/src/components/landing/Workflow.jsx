import {
  MessageCircle,
  Folder,
  Building2,
  Target,
  Trophy,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Ask Anything",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Folder,
    title: "Save Everything",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Building2,
    title: "Discover Opportunities",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Target,
    title: "Follow Your Plan",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Trophy,
    title: "Get Hired",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Workflow() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          All you need.
          <br />
          <span className="text-zinc-500">
            In one place.
          </span>
        </h2>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-center"
              >
                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full shadow-lg ${step.color}`}
                  >
                    <Icon size={36} />
                  </div>

                  <h3 className="mt-5 w-40 text-center text-lg font-semibold">
                    {step.title}
                  </h3>

                </div>

                {index !== steps.length - 1 && (

                  <ArrowRight
                    size={34}
                    className="mx-8 hidden text-zinc-300 lg:block"
                  />

                )}
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}