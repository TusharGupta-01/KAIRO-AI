const { generateContent } = require("../../../shared/ai/gemini");

const { buildStudentContext } = require("./context.service");

const { buildRoadmapPrompt } = require("../prompts/roadmap.prompt");

const { parseRoadmap } = require("../../../shared/ai/parser/roadmap.parser");

const Roadmap = require("../../../models/Roadmap");

const generateRoadmap = async (userId) => {
  const existingRoadmap = await Roadmap.findOne({
    user: userId,
    status: "active",
  });
  if (existingRoadmap) {
    return existingRoadmap;
  }
  const context = await buildStudentContext(userId);
  const prompt = buildRoadmapPrompt(context);
  console.log("Calling Gemini...");
  const response = await generateContent(prompt);

  const roadmap = parseRoadmap(response);
  const savedRoadmap = await Roadmap.create({
    user: userId,

    roadmapTitle: roadmap.roadmapTitle,

    summary: roadmap.summary,

    days: roadmap.days,
  });
  return savedRoadmap;
};

const getRoadmap = async (userId) => {

    const roadmap = await Roadmap.findOne({
        user:userId,
        status:"active"
    });

    if(!roadmap){
        throw new Error("Roadmap not found.");
    }

    return roadmap;

};

module.exports = {
  generateRoadmap,
  getRoadmap,
};
