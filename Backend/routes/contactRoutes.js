// backend/routes/contactRoutes.js
import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { fullName, email, number, serviceType } = req.body;

    if (!fullName || !email) {
      return res
        .status(400)
        .json({ success: false, message: "Name and Email are required" });
    }

    // Save contact info to DB
    const contact = new Contact({ fullName, email, number, serviceType });
    await contact.save();

    // Send response immediately to avoid timeout
    res.status(200).json({
      success: true,
      message: "Form submitted successfully! We’ll reach out soon.",
    });

    // Send emails asynchronously
    sendEmails({ fullName, email, number, serviceType });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Async function to send emails
async function sendEmails({ fullName, email, number, serviceType }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Bimfrox Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <p>
          <b>Name:</b> ${fullName}<br/>
          <b>Email:</b> ${email}<br/>
          <b>Phone:</b> ${number || "-"}<br/>
          <b>Service:</b> ${serviceType || "-"}
        </p>
      `,
    });

    // Email to user
    await transporter.sendMail({
      from: `"Bimfrox Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for Contacting BIMFROX!",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px; border-radius:10px; max-width:600px; margin:auto; color:#333;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="https://res.cloudinary.com/duji9wpsp/image/upload/v1755586879/bimfroxlogo_qoghav.png" alt="BIMFROX Logo" style="width:150px; margin-bottom:10px;" />
          </div>
          <h2 style="text-align:center; color:#2c3e50;">Hello ${fullName} 👋</h2>
          <p style="font-size:16px; line-height:1.6;">
            Thanks for contacting <b>BIMFROX — Your Growth Partner Online! 🎉</b><br><br>
            We’ve noted your message and our team is already preparing to assist you.
          </p>
          <p style="font-size:16px; line-height:1.6;">
            You can expect a call/email within <b>24 hours</b> from one of our web experts.
          </p>
          <p style="margin-top:20px; font-size:16px; text-align:center;">
            🚀 <b>Team BIMFROX</b>
          </p>
        </div>
      `,
    });

    console.log(`✅ Emails sent successfully for ${email}`);
  } catch (err) {
    console.error("⚠️ Email sending failed:", err.message);
  }
}

// GET /api/contact (for admin dashboard)
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
