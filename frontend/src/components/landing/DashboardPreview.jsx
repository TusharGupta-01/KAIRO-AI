import {
  FileText,
  Link,
  Folder,
  Plus,
  Building2,
  Bookmark,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-xl">

        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="border-b border-zinc-200 p-10 lg:border-b-0 lg:border-r">

            <h2 className="mb-8 text-3xl font-bold">
              Your Knowledge Vault
            </h2>

            <div className="grid grid-cols-3 gap-5">

              <VaultCard
                color="bg-red-100"
                icon={<FileText className="text-red-500" />}
                title="Resume.pdf"
              />

              <VaultCard
                color="bg-blue-100"
                icon={<FileText className="text-blue-600" />}
                title="Notes.pdf"
              />

              <VaultCard
                color="bg-purple-100"
                icon={<Link className="text-purple-600" />}
                title="Portfolio"
              />

              <VaultCard
                color="bg-green-100"
                icon={<Folder className="text-green-600" />}
                title="Projects"
              />

              <VaultCard
                color="bg-zinc-100"
                icon={<Plus />}
                title="Add More"
              />

            </div>

            <p className="mt-8 text-zinc-500">
              Upload notes, resumes, certificates, projects and links.
              Soon KAIRO will search, summarize and connect everything with AI.
            </p>

          </div>

          {/* RIGHT */}

          <div className="p-10">

            <h2 className="mb-8 text-3xl font-bold">
              Opportunities For You
            </h2>

            <div className="space-y-5">

              <InternshipCard
                company="Google"
                role="Software Engineer Internship"
                stipend="₹80,000 / month"
              />

              <InternshipCard
                company="Microsoft"
                role="Explore Internship"
                stipend="₹75,000 / month"
              />

              <InternshipCard
                company="Government of India"
                role="PM Internship Scheme"
                stipend="₹5,000 / month"
              />

            </div>

            <button className="mt-8 font-semibold text-blue-600 hover:underline">
              View all opportunities →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function VaultCard({ color, icon, title }) {
  return (
    <div className="rounded-3xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:shadow-lg">

      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <p className="text-sm font-semibold">{title}</p>

    </div>
  );
}

function InternshipCard({
  company,
  role,
  stipend,
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 p-6 transition hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <div className="mb-2 flex items-center gap-3">

            <Building2 className="text-green-600" />

            <span className="font-semibold">
              {company}
            </span>

          </div>

          <h3 className="text-xl font-bold">
            {role}
          </h3>

          <p className="mt-3 text-zinc-500">
            {stipend}
          </p>

        </div>

        <Bookmark className="text-zinc-400" />

      </div>

    </div>
  );
}