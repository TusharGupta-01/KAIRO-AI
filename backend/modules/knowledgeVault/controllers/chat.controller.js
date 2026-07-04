const {
  askKnowledgeVault,
} = require("../services/chat.service");

const chat = async (req, res) => {
  try {
    const { question } = req.body;

    const result = await askKnowledgeVault(
  req.user.userId,
  question
);

return res.json({
  success: true,
  ...result,
});
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chat,
};