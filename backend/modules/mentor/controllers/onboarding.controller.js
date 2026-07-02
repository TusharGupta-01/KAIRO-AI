const {
  createStudentProfile,
  getStudentProfile,
  updateStudentProfile,
} = require("../services/onboarding.service");

const onboarding = async (req, res) => {
  try {
    const userId = req.user.userId;
    const profile = await createStudentProfile(userId, req.body);
    return res.status(201).json({
      success: true,
      message: "Student profile created successfully",
      data: profile,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const profile = await getStudentProfile(userId);
    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const profile = await updateStudentProfile(userId, req.body);

    return res.status(200).json({
      success: true,

      message: "Profile updated successfully",

      data: profile,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = {
  onboarding,
  getProfile,
  updateProfile,
};
