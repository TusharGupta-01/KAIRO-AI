import { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  Target,
  Briefcase,
  Brain,
  FolderGit2,
  Clock,
  Pencil,
  Loader2,
} from "lucide-react";

import { getProfile } from "../../services/profile.service";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-zinc-400">
        Failed to load profile.
      </div>
    );
  }

  const stats = [
    {
      title: "Skills",
      value: profile.skills.length,
      icon: Brain,
    },
    {
      title: "Projects",
      value: profile.projects.length,
      icon: FolderGit2,
    },
    {
      title: "Daily Study",
      value: `${profile.preferences.availableHoursPerDay} hrs`,
      icon: Clock,
    },
    {
      title: "Target",
      value: profile.career.desiredOutcome,
      icon: Target,
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      {/* Profile */}

      <section className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800">
              <User className="h-10 w-10 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">Student Profile</h1>

              <p className="mt-1 text-zinc-400">
                Your personalized career profile
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Info
                  icon={GraduationCap}
                  title="College"
                  value={profile.identity.college}
                />

                <Info
                  icon={Briefcase}
                  title="Branch"
                  value={profile.identity.branch}
                />

                <Info
                  icon={Target}
                  title="Goal"
                  value={profile.career.primaryGoal}
                />

                <Info
                  icon={Clock}
                  title="Timeline"
                  value={profile.career.timeline}
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Edit Profile coming soon")}
            className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white transition hover:border-white"
          >
            Edit Profile
          </button>
        </div>
      </section>

      {/* Stats */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900">
                <Icon className="text-white" size={22} />
              </div>

              <h2 className="text-3xl font-bold text-white">{item.value}</h2>

              <p className="mt-2 text-zinc-500">{item.title}</p>
            </div>
          );
        })}
      </section>
      {/* Skills */}

      <section className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {profile.skills.length > 0 ? (
            profile.skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {skill.name}
              </span>
            ))
          ) : (
            <p className="text-zinc-500">No skills added yet.</p>
          )}
        </div>
      </section>

      {/* Projects */}

      <section className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">Projects</h2>

        <div className="space-y-4">
          {profile.projects.length > 0 ? (
            profile.projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-zinc-700 bg-zinc-900 p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {project.techStack.join(" • ")}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
                  >
                    View GitHub →
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-zinc-500">No projects available.</p>
          )}
        </div>
      </section>

      {/* Career */}

      <section className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">Career Goals</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Desired Outcome</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {profile.career.desiredOutcome}
            </h3>
          </div>

          <div className="rounded-xl bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500">Daily Study Hours</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {profile.preferences.availableHoursPerDay} Hours / Day
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm text-zinc-500">Target Companies</p>

          <div className="flex flex-wrap gap-3">
            {profile.career.targetCompanies.map((company) => (
              <span
                key={company}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={18} className="text-zinc-500" />

      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500">{title}</p>

        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  );
}