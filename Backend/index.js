import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// ========================
// CORS
// ========================
app.use(
  cors({
    origin: [
      "https://bimfrox-ankit.onrender.com", // deployed frontend
      "http://localhost:5173",              // local dev
    ],
    credentials: true,
  })
);

// ========================
// Body parser
// ========================
app.use(express.json());

// ========================
// MongoDB connection
// ========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ========================
// API Routes (always prefix with /api)
// ========================
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// ========================
// Serve React frontend (Vite)
// ========================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.join(__dirname, "../Frontend/dist");

// Serve static files
app.use(express.static(frontendDist));

// ✅ Catch-all for React Router (Express 5 compatible)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendDist, "index.html"));
});

// ========================
// Start server
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
