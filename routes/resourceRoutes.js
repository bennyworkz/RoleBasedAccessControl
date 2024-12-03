const express = require("express");
const resourceController = require("../controllers/resourceController");
const { authenticate } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get(
  "/admin",
  authenticate,
  authorize(["admin"]),
  resourceController.getAdminData
);

router.get(
  "/editor",
  authenticate,
  authorize(["admin", "editor"]),
  resourceController.getEditorData
);

router.get(
  "/viewer",
  authenticate,
  authorize(["admin", "editor", "viewer"]),
  resourceController.getViewerData
);

module.exports = router;
