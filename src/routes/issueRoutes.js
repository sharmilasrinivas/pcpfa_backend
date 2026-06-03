import express from "express";

import {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  assignIssue,
  updateIssueStatus
}
from "../controllers/issueController.js";

const router = express.Router();

router.post("/", createIssue);

router.get("/", getIssues);

router.get("/:id", getIssueById);

router.patch("/:id", updateIssue);

router.delete("/:id", deleteIssue);

router.patch(
  "/:id/assign",
  assignIssue
);

router.patch(
  "/:id/status",
  updateIssueStatus
);

export default router;