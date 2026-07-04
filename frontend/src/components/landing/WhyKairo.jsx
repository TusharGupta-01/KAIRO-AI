import { motion } from "framer-motion";
import { Sparkles, Bot, Folder, Briefcase, Map, ArrowDown } from "lucide-react";

const products = [
  {
    name: "ChatGPT",
    subtitle: "Conversation",
    icon: Bot,
    color: "bg-emerald-50 text-emerald-600",
    missing: [
      "Roadmap",
      "Knowledge Vault",
      "Career Dashboard",
      "Opportunities",
    ],
  },
  {
    name: "Google Drive",
    subtitle: "Storage",
    icon: Folder,
    color: "bg-blue-50 text-blue-600",
    missing: ["AI Mentor", "Roadmap", "Career Dashboard", "Jobs"],
  },
  {
    name: "LinkedIn",
    subtitle: "Jobs",
    icon: Briefcase,
    color: "bg-sky-50 text-sky-600",
    missing: ["AI Mentor", "Roadmap", "Knowledge Vault", "Dashboard"],
  },
  {
    name: "Roadmaps",
    subtitle: "Planning",
    icon: Map,
    color: "bg-orange-50 text-orange-600",
    missing: ["Mentor", "Knowledge Vault", "Dashboard", "Jobs"],
  },
];

export default function WhyKairo() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={18} className="text-blue-600" />

            <span className="text-sm font-medium text-zinc-700">
              Built for Students
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Why use
            <span className="text-blue-600"> five apps</span>
            <br />
            when one does it all?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Students spend hours switching between ChatGPT, Google Drive,
            LinkedIn and countless roadmap websites.
            <br />
            <span className="font-semibold text-zinc-900">
              KAIRO brings everything into one intelligent workspace that learns
              with you and grows with your career.
            </span>
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          mt-20
          grid
          gap-6

          sm:grid-cols-2

          xl:grid-cols-4
          "
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                rounded-3xl
                border
                border-zinc-200
                bg-white
                p-7
                shadow-sm
                transition
                duration-300
                hover:shadow-xl
                "
              >
                <div className="mb-7 flex items-center gap-4">
                  <div
                    className={`
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      ${product.color}
    `}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">
                      {product.name}
                    </h3>

                    <p className="text-sm text-zinc-500">{product.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6 h-px bg-zinc-200" />

                <div className="space-y-4">
                  <Feature label={product.subtitle} available />

                  {product.missing.map((item) => (
                    <Feature key={item} label={item} />
                  ))}
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  className="
  mt-8
  rounded-2xl
  bg-zinc-50
  p-4
  text-sm
  text-zinc-500
  "
                >
                  Works great...
                  <span className="font-semibold text-zinc-900">
                    {" "}
                    but only solves one problem.
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrow */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="my-16 flex justify-center"
        >
          <div className="rounded-full bg-zinc-100 p-5">
            <ArrowDown className="text-zinc-700" size={28} />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
    relative
    overflow-hidden
    rounded-[36px]
    border
    border-zinc-200
    bg-gradient-to-br
    from-zinc-900
    via-zinc-950
    to-black
    p-8
    shadow-[0_40px_120px_rgba(0,0,0,.25)]

    md:p-12
    lg:p-16
  "
        >
          {/* Glow */}

          <div className="absolute -top-24 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="relative">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
              <Sparkles size={18} className="text-blue-400" />

              <span className="text-sm font-medium text-zinc-300">
                Everything Together
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Meet
              <span className="text-blue-400"> KAIRO</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Instead of switching between multiple tools, KAIRO connects
              everything into one intelligent career ecosystem that grows with
              you.
            </p>

            {/* Grid */}

            <div
              className="
      mt-14
      grid
      gap-5

      sm:grid-cols-2

      lg:grid-cols-3
      "
            >
              <KairoFeature
                emoji="🤖"
                title="AI Mentor"
                text="Context-aware guidance that remembers your progress."
              />

              <KairoFeature
                emoji="🗺"
                title="Roadmap"
                text="Personalized missions generated for your career."
              />

              <KairoFeature
                emoji="📚"
                title="Knowledge Vault"
                text="One place for notes, PDFs, links and resources."
              />

              <KairoFeature
                emoji="📈"
                title="Dashboard"
                text="Track learning progress and daily consistency."
              />

              <KairoFeature
                emoji="🎯"
                title="Opportunities"
                text="Internships, jobs and scholarships matched for you."
              />

              <KairoFeature
                emoji="⚡"
                title="Everything Connected"
                text="Every feature works together inside one AI ecosystem."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function KairoFeature({
  emoji,

  title,

  text,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-xl
      "
    >
      <div className="mb-5 text-4xl">{emoji}</div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-7 text-zinc-400">{text}</p>
    </motion.div>
  );
}

function Feature({ label, available = false }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition"
    >
      <span className="text-sm font-medium text-zinc-700">{label}</span>

      {available ? (
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
          ✓
        </span>
      ) : (
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-500">
          ✕
        </span>
      )}
    </motion.div>
  );
}
