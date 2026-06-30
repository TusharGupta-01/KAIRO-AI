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

    return response.text;
  } catch (error) {
    const message = error.message || "";

    // Rate limit
    if (message.includes('"code":429')) {
      throw new Error(
        "KAIRO AI is currently receiving too many requests. Please wait a minute and try again."
      );
    }

    // High traffic
    if (message.includes('"code":503')) {
      throw new Error(
        "KAIRO AI is temporarily busy. Please try again in a few moments."
      );
    }

    // Invalid API Key
    if (
      message.includes("API_KEY") ||
      message.includes("PERMISSION_DENIED")
    ) {
      throw new Error("Invalid Gemini API key.");
    }

    console.error("Gemini Error:", error);

    throw new Error("Unable to generate AI response.");
  }
};

module.exports = {
  generateContent,
};