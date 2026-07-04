const express = require("express");
const router = express.Router();

const authMiddleware = require("../../../middleware/auth.middleware");
const upload = require("../utils/upload");

const {
  createResource,
  getResources,
  deleteResource,
} = require("../controllers/resource.controller");

router.post(
  "/",
  authMiddleware,
  upload.single("file"),
  createResource
);

router.get(
  "/",
  authMiddleware,
  getResources
);

router.delete(
  "/:id",
  authMiddleware,
  deleteResource
);

module.exports = router;