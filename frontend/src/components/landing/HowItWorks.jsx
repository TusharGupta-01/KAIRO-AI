import { motion } from "framer-motion";
import {
  User,
  BrainCircuit,
  Map,
  BookOpen,
  Bot,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Create Your Profile",
    description:
      "Tell KAIRO about your college, skills, interests and dream company.",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands You",
    description:
      "Our AI analyzes your goals, strengths and learning pace to build your personalized journey.",
  },
  {
    icon: Map,
    title: "Roadmap Generated",
    description:
      "Receive a structured roadmap with daily missions and milestones.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Vault",
    description:
      "Resources, PDFs, notes and links are organized automatically in one place.",
  },
  {
    icon: Bot,
    title: "Daily AI Mentor",
    description:
      "Get context-aware guidance every day based on your roadmap and progress.",
  },
  {
    icon: Trophy,
    title: "Reach Your Dream Career",
    description:
      "Internships, placements and career growth become a guided journey instead of guesswork.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#fafafa] py-28"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 shadow-sm">
            How It Works
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            One Conversation.
            <br />
            <span className="text-blue-600">
              A Complete Career Journey.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            From understanding your profile to landing opportunities,
            KAIRO connects every step into one seamless ecosystem.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_420px]">

          {/* LEFT */}

          <div className="relative">

            {/* Blue Line */}

            <div className="absolute left-6 top-6 h-full w-[2px] bg-gradient-to-b from-blue-600 via-blue-400 to-transparent" />

            <div className="space-y-10">

  {steps.map((step, index) => {

    const Icon = step.icon;

    return (

      <motion.div
        key={step.title}
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: .55,
          delay: index * .12,
        }}
        className="relative flex gap-6"
      >

        {/* Timeline Circle */}

        <motion.div

          whileHover={{
            scale: 1.12,
          }}

          className="
          relative
          z-10
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          border
          border-blue-200
          shadow-lg
          "

        >

          <Icon
            size={20}
            className="text-blue-600"
          />

        </motion.div>

        {/* Card */}

        <motion.div

          whileHover={{
            y: -4,
          }}

          className="
          flex-1
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:shadow-xl
          "

        >

          <div className="mb-3 flex items-center gap-3">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">

              {index + 1}

            </span>

            <h3 className="text-xl font-bold text-zinc-900">

              {step.title}

            </h3>

          </div>

          <p className="leading-7 text-zinc-600">

            {step.description}

          </p>

        </motion.div>

      </motion.div>

    );

  })}

</div>

          </div>

          {/* RIGHT */}

          <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .7 }}
  className="lg:sticky lg:top-28 h-fit"
>

  <div
    className="
    overflow-hidden
    rounded-[32px]
    border
    border-zinc-200
    bg-white
    shadow-xl
    "
  >

    {/* Header */}

    <div className="border-b border-zinc-200 p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-500">

            Today's Mission

          </p>

          <h3 className="mt-1 text-2xl font-bold text-zinc-900">

            AI Engineer Journey

          </h3>

        </div>

        <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

          Day 12

        </div>

      </div>

    </div>

    {/* Tasks */}

    <div className="space-y-4 p-6">

      <Task completed>

        Learn Binary Search

      </Task>

      <Task completed>

        Solve 3 LeetCode Problems

      </Task>

      <Task>

        Build Resume Project

      </Task>

      <Task>

        Watch System Design Video

      </Task>

    </div>

    {/* Progress */}

    <div className="border-t border-zinc-100 p-6">

      <div className="mb-3 flex items-center justify-between">

        <span className="font-medium text-zinc-700">

          Overall Progress

        </span>

        <span className="font-bold text-blue-600">

          72%

        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-200">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "72%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500"
        />

      </div>

    </div>

    {/* Mentor */}

    <div className="border-t border-zinc-100 bg-zinc-50 p-6">

      <div className="flex gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white">

          🤖

        </div>

        <div>

          <p className="font-semibold text-zinc-900">

            AI Mentor

          </p>

          <p className="mt-2 leading-7 text-zinc-600">

            You're progressing faster than expected.

            Complete today's project and you'll stay ahead
            of your roadmap.

          </p>

        </div>

      </div>

    </div>

  </div>

</motion.div>

        </div>
      </div>
    </section>
  );
}
function Task({

  children,

  completed = false,

}) {

  return (

    <motion.div

      whileHover={{
        x: 4,
      }}

      className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-zinc-100
      bg-zinc-50
      px-5
      py-4
      "

    >

      <div className="flex items-center gap-3">

        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
            completed
              ? "bg-green-100 text-green-600"
              : "bg-zinc-200 text-zinc-500"
          }`}
        >

          {completed ? "✓" : ""}

        </div>

        <span className="font-medium text-zinc-700">

          {children}

        </span>

      </div>

      <span
        className={`text-sm ${
          completed
            ? "text-green-600"
            : "text-zinc-400"
        }`}
      >

        {completed ? "Done" : "Pending"}

      </span>

    </motion.div>

  );

}