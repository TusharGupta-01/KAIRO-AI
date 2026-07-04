import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}

          <div className="lg:col-span-2">
            <Link
  to="/"
  className="text-3xl font-black tracking-tight text-zinc-900"
>
  KAIRO
  <span className="text-blue-600"> AI</span>
</Link>

            <p className="mt-6 max-w-sm leading-8 text-zinc-500">
              KAIRO is an AI-powered Career Operating System that helps students
              learn, organize, grow and achieve their career goals from one
              intelligent platform.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/TusharGupta-01/KAIRO-AI"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:teamkairo.ai@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-900">Product</h3>

            <div className="space-y-4">
              <FooterLink text="AI Mentor" />

              <FooterLink text="Roadmap" />

              <FooterLink text="Knowledge Vault" />

              <FooterLink text="Dashboard" />
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-900">Company</h3>

            <div className="space-y-4">
              <FooterLink text="About" />

              <FooterLink text="Contact" />

              <FooterLink text="Privacy" />

              <FooterLink text="Terms" />
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-900">Resources</h3>

            <div className="space-y-4">
              <a
                href="https://github.com/TusharGupta-01/KAIRO-AI"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-600 transition hover:text-black"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <FooterLink text="Documentation" />

              <FooterLink text="Demo" />

              <FooterLink text="Support" />
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-zinc-200 pt-8 text-sm text-zinc-400 md:flex-row">
          <p>© 2026 KAIRO AI. All rights reserved.</p>

          <p>Built with ❤️ by Team Model Mavericks</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ text }) {
  return (
    <a href="#" className="block text-zinc-500 transition-all duration-200 hover:translate-x-1 hover:text-zinc-900">
      {text}
    </a>
  );
}
