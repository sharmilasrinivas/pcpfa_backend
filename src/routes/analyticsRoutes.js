import express from "express";

import {
  getIssueAnalytics,
  getProjectAnalytics,
  getDeveloperAnalytics
}
from "../controllers/analyticsController.js";

const router = express.Router();

router.get(
  "/issues",
  getIssueAnalytics
);

router.get(
  "/projects",
  getProjectAnalytics
);

router.get(
  "/developers",
  getDeveloperAnalytics
);

export default router;