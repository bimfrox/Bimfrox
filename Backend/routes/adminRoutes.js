import express from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const router = express.Router();

// ========================
// POST /admin/login
// ========================
router.post("/login", async (req, res) => {
  try {
    console.log("📩 /admin/login request received:", req.body);

    const { username, password } = req.body;
    if (!username || !password) {
      console.log("❌ Missing username or password");
      return res.status(400).json({ success: false, message: "Missing credentials" });
    }

    const admin = await Admin.findOne({ username });
    console.log("🔍 Admin lookup result:", admin);

    if (!admin) {
      console.log("❌ Admin not found");
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log("🔑 Password match:", isMatch);

    if (!isMatch) {
      console.log("❌ Invalid password attempt for:", username);
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.otp = otp;
    admin.otpExpiry = Date.now() + 5 * 60 * 1000;
    await admin.save();

    console.log("✅ OTP generated:", otp, "Expiry:", admin.otpExpiry);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    console.log("📧 Sending OTP email to:", process.env.ADMIN_EMAIL);

    await transporter.sendMail({
      from: `"Bimfrox Security" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🔐 OTP Verification",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    console.log("✅ OTP email sent successfully");

    res.json({ success: true, message: "Login successful, OTP sent to email" });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ========================
// POST /admin/verify-otp
// ========================
router.post("/verify-otp", async (req, res) => {
  try {
    console.log("📩 /admin/verify-otp request received:", req.body);

    const { username, otp } = req.body;
    if (!username || !otp) {
      console.log("❌ Missing username or otp");
      return res.status(400).json({ success: false, message: "Missing credentials" });
    }

    const admin = await Admin.findOne({ username });
    console.log("🔍 Admin lookup result:", admin);

    if (!admin) {
      console.log("❌ Admin not found");
      return res.status(401).json({ success: false, message: "User not found" });
    }

    if (!admin.otp || admin.otpExpiry < Date.now()) {
      console.log("❌ OTP expired or not generated:", admin.otp, admin.otpExpiry);
      return res.status(400).json({ success: false, message: "OTP expired or not generated" });
    }

    console.log("🔑 Comparing OTP:", otp, "with stored:", admin.otp);

    if (admin.otp !== otp) {
      console.log("❌ Invalid OTP entered:", otp);
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    admin.otp = null;
    admin.otpExpiry = null;
    await admin.save();

    console.log("✅ OTP verified, generating token");

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("🎟️ JWT generated:", token);

    res.json({ success: true, message: "OTP verified successfully", token });
  } catch (err) {
    console.error("❌ OTP verify error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
