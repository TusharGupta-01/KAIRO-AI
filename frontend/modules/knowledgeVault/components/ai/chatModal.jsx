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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex h-[85vh] w-[900px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">
          <div className="flex items-center gap-3">
            <Bot className="text-violet-600" />

            <div>
              <h2 className="text-xl font-semibold">AI Study Assistant</h2>

              <p className="text-sm text-slate-500">
                Ask questions about your uploaded documents
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Chat Area */}

        <div className="flex-1 overflow-y-auto p-8">

  {/* Suggested Questions */}

  <div className="mb-8">

    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
      Suggested Questions
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
          className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-100"
        >
          {prompt}
        </button>

      ))}

    </div>

  </div>

  {/* Conversation */}

  <div className="space-y-5">

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
          className={`max-w-xl whitespace-pre-wrap rounded-2xl px-5 py-4 ${
            msg.sender === "user"
              ? "bg-violet-600 text-white"
              : "bg-violet-50 text-slate-700"
          }`}
        >

          {msg.text}

        </div>

      </div>

    ))}

  </div>

</div>

        {/* Input */}

        <div className="border-t border-slate-200 p-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask anything..."
              className="h-12 flex-1 rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
            />

            <button
              onClick={handleSend}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 text-white transition hover:bg-violet-700"
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
