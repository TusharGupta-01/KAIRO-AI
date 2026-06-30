const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
const DEFAULT_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

const generateContent = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: DEFAULT_MODEL,
      contents: prompt,
    });

    console.log(response);
    console.log(typeof response.text);
    console.log(response.text);

    return response.text;
  } catch (error) {
    throw new Error(error.message || "Failed to generate AI response.");
  }
};

module.exports = {
  generateContent,
};
