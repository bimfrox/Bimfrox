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

// ✅ CORS
app.use(
  cors({
    origin: [
      "https://bimfrox-ankit.onrender.com", // Render frontend
      "http://localhost:5173",              // Local dev
    ],
    credentials: true,
  })
);

app.use(express.json());

// ✅ API Routes
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Serve React frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../Frontend/dist"))); // Adjust if your build folder is elsewhere

// ✅ Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
