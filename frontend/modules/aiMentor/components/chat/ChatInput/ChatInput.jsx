import { useState } from "react";
import { SendHorizontal } from "lucide-react";

function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    const question = input.trim();

    setInput("");

    await onSend(question);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-zinc-800 bg-[#0A0A0A] p-6">
      <div className="flex items-end gap-4">
        <textarea
          ref={(el) => {
            if (el) {
              el.style.height = "0px";
              el.style.height = `${el.scrollHeight}px`;
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask KAIRO anything..."
          className="
    flex-1
    resize-none
    overflow-hidden
    rounded-2xl
    border
    border-zinc-700
    bg-zinc-900
    px-5
    py-4
    text-white
    outline-none
    placeholder:text-zinc-500
    focus:border-white
  "
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-black
            transition-all
            hover:scale-105
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <SendHorizontal size={20} />
        </button>
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        Press <span className="font-medium">Enter</span> to send •
        <span className="font-medium"> Shift + Enter</span> for a new line
      </p>
    </div>
  );
}

export default ChatInput;
