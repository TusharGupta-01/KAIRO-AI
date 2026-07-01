const { askMentor } = require("../services/mentor.service");

const mentorChat = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { question } = req.body;

    const answer = await askMentor(userId, question);

    return res.json({
      success: true,
      answer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  mentorChat,
};