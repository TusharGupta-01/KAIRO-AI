const { generateContent } = require("../../../shared/ai/gemini");

const { buildMentorContext } = require("./context.service");

const { buildMentorPrompt } = require("../prompts/mentor.prompt");

const askMentor = async (userId, question) => {
  const context = await buildMentorContext(userId);

  const prompt = buildMentorPrompt(context, question);

  const response = await generateContent(prompt);

  return response;
};

module.exports = {
  askMentor,
};