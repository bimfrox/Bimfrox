import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";

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
// API Routes
// ========================
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);

// ========================
// MongoDB connection
// ========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ========================
// Serve React frontend (Vite) with SPA fallback
// ========================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.join(__dirname, "../Frontend/dist");

// Use history fallback for React Router
app.use(history({
  index: '/index.html',
  verbose: true
}));

// Serve static files
app.use(express.static(frontendDist));

// ========================
// Start server
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
