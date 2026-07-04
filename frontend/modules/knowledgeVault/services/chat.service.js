import api from "../../../src/services/api";

export const askKnowledgeVault = async (question) => {
  const response = await api.post("/knowledge-vault/chat", {
    question,
  });

  return response.data;
};