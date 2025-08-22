import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// 📌 Form Submit API
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Notify admin
    await transporter.sendMail({
      from: `"Bimfrox Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `<h3>New Contact</h3><p><b>Name:</b> ${req.body.fullName}<br/>
             <b>Email:</b> ${req.body.email}<br/>
             <b>Phone:</b> ${req.body.number}<br/>
             <b>Service:</b> ${req.body.serviceType}<br/>
             <b>Budget:</b> ${req.body.budget}</p>`
    });

    await transporter.sendMail({
      from: `"Bimfrox Team" <${process.env.EMAIL_USER}>`,
      to: req.body.email,
      subject: "✅ Thanks for Contacting BIMFROX – Your Growth Partner Online!",
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
      
      <!-- Logo / Banner -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://res.cloudinary.com/duji9wpsp/image/upload/v1755586879/bimfroxlogo_qoghav.png" 
             alt="Bimfrox Logo" 
             style="width: 150px;" />
      </div>

      <!-- Greeting -->
      <p style="font-size: 16px; color: #333;">Hey 👋,</p>

      <!-- Main Message -->
      <p style="font-size: 16px; color: #333;">
        Thanks for contacting <b>BIMFROX — Your Growth Partner Online! 🎉</b> <br/>
        We’ve noted your message and our team is already preparing to assist you.
      </p>

      <p style="font-size: 16px; color: #333;">
        You can expect a call/email within <b>24 hours</b> from one of our web experts. We’ll walk you through:
      </p>

      <ul style="font-size: 15px; color: #333; padding-left: 20px;">
        <li>✨ How to build a professional, mobile-friendly website</li>
        <li>✨ Why an online presence is the fastest way to grow</li>
        <li>✨ Exclusive packages designed for small & growing businesses</li>
      </ul>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 25px 0;">
        <a href="https://portfolio-bimfrox-g585.onrender.com/" 
           style="background: #28a745; color: #fff; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: bold;">
          🚀 Check Our Packages
        </a>
      </div>

      <!-- Footer -->
      <p style="font-size: 15px; color: #333; margin-top: 20px;">
        We’re excited to help you turn your idea into a strong digital brand.
      </p>

      <p style="font-size: 15px; color: #333; margin-top: 30px;">
        See you soon, <br/>
        🚀 <b>Team BIMFROX</b>
      </p>
    </div>
  `
    });



    res.json({ success: true, message: "Form submitted & email sent." });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
  console.log("Email sent")
});
// admin dashbord

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
