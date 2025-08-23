git add 
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
      <h2 style="text-align:center; color:#2c3e50;">Hey 👋</h2>
      <p style="font-size:16px; line-height:1.6;">
        Thanks for contacting <b>BIMFROX — Your Growth Partner Online! 🎉</b><br><br>
        We’ve noted your message and our team is already preparing to assist you.
      </p>
      <p style="font-size:16px; line-height:1.6;">
        You can expect a call/email within <b>24 hours</b> from one of our web experts. We’ll walk you through:
      </p>
      <ul style="font-size:16px; line-height:1.6;">
        <li>✨ How to build a professional, mobile-friendly website</li>
        <li>✨ Why an online presence is the fastest way to grow</li>
        <li>✨ Exclusive packages designed for small & growing businesses</li>
      </ul>
      <p style="font-size:16px; line-height:1.6;">
        ⏳ Till then, don’t miss out: <a href="https://yourdomain.com" target="_blank" style="color:#007bff; text-decoration:none;">Check this out</a>
      </p>
      <p style="font-size:16px; line-height:1.6;">
        We’re excited to help you turn your idea into a strong digital brand.
      </p>
      <p style="margin-top:20px; font-size:16px; text-align:center;">
        🚀 <b>Team BIMFROX</b>
      </p>
    </div>
  `,
});