import { motion } from "framer-motion";
import {
  Bot,
  Map,
  BookOpen,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Mentor",
    description:
      "Context-aware career guidance that remembers your profile, roadmap and previous conversations.",
    gradient: "from-blue-600 to-violet-600",
    large: true,
  },

  {
    icon: Map,
    title: "Roadmap",
    description:
      "Personalized daily missions generated specifically for your career goal.",
  },

  {
    icon: BookOpen,
    title: "Knowledge Vault",
    description:
      "Store PDFs, notes, links and resources in one intelligent workspace.",
  },

  {
    icon: LayoutDashboard,
    title: "Career Dashboard",
    description:
      "Track progress, consistency, streaks and AI insights in real time.",
    large: true,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background */}

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 shadow-sm">

            Powerful Features

          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">

            Everything you need

            <br />

            to build your

            <span className="text-blue-600">

              {" "}career.

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">

            KAIRO isn't one feature.

            It's an ecosystem where every tool works together.

          </p>

        </motion.div>

        {/* Grid */}

        <div
          className="
          mt-20
          grid
          gap-6

          md:grid-cols-2
          "
        >

          {/* BIG CARD */}

          <motion.div
            initial={{
              opacity:0,
              y:40,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:.6,
            }}

            className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-zinc-950
            via-zinc-900
            to-black
            p-8

            md:col-span-2

            lg:p-12
            "
          >

            {/* Background Glow */}

<div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

<div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

  {/* Left */}

  <div className="max-w-2xl">

    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">

      <Bot size={34} className="text-white" />

    </div>

    <h3 className="text-4xl font-black leading-tight text-white">

      AI Mentor

    </h3>

    <p className="mt-5 text-lg leading-8 text-zinc-300">

      Your personal AI career mentor that remembers your profile,
      roadmap, conversations and learning progress.

    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">

      {[
        "Remembers every conversation",
        "Understands your roadmap",
        "Knows your strengths",
        "Guides you daily",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{
            x: 6,
          }}
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          backdrop-blur
          "
        >

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">

            ✓

          </div>

          <span className="text-zinc-200">

            {item}

          </span>

        </motion.div>

      ))}

    </div>

  </div>

  {/* Right */}

  <motion.div

    whileHover={{
      y: -6,
      scale: 1.02,
    }}

    className="
    w-full
    max-w-md
    rounded-[30px]
    border
    border-white/10
    bg-white/5
    p-6
    backdrop-blur-xl
    "

  >

    {/* Chat */}

    <div className="space-y-5">

      <div className="flex justify-end">

        <div className="rounded-2xl bg-white px-5 py-3 text-sm text-zinc-900">

          I want Google Internship.

        </div>

      </div>

      <div className="flex gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">

          🤖

        </div>

        <div className="flex-1 rounded-2xl bg-zinc-900/60 p-5">

          <p className="font-semibold text-white">

            Great choice.

          </p>

          <p className="mt-3 leading-7 text-zinc-300">

            I've generated your roadmap,
            updated today's mission,
            and found matching internships.

          </p>

        </div>

      </div>

    </div>

    {/* Ask */}

    <div className="mt-8 flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-4">

      <span className="flex-1 text-zinc-400">

        Ask KAIRO anything...

      </span>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">

        <ArrowUpRight
          size={18}
          className="text-white"
        />

      </div>

    </div>

  </motion.div>

</div>

          </motion.div>

          {/* SMALL CARDS */}

          {/* Roadmap */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="
    overflow-hidden
    rounded-[32px]
    border
    border-zinc-200
    bg-white
    p-7
    shadow-sm
    transition
    hover:shadow-xl
  "
>
  <div className="mb-6 flex items-center justify-between">

    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

        <Map className="text-blue-600" size={22} />

      </div>

      <div>

        <h3 className="text-xl font-bold text-zinc-900">

          AI Roadmap

        </h3>

        <p className="text-sm text-zinc-500">

          Personalized missions

        </p>

      </div>

    </div>

  </div>

  <div className="space-y-4">

    {[
      "Complete Java Basics",
      "Solve 5 DSA Problems",
      "Build Portfolio Project",
    ].map((task, i) => (

      <motion.div
        key={task}
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * .15 }}
        className="rounded-xl bg-zinc-50 p-4"
      >

        <div className="mb-2 flex justify-between">

          <span className="text-sm font-medium text-zinc-700">

            {task}

          </span>

          <span className="text-blue-600">

            {30 + i * 20}%

          </span>

        </div>

        <div className="h-2 rounded-full bg-zinc-200">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${30 + i * 20}%`,
            }}
            transition={{
              duration: 1,
              delay: i * .15,
            }}
            className="h-full rounded-full bg-blue-600"
          />

        </div>

      </motion.div>

    ))}

  </div>

</motion.div>

{/* Knowledge Vault */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="
    overflow-hidden
    rounded-[32px]
    border
    border-zinc-200
    bg-white
    p-7
    shadow-sm
    transition
    hover:shadow-xl
  "
>

  <div className="flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">

      <BookOpen
        className="text-violet-600"
        size={22}
      />

    </div>

    <div>

      <h3 className="text-xl font-bold text-zinc-900">

        Knowledge Vault

      </h3>

      <p className="text-sm text-zinc-500">

        Everything in one place

      </p>

    </div>

  </div>

  <div className="mt-8 space-y-3">

    {[
      "Machine Learning.pdf",
      "Google Interview Notes",
      "System Design Playlist",
      "Resume_v4.pdf",
    ].map((file) => (

      <motion.div
        key={file}
        whileHover={{
          x: 6,
        }}
        className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-zinc-200
        bg-zinc-50
        px-4
        py-4
        "
      >

        <span className="truncate text-sm font-medium text-zinc-700">

          {file}

        </span>

        <ArrowUpRight
          size={18}
          className="text-zinc-400"
        />

      </motion.div>

    ))}

  </div>

</motion.div>

{/* Dashboard */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="
    overflow-hidden
    rounded-[32px]
    border
    border-zinc-200
    bg-gradient-to-br
    from-zinc-900
    via-zinc-950
    to-black
    p-8

    md:col-span-2
  "
>

  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10">

        <LayoutDashboard
          className="text-white"
          size={28}
        />

      </div>

      <h3 className="text-3xl font-bold text-white">

        Career Dashboard

      </h3>

      <p className="mt-4 max-w-xl leading-8 text-zinc-400">

        Track streaks, daily consistency, roadmap completion,
        AI insights and overall career growth.

      </p>

    </div>

    <div className="grid grid-cols-2 gap-4">

      {[
        ["74%", "Roadmap"],
        ["18", "Resources"],
        ["12", "Projects"],
        ["96%", "Consistency"],
      ].map(([value, label]) => (

        <motion.div
          key={label}
          whileHover={{
            scale: 1.05,
          }}
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          text-center
          backdrop-blur
          "
        >

          <h4 className="text-3xl font-black text-white">

            {value}

          </h4>

          <p className="mt-2 text-sm text-zinc-400">

            {label}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</motion.div>

        </div>

      </div>

    </section>
  );
}