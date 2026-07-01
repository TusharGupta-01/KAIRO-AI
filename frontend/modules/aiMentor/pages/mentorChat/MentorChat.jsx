import { Bot } from "lucide-react";

import useChat from "../../hooks/useChat";

import ChatMessage from "../../components/chat/ChatMessage";
import ChatInput from "../../components/chat/ChatInput";
import TypingIndicator from "../../components/chat/TypingIndicator";

function MentorChat() {
  const {
    messages,
    loading,
    send,
    messagesEndRef,
  } = useChat();

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col rounded-3xl border border-zinc-800 bg-[#0A0A0A]">

      {/* Header */}

      <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-zinc-800 bg-[#0A0A0A] p-6">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900">

          <Bot />

        </div>

        <div>

          <h1 className="text-2xl font-bold">

            KAIRO Mentor

          </h1>

          <p className="text-sm text-zinc-400">

            Personalized guidance based on your roadmap,
            goals and previous conversations.

          </p>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 space-y-6 overflow-y-auto p-6">

        {messages.length === 0 && (

          <div className="flex h-full flex-col items-center justify-center text-center">

            <Bot
              size={70}
              className="mb-6 text-zinc-600"
            />

            <h2 className="text-2xl font-bold">

              Welcome to KAIRO

            </h2>

            <p className="mt-3 max-w-lg text-zinc-500">

              Ask anything about your roadmap,
              career, projects or studies.

              KAIRO already knows your profile
              and gives personalized guidance.

            </p>

          </div>

        )}

        {messages.map((message, index) => (

          <ChatMessage
            key={index}
            message={message}
          />

        ))}

        {loading && <TypingIndicator />}

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}

      <ChatInput

        onSend={send}

        loading={loading}

      />

    </div>
  );
}

export default MentorChat;