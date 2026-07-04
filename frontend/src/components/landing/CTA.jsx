import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100 blur-[120px] opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-8 py-16 text-center shadow-[0_25px_80px_rgba(0,0,0,.18)] md:px-16 md:py-24"
        >

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300">

            🚀 Start Your Journey Today

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">

            Ready to build

            <br />

            your dream career?

          </h2>

          {/* Subtitle */}

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

            Stop switching between multiple tools.

            Let one AI mentor guide your complete learning,
            projects, internships and placements.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Start Free

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

            <Link
              to="/login"
              className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Login
            </Link>

          </div>

          {/* Bottom Stats */}

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

            <div>

              <h3 className="text-3xl font-black text-white">

                AI

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Personalized Mentor

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-white">

                24×7

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Career Guidance

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-white">

                All-in-One

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Career Operating System

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}