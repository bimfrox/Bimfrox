import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// ✅ Fix CORS (remove trailing slash in origin, and use array properly)
app.use(
  cors({
    origin: [
      "https://bimfrox-ankit.onrender.com", // frontend (Render deployed React)
      "http://localhost:5173",              // local dev React
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
