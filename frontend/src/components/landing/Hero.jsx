import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import HeroConversation from "./HeroConversation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[120px]" />

      <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-purple-200/40 blur-[120px]" />

      <div className="absolute left-0 bottom-0 h-[280px] w-[280px] rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 shadow-sm"
        >
          ✨

          <span className="text-sm font-medium text-zinc-700">
            Your Personalized Career Operating System
          </span>

        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-5xl text-center text-5xl font-black leading-[1.05] tracking-tight text-zinc-900 md:text-7xl"
        >
          One AI.

          <br />

          Everything

          <br />

          for your career.
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-500 md:text-xl"
        >
          Stop switching between ChatGPT, YouTube, Google Drive and LinkedIn.

          <br />

          KAIRO learns with you, plans with you and grows with you.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/signup"
            className="group flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:scale-[1.03]"
          >
            Start Your Journey

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <a
            href="#how-it-works"
            className="rounded-full border border-zinc-300 px-8 py-4 text-zinc-700 transition hover:bg-white"
          >
            See How It Works
          </a>

        </motion.div>

        {/* Conversation */}

        <div className="mt-24">

          <HeroConversation />

        </div>

      </div>

    </section>
  );
}