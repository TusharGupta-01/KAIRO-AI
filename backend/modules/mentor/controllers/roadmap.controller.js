const { generateRoadmap: generateRoadmapService, getRoadmap: getRoadmapService,} = require("../services/roadmap.service");

const generateRoadmap = async (req, res) => {
  try {
    const userId = req.user.userId;

    const response = await generateRoadmapService(userId);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRoadmap = async (req, res) => {
  try {
    const userId = req.user.userId;
    const roadmap = await getRoadmapService(userId);
    return res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  generateRoadmap,
  getRoadmap,
};