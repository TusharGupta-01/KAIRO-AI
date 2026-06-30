const StudentProfile = require("../../../models/StudentProfile");

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

module.exports = {
    buildStudentContext,
};