const { generateContent } = require("../../../shared/ai/gemini");
const Resource = require("../../../models/Resource");

const SEARCH_KEYWORDS = [
  "find",
  "search",
  "show",
  "open",
  "locate",
  "where",
];

const askKnowledgeVault = async (userId, question) => {
  const lowerQuestion = question.toLowerCase();

  const isSearchQuery = SEARCH_KEYWORDS.some((word) =>
    lowerQuestion.includes(word)
  );

  if (isSearchQuery) {
    const cleanedQuery = lowerQuestion
      .replace(/find|search|show|open|locate|where/gi, "")
      .replace(/pdf|file|document|note|notes|folder/gi, "")
      .trim();

    const resources = await Resource.find({
  owner: userId,
  isDeleted: false,
  $or: [
    {
      name: {
        $regex: cleanedQuery,
        $options: "i",
      },
    },
    {
      content: {
        $regex: cleanedQuery,
        $options: "i",
      },
    },
    {
      extractedText: {
        $regex: cleanedQuery,
        $options: "i",
      },
    },
    {
      tags: {
        $regex: cleanedQuery,
        $options: "i",
      },
    },
  ],
}).select("name type filePath folder");

    if (resources.length > 0) {
      return {
        type: "search",
        resources,
      };
    }

    return {
      type: "search",
      resources: [],
    };
  }

  const prompt = `
You are KAIRO AI.

You help students with:

- Notes
- PDFs
- Assignments
- Study plans
- Revision
- Programming
- Exams

Answer clearly and concisely.

Student Question:
${question}
`;

  const answer = await generateContent(prompt);

  return {
    type: "chat",
    answer,
  };
};

module.exports = {
  askKnowledgeVault,
};