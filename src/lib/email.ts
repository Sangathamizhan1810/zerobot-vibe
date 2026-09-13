import nodemailer from "nodemailer";

export interface EnquiryPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: string;
  message: string;
  referenceId: string;
}

const COMPANY_EMAIL = "zerobots.official@gmail.com";

/**
 * Creates and returns the Nodemailer SMTP transporter.
 * Supports standard Gmail SMTP (using Google App Password) or custom SMTP.
 */
function createTransporter() {
  const user = (
    process.env.GMAIL_USER ||
    process.env.SMTP_USER ||
    COMPANY_EMAIL
  ).trim();

  const rawPass =
    process.env.GMAIL_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.EMAIL_APP_PASSWORD ||
    "";

  // Strip surrounding quotes and spaces (Google App Passwords are 16 characters often generated as 'xxxx xxxx xxxx xxxx')
  const pass = rawPass.replace(/^["']|["']$/g, "").replace(/\s+/g, "").trim();

  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = Number(process.env.SMTP_PORT) || 465;
  const isSecure = port === 465;

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends the enquiry details to zerobots.official@gmail.com
 */
export async function sendEnquiryNotification(data: EnquiryPayload) {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      `[Email Gateway Notice] SMTP credentials (GMAIL_APP_PASSWORD or SMTP_PASS) not found in environment variables. ` +
      `Enquiry ${data.referenceId} logged to console but not emailed to ${COMPANY_EMAIL}. ` +
      `To enable email delivery, add GMAIL_APP_PASSWORD to your .env.local file.`
    );
    return {
      sent: false,
      reason: "SMTP_CREDENTIALS_MISSING",
    };
  }

  const sanitizedMessage = data.message.replace(/\n/g, "<br />");
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const subject = `[ZeroBots Enquiry] ${data.inquiryType} from ${data.name} (${data.referenceId})`;

  const textContent = `
========================================
NEW ZEROBOTS INQUIRY RECEIVED
========================================
Reference ID: ${data.referenceId}
Date & Time:  ${timestamp} (IST)

CLIENT DETAILS:
- Full Name:    ${data.name}
- Email:        ${data.email}
- Organization: ${data.organization || "Not Specified"}
- Inquiry Type: ${data.inquiryType}

MESSAGE:
${data.message}

----------------------------------------
Reply directly to this email to respond to ${data.name} (${data.email}).
========================================
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #040e17; padding: 28px 32px; border-bottom: 2px solid #00f0ff; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: 0.1em; }
    .header h1 span { color: #00f0ff; }
    .badge { display: inline-block; padding: 4px 12px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 9999px; color: #008899; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-top: 8px; }
    .content { padding: 32px; }
    .field-group { margin-bottom: 20px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 600; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #00f0ff; border-radius: 8px; padding: 18px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 12px; white-space: pre-line; }
    .footer { background: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    .footer a { color: #008899; text-decoration: none; font-weight: 600; }
    .ref-box { background: #040e17; color: #00f0ff; font-family: monospace; font-size: 12px; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-top: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ZER<span>O</span>BOTS • DISPATCH GATEWAY</h1>
      <div class="badge">${data.inquiryType}</div>
    </div>
    
    <div class="content">
      <div class="field-group">
        <div class="field-label">Reference ID</div>
        <div class="ref-box">${data.referenceId}</div>
      </div>

      <div class="field-group" style="display: flex; gap: 24px;">
        <div style="flex: 1;">
          <div class="field-label">Sender Name</div>
          <div class="field-value">${data.name}</div>
        </div>
        <div style="flex: 1;">
          <div class="field-label">Sender Email</div>
          <div class="field-value"><a href="mailto:${data.email}" style="color: #008899; text-decoration: none;">${data.email}</a></div>
        </div>
      </div>

      <div class="field-group" style="display: flex; gap: 24px;">
        <div style="flex: 1;">
          <div class="field-label">Organization</div>
          <div class="field-value">${data.organization || "Not Specified"}</div>
        </div>
        <div style="flex: 1;">
          <div class="field-label">Received At</div>
          <div class="field-value" style="font-size: 13px; color: #64748b;">${timestamp}</div>
        </div>
      </div>

      <div class="field-group" style="margin-top: 24px;">
        <div class="field-label">Enquiry Message Content</div>
        <div class="message-box">${data.message}</div>
      </div>
    </div>

    <div class="footer">
      This enquiry was submitted via the official ZeroBots website portal.<br>
      You can <strong>reply directly to this email</strong> to respond to <strong>${data.name}</strong> (${data.email}).
    </div>
  </div>
</body>
</html>
`;

  const senderAddress =
    process.env.SMTP_FROM ||
    `"ZeroBots Gateway" <${process.env.SMTP_USER || COMPANY_EMAIL}>`;

  const info = await transporter.sendMail({
    from: senderAddress,
    to: COMPANY_EMAIL,
    replyTo: `"${data.name}" <${data.email}>`,
    subject,
    text: textContent,
    html: htmlContent,
  });

  console.log(`[Email Dispatched] Message sent successfully to ${COMPANY_EMAIL}. MessageId: ${info.messageId}`);
  return {
    sent: true,
    messageId: info.messageId,
  };
}
