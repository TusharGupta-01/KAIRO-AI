const ChatHistory = require("../../../models/ChatHistory");

const saveMessage = async (userId, role, message) => {
  let chat = await ChatHistory.findOne({ user: userId });

  if (!chat) {
    chat = await ChatHistory.create({
      user: userId,
      messages: [],
    });
  }

  chat.messages.push({
    role,
    message,
  });

  // Keep only latest 50 messages
  if (chat.messages.length > 50) {
    chat.messages = chat.messages.slice(-50);
  }

  await chat.save();

  return chat;
};
const getRecentMessages = async (userId, limit = 10) => {
  const chat = await ChatHistory.findOne({ user: userId });

  if (!chat) return [];

  // return chat.messages.slice(-limit);
  return chat.messages
  .slice(-limit)
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
};
module.exports = {
  saveMessage,
  getRecentMessages,
};