import { Brain, Sparkles } from "lucide-react";

function InsightCard() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/10 p-3">

          <Brain className="text-violet-400" size={22} />

        </div>

        <div>

          <p className="text-sm text-zinc-400">
            AI Mentor Insight
          </p>

          <h2 className="text-xl font-bold">
            Stay on Track
          </h2>

        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">

        <div className="flex items-start gap-3">

          <Sparkles
            className="mt-1 text-violet-400"
            size={18}
          />

          <p className="leading-7 text-zinc-300">

            You're progressing well.

            Focus on completing your Python foundation before exploring React or Machine Learning.

            Consistency over speed will get you hired faster.

          </p>

        </div>

      </div>

    </div>
  );
}

export default InsightCard;