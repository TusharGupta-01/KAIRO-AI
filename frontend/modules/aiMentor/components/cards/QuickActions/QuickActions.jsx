import {
  MessageCircle,
  Map,
  BookOpen,
} from "lucide-react";

const actions = [
  {
    icon: MessageCircle,
    title: "Ask Mentor",
    subtitle: "Continue Chat",
  },
  {
    icon: Map,
    title: "Roadmap",
    subtitle: "Today's Mission",
  },
  {
    icon: BookOpen,
    title: "Knowledge Vault",
    subtitle: "Your Resources",
  },
];

function QuickActions() {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      {actions.map((action) => {

        const Icon = action.icon;

        return (

          <button
            key={action.title}
            className="
            group
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
            text-left
            transition
            hover:-translate-y-1
            hover:border-zinc-700
            "
          >

            <div className="mb-5 w-fit rounded-2xl bg-zinc-800 p-3">

              <Icon
                size={22}
                className="transition group-hover:scale-110"
              />

            </div>

            <h3 className="font-semibold">

              {action.title}

            </h3>

            <p className="mt-2 text-sm text-zinc-400">

              {action.subtitle}

            </p>

          </button>

        );

      })}

    </div>
  );
}

export default QuickActions;