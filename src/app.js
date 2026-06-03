import express from "express";
import cors from "cors";

import syncRoutes from "./routes/syncRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import issueRoutes from "./routes/issueRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.json({
    success: true,
    message:
      "Issue Tracker API Running"
  });

});

app.use("/", syncRoutes);

app.use("/users", userRoutes);

app.use("/projects", projectRoutes);

app.use("/issues", issueRoutes);

app.use("/comments", commentRoutes);

app.use("/analytics", analyticsRoutes);

app.use(errorMiddleware);

export default app;