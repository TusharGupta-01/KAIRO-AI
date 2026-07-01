import api from "../../../src/services/api";

export const sendMessage = async (question) => {
  const response = await api.post("/mentor/chat", {
    question,
  });

  return response.data;
};

export const getChatHistory = async () => {
  const response = await api.get("/mentor/history");

  return response.data.messages;
};