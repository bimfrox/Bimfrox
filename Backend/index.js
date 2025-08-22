import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";


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


  const _dirname = path.resolve();
  const frontenddist = path.join(_dirname, "../Frontend/dist");
  app.use(express.static(frontenddist));
  app.get("/",(req, res) => {
    res.sendFile(path.sendFile(path.join(frontenddist, "index.html")));
  }
)


// ========================
// Start server
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
