import { useEffect, useRef, useState } from "react";
import {
  getChatHistory,
  sendMessage,
} from "../services/mentor.service";

function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Load previous conversation
  useEffect(() => {
    loadHistory();
  }, []);

  // Auto scroll whenever a new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const loadHistory = async () => {
    try {
      const history = await getChatHistory();
      setMessages(history);
    } catch (error) {
      console.error("Failed to load chat history:", error);
    }
  };

  const send = async (question) => {
    if (!question.trim()) return;

    // Optimistically show user's message
    const userMessage = {
      role: "user",
      message: question,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage(question);

      const assistantMessage = {
        role: "assistant",
        message: response.answer,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message:
            "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    send,
    messagesEndRef,
  };
}

export default useChat;