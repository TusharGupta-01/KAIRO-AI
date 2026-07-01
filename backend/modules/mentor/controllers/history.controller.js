const { getRecentMessages } = require("../services/chatHistory.service");

const getChatHistory = async (req, res) => {
  try {
    const userId = req.user.userId;

    const messages = await getRecentMessages(userId, 10);

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getChatHistory,
};