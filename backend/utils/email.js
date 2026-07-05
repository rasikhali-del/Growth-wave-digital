import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendLeadEmail(lead) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>
      body { font-family: 'Inter', Arial, sans-serif; background: #f5f5f5; padding: 40px; }
      .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
      .header { background: linear-gradient(135deg, #A22AFF, #6B2FA0); padding: 32px; text-align: center; }
      .header h1 { color: #fff; margin: 0; font-size: 24px; }
      .body { padding: 32px; }
      .field { margin-bottom: 16px; }
      .field label { font-size: 12px; text-transform: uppercase; color: #888; letter-spacing: 1px; font-weight: 600; }
      .field p { margin: 4px 0 0; font-size: 16px; color: #222; }
      .badge { display: inline-block; background: #A22AFF; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-top: 20px; }
      .footer { text-align: center; padding: 24px; color: #888; font-size: 13px; border-top: 1px solid #eee; }
    </style></head>
    <body>
      <div class="container">
        <div class="header"><h1>🚀 New Lead Received</h1></div>
        <div class="body">
          <div class="field"><label>Name</label><p>${lead.name}</p></div>
          ${lead.company ? `<div class="field"><label>Company</label><p>${lead.company}</p></div>` : ""}
          ${lead.website ? `<div class="field"><label>Website</label><p>${lead.website}</p></div>` : ""}
          <div class="field"><label>Email</label><p>${lead.email}</p></div>
          <div class="field"><label>Phone</label><p>${lead.phone}</p></div>
          ${lead.country ? `<div class="field"><label>Country</label><p>${lead.country}</p></div>` : ""}
          ${lead.service ? `<div class="field"><label>Service</label><p>${lead.service}</p></div>` : ""}
          ${lead.budget ? `<div class="field"><label>Budget</label><p>${lead.budget}</p></div>` : ""}
          ${lead.message ? `<div class="field"><label>Message</label><p>${lead.message}</p></div>` : ""}
          <div class="badge">Source: ${lead.source}</div>
        </div>
        <div class="footer">Growth Wave Digital — Lead Management</div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Growth Wave Digital" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Lead: ${lead.name} — ${lead.service || "General Inquiry"}`,
    html,
  });
}
