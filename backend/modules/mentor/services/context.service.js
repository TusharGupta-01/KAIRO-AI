const StudentProfile = require("../../../models/StudentProfile");
const Roadmap = require("../../../models/Roadmap");
const { getRecentMessages } = require("./chatHistory.service");

const buildStudentContext = async (userId) => {
  const profile = await StudentProfile.findOne({
    user: userId,
  });
  if (!profile) {
    throw new Error("Student profile not found.");
  }
  return {
    student: {
      college: profile.identity.college,
      branch: profile.identity.branch,
      semester: profile.identity.semester,

      goal: profile.career.primaryGoal,

      desiredOutcome: profile.career.desiredOutcome,

      availableHours: profile.preferences.availableHoursPerDay,

      skills: profile.skills.map((skill) => skill.name),

      projects: profile.projects.map((project) => project.title),
    },
  };
};

const buildMentorContext = async (userId) => {
  const profile = await StudentProfile.findOne({
    user: userId,
  });

  if (!profile) {
    throw new Error("Student profile not found.");
  }

  const roadmap = await Roadmap.findOne({
    user: userId,
    status: "active",
  });

  if (!roadmap) {
    throw new Error("Active roadmap not found.");
  }

  const currentMission = roadmap.days.find((day) => !day.completed) || null;

  const completedMissions = roadmap.days
    .filter((day) => day.completed)
    .map((day) => day.mission);

  
  const chatHistory = await getRecentMessages(userId);
  return {
    student: {
      college: profile.identity.college,
      branch: profile.identity.branch,
      semester: profile.identity.semester,

      goal: profile.career.primaryGoal,

      desiredOutcome: profile.career.desiredOutcome,

      skills: profile.skills.map((skill) => skill.name),

      projects: profile.projects.map((project) => project.title),
    },

    roadmap: {
      title: roadmap.roadmapTitle,

      summary: roadmap.summary,

      currentMission,

      completedMissions,
    },
    chatHistory,
  };
};
module.exports = {
  buildStudentContext,
  buildMentorContext,
};
