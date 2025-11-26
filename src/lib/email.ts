import type { Content, OrderDetails } from "@/types";

interface BuildEmailParams {
  order: OrderDetails;
  thankYouContent: Content["thankYou"];
  origin?: string;
}

interface EmailPayload {
  subject: string;
  html: string;
  text: string;
}

const baseStyles = {
  body: "margin:0;padding:0;background-color:#020204;color:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;",
  container:
    "width:100%;max-width:620px;margin:0 auto;padding:32px 24px;background:linear-gradient(180deg,#0c0c10 0%,#050507 100%);border:1px solid #1c1c22;border-radius:18px;box-shadow:0 25px 45px rgba(0,0,0,0.65);",
  heading:
    "margin:0 0 8px 0;font-size:28px;letter-spacing:0.25em;text-transform:uppercase;font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;text-align:center;",
  subtitle:
    "margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#d4d4d8;text-align:center;font-family:'Segoe UI',Arial,sans-serif;",
  blockTitle:
    "margin:0;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#9ca3af;font-weight:bold;",
  blockValue:
    "margin:4px 0 0 0;font-size:18px;color:#f9fafb;font-family:'Segoe UI',Arial,sans-serif;",
  blockValueAccent:
    "margin:4px 0 0 0;font-size:20px;color:#8a0b0b;font-family:'Segoe UI',Arial,sans-serif;font-weight:bold;",
  divider: "width:100%;border:none;height:1px;background:#1f1f29;margin:24px 0;",
  button:
    "display:inline-block;margin-top:16px;padding:14px 24px;background-color:#8a0b0b;color:#ffffff;text-decoration:none;text-transform:uppercase;letter-spacing:0.3em;font-size:12px;border-radius:999px;font-family:'Segoe UI',Arial,sans-serif;",
  footer:
    "margin-top:32px;font-size:11px;line-height:1.6;color:#71717a;text-align:center;font-family:'Segoe UI',Arial,sans-serif;",
};

const textLine = (label: string, value: string) => `${label}: ${value}`;

export function buildOrderConfirmationEmail({
  order,
  thankYouContent,
  origin,
}: BuildEmailParams): EmailPayload {
  const supporterName = [order.donor.firstName, order.donor.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const supporterNotes = order.donor.notes?.trim();
  const formattedAmount = `${order.tier.price.toLocaleString()}${order.tier.currency}`;
  const thankYouUrl = origin ? `${origin.replace(/\/$/, "")}/thank-you` : "";

  const subject = `${thankYouContent.title} – ${order.orderId}`;

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="${baseStyles.body}">
    <div style="padding:32px 16px;">
      <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
          <td align="center">
            <div style="${baseStyles.container}">
              <div style="text-align:center;margin-bottom:24px;">
                <h1 style="${baseStyles.heading}">${thankYouContent.title}</h1>
                <p style="${baseStyles.subtitle}">${thankYouContent.subtitle}</p>
              </div>

              <table width="100%" cellPadding="0" cellSpacing="0" role="presentation" style="border:1px solid #1f1f29;border-radius:16px;background-color:rgba(0,0,0,0.45);padding:24px;">
                <tr>
                  <td style="padding-bottom:16px;border-bottom:1px solid #1f1f29;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.orderLabel}</div>
                    <div style="${baseStyles.blockValue}">${order.orderId}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #1f1f29;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.tierLabel}</div>
                    <div style="${baseStyles.blockValue}">${order.tier.name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #1f1f29;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.amountLabel}</div>
                    <div style="${baseStyles.blockValueAccent}">${formattedAmount}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #1f1f29;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.supporterLabel}</div>
                    <div style="${baseStyles.blockValue}">${supporterName || "—"}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #1f1f29;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.emailLabel}</div>
                    <div style="${baseStyles.blockValue}">${order.donor.email}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;">
                    <div style="${baseStyles.blockTitle}">${thankYouContent.notesLabel}</div>
                    <div style="${baseStyles.blockValue};white-space:pre-line;font-size:14px;color:#d4d4d8;">
                      ${supporterNotes || thankYouContent.notesEmpty}
                    </div>
                  </td>
                </tr>
              </table>

              ${thankYouUrl
                ? `<a href="${thankYouUrl}" style="${baseStyles.button}" target="_blank" rel="noreferrer">${thankYouContent.backBtn}</a>`
                : ""}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;

  const text = [
    thankYouContent.title,
    thankYouContent.subtitle,
    "",
    textLine(thankYouContent.orderLabel, order.orderId),
    textLine(thankYouContent.tierLabel, order.tier.name),
    textLine(
      thankYouContent.amountLabel,
      formattedAmount
    ),
    textLine(thankYouContent.supporterLabel, supporterName || "—"),
    textLine(thankYouContent.emailLabel, order.donor.email),
    `${thankYouContent.notesLabel}: ${supporterNotes || thankYouContent.notesEmpty}`,
    "",
    thankYouContent.emailNote,
    thankYouUrl ? `View details: ${thankYouUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}
