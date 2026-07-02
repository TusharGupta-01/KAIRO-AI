import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Loader2 } from "lucide-react";
export default function ProfileSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    college: "",
    branch: "",
    semester: 1,
    primaryGoal: "",
    desiredOutcome: "Placement",
    timeline: "1 Year",
    targetCompanies: "",
    availableHoursPerDay: 4,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        identity: {
          college: form.college,
          branch: form.branch,
          semester: Number(form.semester),
        },

        career: {
          primaryGoal: form.primaryGoal,
          desiredOutcome: form.desiredOutcome,
          timeline: form.timeline,
          targetCompanies: form.targetCompanies
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
        },

        preferences: {
          availableHoursPerDay: Number(form.availableHoursPerDay),
        },
      };

      await api.post("/mentor/onboarding", payload);

      await api.post("/mentor/roadmap");

      navigate("/dashboard");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#18181B] p-8"
      >
        <h1 className="mb-8 text-3xl font-bold text-white">
          Complete Your Profile
        </h1>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            name="college"
            placeholder="College"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            name="branch"
            placeholder="Branch"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="number"
            name="semester"
            min="1"
            max="8"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            name="primaryGoal"
            placeholder="Primary Goal"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />

          <select
            name="desiredOutcome"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white"
          >
            <option>Placement</option>
            <option>Internship</option>
            <option>Higher Studies</option>
            <option>Startup</option>
            <option>Research</option>
          </select>

          <select
            name="timeline"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white"
          >
            <option>3 Months</option>
            <option>6 Months</option>
            <option>1 Year</option>
            <option>2 Years</option>
          </select>

          <input
            name="targetCompanies"
            placeholder="Google, Microsoft"
            onChange={handleChange}
            className="md:col-span-2 rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="number"
            min="1"
            max="12"
            name="availableHoursPerDay"
            placeholder="Study Hours"
            onChange={handleChange}
            className="rounded-xl bg-zinc-900 p-3 text-white outline-none"
          />
        </div>
        {loading && (
          <div className="mb-5 rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center text-zinc-300">
            <p className="font-medium">
              🤖 KAIRO AI is creating your personalized roadmap.
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              This usually takes 30–60 seconds. Please don't close this page.
            </p>
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 flex w-full items-center justify-center rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating AI Roadmap...
            </>
          ) : (
            "Generate My AI Roadmap"
          )}
        </button>
      </form>
    </div>
  );
}
