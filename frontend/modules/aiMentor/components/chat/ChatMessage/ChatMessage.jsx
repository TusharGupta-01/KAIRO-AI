import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-3xl gap-3 ${isUser ? "flex-row-reverse" : ""}`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            isUser ? "bg-white text-black" : "bg-zinc-800 text-white"
          }`}
        >
          {isUser ? <User size={18} /> : <Bot size={18} />}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-3xl border px-5 py-4 ${
            isUser
              ? "border-white bg-white text-black"
              : "border-zinc-800 bg-zinc-900 text-white"
          }`}
        >
          {/* <p className="whitespace-pre-wrap leading-7">
            {message.message}
          </p> */}
          <div className="prose prose-invert max-w-none leading-7">
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
          <p
            className={`mt-3 text-xs ${
              isUser ? "text-zinc-600" : "text-zinc-500"
            }`}
          >
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
