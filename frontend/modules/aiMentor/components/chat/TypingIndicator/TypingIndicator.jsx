import { Bot } from "lucide-react";

function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">

      <div className="flex max-w-3xl gap-3">

        {/* Avatar */}

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white">

          <Bot size={18} />

        </div>

        {/* Bubble */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4">

          <p className="mb-3 text-sm text-zinc-400">
            KAIRO is preparing your personalized guidance...
          </p>

          <div className="flex gap-2">

            <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
              style={{ animationDelay: "0.2s" }}
            ></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
              style={{ animationDelay: "0.4s" }}
            ></span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;