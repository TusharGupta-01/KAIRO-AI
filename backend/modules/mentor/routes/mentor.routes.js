const express = require("express");
const router = express.Router();

const authMiddleware = require("../../../middleware/auth.middleware");
const {
  onboarding,
  getProfile,
  updateProfile,
} = require("../controllers/onboarding.controller");
const {
  generateRoadmap,
  getRoadmap,
  updateMission,
} = require("../controllers/roadmap.controller");
const { mentorChat } = require("../controllers/mentor.controller");

router.post("/onboarding", authMiddleware, onboarding);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.post("/roadmap", authMiddleware, generateRoadmap);
router.get("/roadmap", authMiddleware, getRoadmap);
router.post("/chat", authMiddleware, mentorChat);
router.patch("/roadmap/day/:dayNumber", authMiddleware, updateMission);

module.exports = router;
