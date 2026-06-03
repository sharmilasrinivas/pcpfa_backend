import express from "express";

import {
  syncDataset
} from "../controllers/syncController.js";

import {
  healthCheck
} from "../controllers/healthController.js";

const router = express.Router();

router.post("/sync", syncDataset);

router.get("/health", healthCheck);

export default router;