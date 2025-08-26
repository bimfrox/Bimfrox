import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log("✅ MongoDB Connected");

  const username = "Ankit";   // set your admin username here
  const password = "Ankit@118"; // set your admin password here

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if admin exists
  let admin = await Admin.findOne({ username });
  if (admin) {
    console.log("⚠ Admin already exists");
  } else {
    admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    console.log("✅ Admin created successfully:", username);
  }

  mongoose.disconnect();
})
.catch(err => console.error("❌ DB Error:", err));
