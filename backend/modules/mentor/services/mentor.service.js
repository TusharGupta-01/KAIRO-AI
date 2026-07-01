const { generateContent } = require("../../../shared/ai/gemini");

const { buildMentorContext } = require("./context.service");

const { buildMentorPrompt } = require("../prompts/mentor.prompt");

const { saveMessage } = require("./chatHistory.service");
const askMentor = async (userId, question) => {
  await saveMessage(userId, "user", question);
  const context = await buildMentorContext(userId);

  const prompt = buildMentorPrompt(context, question);
  const response = await generateContent(prompt);
  const answer = response;
  await saveMessage(userId, "assistant", answer);

  return response;
};

module.exports = {
  askMentor,
};
