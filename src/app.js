import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/user.route.js";
import { bookingRoutes, serviceRoutes } from "./modules/services/service.route.js";
import { globalErrorHandler, notFound } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/service", serviceRoutes)

// Health Check
app.get("/", (req, res) => {
  res.send("WedPlan server is running!");
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;