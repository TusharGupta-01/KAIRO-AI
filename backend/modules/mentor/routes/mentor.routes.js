const express = require("express");
const router = express.Router();

const authMiddleware = require("../../../middleware/auth.middleware");
const {
  onboarding,
  getProfile,
  updateProfile,
} = require("../controllers/onboarding.controller");

router.post("/onboarding", authMiddleware, onboarding);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
module.exports = router;
