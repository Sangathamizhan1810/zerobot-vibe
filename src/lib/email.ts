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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeOrg = escapeHtml(data.organization || "Not Specified");
  const safeInquiryType = escapeHtml(data.inquiryType);
  const safeReferenceId = escapeHtml(data.referenceId);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

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
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark light">
  <meta name="supported-color-schemes" content="dark light">
  <title>ZeroBots Enquiry - ${safeReferenceId}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #020609; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <!-- Outer Wrapper Table -->
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #020609; width: 100%; margin: 0; padding: 16px 8px;">
    <tr>
      <td align="center" style="padding: 0;">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; width: 100%; background-color: #06121e; border: 1px solid rgba(0, 240, 255, 0.25); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);">
          
          <!-- Top Cyber Accent Line -->
          <tr>
            <td style="height: 3px; background-color: #00f0ff; line-height: 3px; font-size: 3px;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 24px 20px 20px 20px; background-color: #040e17; border-bottom: 1px solid rgba(0, 240, 255, 0.15);">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h1 style="margin: 0 0 10px 0; color: #ffffff; font-size: 19px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">
                      ZER<span style="color: #00f0ff;">O</span>BOTS • DISPATCH GATEWAY
                    </h1>
                    <div style="display: inline-block; padding: 5px 12px; background-color: rgba(0, 240, 255, 0.12); border: 1px solid rgba(0, 240, 255, 0.35); border-radius: 20px; color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;">
                      ${safeInquiryType}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 24px 20px;">

              <!-- Reference ID Badge -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 18px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">
                      REFERENCE ID
                    </div>
                    <div style="display: inline-block; background-color: #020609; color: #00f0ff; border: 1px solid rgba(0, 240, 255, 0.4); font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; font-weight: 700; padding: 7px 14px; border-radius: 6px; letter-spacing: 0.05em;">
                      ${safeReferenceId}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Sender Name -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                      SENDER NAME
                    </div>
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff; line-height: 1.4;">
                      ${safeName}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Sender Email -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                      SENDER EMAIL
                    </div>
                    <div style="font-size: 15px; font-weight: 600; line-height: 1.4; word-break: break-all; overflow-wrap: anywhere; word-wrap: break-word;">
                      <a href="mailto:${safeEmail}" style="color: #00f0ff; text-decoration: underline; text-underline-offset: 3px;">
                        ${safeEmail}
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Organization -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                      ORGANIZATION
                    </div>
                    <div style="font-size: 15px; font-weight: 600; color: #e2e8f0; line-height: 1.4;">
                      ${safeOrg}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Received At -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 22px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                      RECEIVED AT
                    </div>
                    <div style="font-size: 13px; color: #94a3b8; line-height: 1.4;">
                      ${timestamp} (IST)
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message Content Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">
                      ENQUIRY MESSAGE CONTENT
                    </div>
                    <div style="background-color: #02070d; border: 1px solid rgba(0, 240, 255, 0.2); border-left: 4px solid #00f0ff; border-radius: 8px; padding: 16px 18px; font-size: 14px; line-height: 1.65; color: #f1f5f9; word-break: break-word; overflow-wrap: anywhere; white-space: pre-wrap;">${safeMessage}</div>
                  </td>
                </tr>
              </table>

              <!-- Direct Reply Action CTA -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 8px; margin-bottom: 8px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display: block; width: 100%; max-width: 320px; box-sizing: border-box; background-color: #00f0ff; color: #020609; text-align: center; padding: 13px 20px; border-radius: 8px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; text-decoration: none;">
                      Reply Directly to Sender
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 18px 20px; background-color: #030a12; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #64748b; text-align: center; line-height: 1.6;">
              This inquiry was submitted through the official <strong>ZeroBots</strong> website portal.<br>
              Direct sender: <span style="color: #94a3b8;">${safeName}</span> &lt;<span style="color: #00f0ff; word-break: break-all;">${safeEmail}</span>&gt;
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
