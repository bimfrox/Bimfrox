import express from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const router = express.Router();

// POST /admin/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid credentials" });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.otp = otp;
    admin.otpExpiry = Date.now() + 5 * 60 * 1000;
    await admin.save();

    console.log(otp)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Bimfrox Security" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🔐 OTP Verification",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    res.json({ success: true, message: "Login successful, OTP sent to email" });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
// POST /admin/verify-otp
router.post("/verify-otp", async (req, res) => {
  try {
    const { username, otp } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ success: false, message: "User not found" });

    if (!admin.otp || admin.otpExpiry < Date.now())
      return res.status(400).json({ success: false, message: "OTP expired or not generated" });

    if (admin.otp !== otp)
      return res.status(400).json({ success: false, message: "Invalid OTP" });

    admin.otp = null;
    admin.otpExpiry = null;
    await admin.save();

    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ success: true, message: "OTP verified successfully", token });
  } catch (err) {
    console.error("❌ OTP verify error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
