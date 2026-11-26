import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/user.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("WedPlan server is running!");
});

export default app;