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
    user: userId,
    status: "active",
  });

  if (!roadmap) {
    throw new Error("Roadmap not found.");
  }

  return roadmap;
};

const updateMissionStatus = async (userId, dayNumber, completed) => {
  if (typeof completed !== "boolean") {
    throw new Error("Completed status must be true or false.");
  }
  const roadmap = await Roadmap.findOne({
    user: userId,
    status: "active",
  });
  if (!roadmap) {
    throw new Error("Roadmap not found.");
  }
  const mission = roadmap.days.find((day) => day.day === Number(dayNumber));

  if (!mission) {
    throw new Error("Mission not found.");
  }
  // Completing a mission
  if (completed) {
    if (mission.completed) {
      throw new Error("Mission already completed.");
    }

    const previousMission = roadmap.days.find(
      (day) => day.day === Number(dayNumber) - 1,
    );

    if (previousMission && !previousMission.completed) {
      throw new Error(
        `Please complete Day ${previousMission.day} before marking Day ${dayNumber} as complete.`,
      );
    }
  }

  // Un-completing a mission
  else {
    if (!mission.completed) {
      throw new Error("Mission is already incomplete.");
    }

    const nextCompletedDay = roadmap.days.find(
      (day) => day.day > Number(dayNumber) && day.completed,
    );

    if (nextCompletedDay) {
      throw new Error(
        `Please mark Day ${nextCompletedDay.day} as incomplete first.`,
      );
    }
  }

  mission.completed = completed;
  await roadmap.save();
  const completedCount = roadmap.days.filter((day) => day.completed).length;
  const total = roadmap.days.length;

  const percentage = Math.round((completedCount / total) * 100);

  const nextMission = roadmap.days.find((day) => !day.completed) || null;

  const roadmapCompleted = nextMission === null;
  return {
    progress: {
      completed: completedCount,
      remaining: total - completedCount,
      total,
      percentage,
    },

    updatedMission: {
      day: mission.day,
      mission: mission.mission,
      completed: mission.completed,
    },

    nextMission,

    roadmapCompleted,
  };
};
module.exports = {
  generateRoadmap,
  getRoadmap,
  updateMissionStatus,
};
