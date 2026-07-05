import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import leadRoutes from "./routes/lead.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json({ limit: "10kb" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});

app.use("/api/lead", limiter);
app.use("/api/lead", leadRoutes);

app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

export default app;