import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /contact
router.post("/", async (req, res) => {
  try {
    const { fullName, email, number, serviceType, budget } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: "Name and Email are required" });
    }

    const contact = new Contact(req.body);
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Bimfrox Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `<p><b>Name:</b> ${fullName}<br/><b>Email:</b> ${email}<br/><b>Phone:</b> ${number || "-"}<br/><b>Service:</b> ${serviceType || "-"}<br/><b>Budget:</b> ${budget || "-"}</p>`,
    });

    // Email to user
    await transporter.sendMail({
      from: `"Bimfrox Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for Contacting BIMFROX!",
      html: `<p>Hey 👋, thanks for contacting BIMFROX. Our team will reach out within 24 hours.</p>`,
    });

    res.json({ success: true, message: "Form submitted & emails sent." });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// GET /contact (for admin dashboard)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (err) {
    console.error("❌ Fetch contacts error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
