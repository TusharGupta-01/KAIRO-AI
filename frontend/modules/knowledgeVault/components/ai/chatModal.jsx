import { X, Bot, Send } from "lucide-react";
import { useState } from "react";

const ChatModal = ({ open, onClose }) => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm your AI Study Assistant.\n\nUpload PDFs, Notes and Links to your Knowledge Vault and I'll help you summarize, explain concepts, generate quizzes and answer questions.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userQuestion = message;

    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setMessage("");

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text: `This is a prototype response for:\n\n"${userQuestion}"\n\nLater this chat will use RAG to answer directly from your uploaded documents.`,
        },
      ]);
    }, 800);
  };

  if (!open) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
    <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-[#111111] shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-800">
            <Bot className="text-white" size={22} />
          </div>

          <div>

            <h2 className="text-lg font-semibold text-white">
              KAIRO AI
            </h2>

            <p className="text-sm text-zinc-500">
              Chat with your Knowledge Vault
            </p>

          </div>

        </div>

        <button
          onClick={onClose}
          className="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
        >
          <X size={20} />
        </button>

      </div>

      {/* Chat */}

      <div className="flex-1 overflow-y-auto px-6 py-6">

        {/* Suggestions */}

        <div className="mb-8">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Suggested Prompts
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              "Summarize this folder",
              "Generate Quiz",
              "Explain difficult topics",
              "Create revision notes",
            ].map((prompt) => (

              <button
                key={prompt}
                onClick={() => setMessage(prompt)}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white"
              >
                {prompt}
              </button>

            ))}

          </div>

        </div>

        {/* Messages */}

        <div className="space-y-6">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-2xl whitespace-pre-wrap rounded-2xl px-5 py-4 text-[15px] leading-7 ${
                  msg.sender === "user"
                    ? "bg-white text-black"
                    : "border border-zinc-800 bg-zinc-900 text-zinc-200"
                }`}
              >

                {msg.text}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Input */}

      <div className="border-t border-zinc-800 p-5">

        <div className="flex items-center gap-3">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Ask anything about your documents..."
            className="h-12 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-white"
          />

          <button
            onClick={handleSend}
            className="flex h-12 items-center gap-2 rounded-xl bg-white px-5 font-medium text-black transition hover:bg-zinc-200"
          >

            <Send size={18} />

            Send

          </button>

        </div>

      </div>

    </div>
  </div>
);
};

export default ChatModal;
