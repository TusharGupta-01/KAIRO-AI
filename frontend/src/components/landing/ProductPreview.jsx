import { motion } from "framer-motion";
import { useState } from "react";
import { LayoutDashboard, Map, Bot, BookOpen } from "lucide-react";
import dashboardImg from "../../assets/Screenshot 2026-07-02 153650.png";
import roadmapImg from "../../assets/Screenshot 2026-07-02 153734.png";
import mentorImg from "../../assets/Screenshot 2026-07-02 153741.png";
import vaultImg from "../../assets/Screenshot 2026-07-02 153746.png";
const previews = [
  {
    id: "dashboard",
    title: "Dashboard",
    subtitle: "Track your complete career journey.",
    icon: LayoutDashboard,
    image: dashboardImg,
  },
  {
    id: "roadmap",
    title: "Roadmap",
    subtitle: "Daily AI-generated learning missions.",
    icon: Map,
    image: roadmapImg,
  },
  {
    id: "mentor",
    title: "AI Mentor",
    subtitle: "Context-aware personalized guidance.",
    icon: Bot,
    image: mentorImg,
  },
  {
    id: "vault",
    title: "Knowledge Vault",
    subtitle: "Everything you learn in one place.",
    icon: BookOpen,
    image: vaultImg,
  },
];

export default function ProductPreview() {
  const [active, setActive] = useState(previews[0]);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28">
      {/* Background */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 shadow-sm">
            Product Preview
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Built for students.
            <br />
            Ready for your career.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Explore the actual KAIRO experience before creating your account.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-16 overflow-x-auto">
          <div className="flex w-max min-w-full justify-start gap-3 pb-2 lg:justify-center">
            {previews.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`flex shrink-0 items-center gap-3 rounded-full border px-5 py-3 transition-all ${
                    active.id === item.id
                      ? "border-black bg-black text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
                  }`}
                >
                  <Icon size={18} />

                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Browser Mockup */}

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-12 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-2xl max-h-[720px]">
          {/* Browser Header */}

          <div className="border-b border-zinc-200 bg-zinc-100 px-5 py-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>

                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>

                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>

              <div
                className="
      flex
      h-10
      w-full
      items-center
      rounded-full
      bg-white
      px-5
      text-sm
      text-zinc-500

      sm:max-w-md
      "
              >
                app.kairoai.tech/{active.id}
              </div>
            </div>
          </div>

          {/* Main Content */}

          <div
            className="
  grid

  lg:grid-cols-[1.35fr_380px]
  "
          >
            {/* Screenshot */}

            <div className="bg-zinc-100 p-4 md:p-8">
              <motion.div
                key={active.image}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-200
      bg-white
      shadow-xl
      "
              >
                <img
  src={active.image}
  alt={active.title}
  className="
    w-full
    object-cover
    object-top
    "
    // h-[260px]
    // sm:h-[340px]
    // md:h-[430px]
    // lg:h-[520px]
    // xl:h-[580px]
  
/>
              </motion.div>
            </div>

            {/* Right Panel */}

            <div
              className="
    border-t
    border-zinc-200
    bg-white
    p-6 lg:p-8
    lg:border-l
    lg:border-t-0
    "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <active.icon size={28} className="text-blue-600" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-zinc-900">
                {active.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-600">{active.subtitle}</p>

              {/* Highlights */}

              <div className="mt-8 space-y-3">
                {[
                  "Beautiful & Minimal UI",
                  "Responsive Across Devices",
                  "Powered by AI",
                  "Built for Students",
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
          border-zinc-200
          bg-zinc-50
          px-5
          py-4
          "
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      ✓
                    </div>

                    <span className="font-medium text-zinc-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech */}

              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "Node.js", "MongoDB", "Gemini AI"].map((tech) => (
                  <span
                    key={tech}
                    className="
          rounded-full
          border
          border-zinc-200
          bg-zinc-50
          px-4
          py-2
          text-sm
          font-medium
          text-zinc-700
          "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
