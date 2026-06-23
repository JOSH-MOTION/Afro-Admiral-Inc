"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  additionalInfo: string;
}) {
  const { firstName, lastName, email, phone, serviceType, additionalInfo } = formData;

  // Configure your SMTP transport
  let transporter;
  let isTestAccount = false;

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Use real Gmail account if credentials exist
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Fallback to a test account for development if credentials are not set
    console.warn("No EMAIL_USER or EMAIL_PASS provided. Falling back to Ethereal test account.");
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    isTestAccount = true;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || '"Afro Admiral Test" <test@afroadmiral.com>',
    to: "afroadmiral@gmail.com", // Send to the email in the footer
    replyTo: email,
    subject: `New Contact Request: ${serviceType} - ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service Type: ${serviceType}
      Additional Info: ${additionalInfo}
    `,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0e4ee5;">New Contact Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service Type:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Additional Info:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${additionalInfo || 'N/A'}</td>
          </tr>
        </table>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (isTestAccount) {
      console.log("Email sent! You can view it here: %s", nodemailer.getTestMessageUrl(info));
    }

    return { success: true };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
