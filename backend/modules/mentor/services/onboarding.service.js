const StudentProfile = require("../../../models/StudentProfile");

const ALLOWED_UPDATE_FIELDS = [
  "identity",
  "career",
  "skills",
  "projects",
  "preferences",
];

const createStudentProfile = async (userId, profileData) => {
  const existingProfile = await StudentProfile.findOne({
    user: userId,
  });
  if (existingProfile) {
    throw new Error("Profile already exists.");
  }
  const profile = await StudentProfile.create({
    user: userId,

    ...profileData,
  });
  return profile;
};

const getStudentProfile = async (userId) => {
  const profile = await StudentProfile.findOne({
    user: userId,
  });
  if (!profile) {
    throw new Error("Profile not found");
  }
  return profile;
};

const updateStudentProfile = async (userId, profileData) => {
  const filteredData = {};
  ALLOWED_UPDATE_FIELDS.forEach((field) => {
    if (profileData[field] !== undefined) {
      filteredData[field] = profileData[field];
    }
  });
  const profile = await StudentProfile.findOneAndUpdate(
    {
      user: userId,
    },

    {
      $set: filteredData,
    },

    {
      new: true,
      runValidators: true, //MongoDB may skip validation during updates. so this
    },
  );
  if (!profile) {
    throw new Error("Profile not found");
  }
  return profile;
};

module.exports = {
  createStudentProfile,
  getStudentProfile,
  updateStudentProfile,
};
