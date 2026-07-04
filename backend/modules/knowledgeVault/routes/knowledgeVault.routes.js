console.log("Knowledge Vault routes loaded");

const express = require("express");
const router = express.Router();

const authMiddleware = require("../../../middleware/auth.middleware");
const upload = require("../utils/upload");

const {
  create,
  getAll,
  update,
  remove,
} = require("../controllers/folder.controller");

const {
  createResource,
  createNote,
  createLink,
  getResources,
  deleteResource,
  toggleFavorite,
  getDeletedResources,
} = require("../controllers/resource.controller");


const {
  chat,
} = require("../controllers/chat.controller");
/* ==========================
   Folder Routes
========================== */

router.post(
  "/folders",
  authMiddleware,
  create
);

router.get(
  "/folders",
  authMiddleware,
  getAll
);

router.put(
  "/folders/:id",
  authMiddleware,
  update
);

router.delete(
  "/folders/:id",
  authMiddleware,
  remove
);

/* ==========================
   Resource Routes
========================== */

// Upload File
router.post(
  "/resources",
  authMiddleware,
  upload.single("file"),
  createResource
);

// Create Note
router.post(
  "/resources/note",
  authMiddleware,
  createNote
);

// Create Link
router.post(
  "/resources/link",
  authMiddleware,
  createLink
);

// Deleted Resources
// Keep this ABOVE "/resources"
router.get(
  "/resources/deleted",
  authMiddleware,
  getDeletedResources
);

// Get Resources
router.get(
  "/resources",
  authMiddleware,
  getResources
);

// Toggle Favorite
router.patch(
  "/resources/:id/favorite",
  authMiddleware,
  toggleFavorite
);

// Soft Delete
router.delete(
  "/resources/:id",
  authMiddleware,
  deleteResource
);
router.post(
  "/chat",
  authMiddleware,
  chat
);

module.exports = router;