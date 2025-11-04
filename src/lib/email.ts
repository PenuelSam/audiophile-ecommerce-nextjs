import { Resend } from "resend";
import { formatCurrency } from "./format";
import { OrderPayloadInput } from "./validation";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOrderConfirmationEmail(orderId: string, payload: OrderPayloadInput) {
  const { customer, items, totals } = payload;
  const from = process.env.EMAIL_FROM || "Audiophile <orders@audiophile.app>";

  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️ RESEND_API_KEY not set — skipping email send.");
    return;
  }

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Audiophile Order</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td style="padding: 40px 0;">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" align="center" style="background:#ffffff; border-radius:12px; overflow:hidden;">
            <tr>
              <td style="background:#101010; color:#ffffff; padding:32px; text-align:center;">
                <h1 style="margin:0; font-size:24px; text-transform:uppercase; letter-spacing:2px;">Thank you for your order!</h1>
                <p style="margin:16px 0 0; font-size:14px; color:rgba(255,255,255,0.75);">Order #${orderId}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px; color:#101010;">
                <p style="font-size:16px; margin:0 0 16px;">Hi ${customer.name},</p>
                <p style="font-size:15px; line-height:1.6; margin:0 0 24px;">
                  We’re getting your order ready to be shipped. We’ll notify you when it’s sent.
                </p>

                <h2 style="font-size:18px; margin:0 0 12px; text-transform:uppercase;">Order summary</h2>
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:24px;">
                  ${items.map(
                    (item) => `
                    <tr>
                      <td style="padding:8px 0; font-size:14px;">
                        <strong>${item.name}</strong><br />
                        <span style="color:#6b7280;">Qty: ${item.quantity}</span>
                      </td>
                      <td style="padding:8px 0; text-align:right; font-size:14px;">
                        ${formatCurrency(item.price * item.quantity)}
                      </td>
                    </tr>`
                  ).join("")}
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="font-size:14px; color:#6b7280;">Subtotal</td>
                    <td style="font-size:14px; text-align:right;">${formatCurrency(totals.subtotal)}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px; color:#6b7280;">Shipping</td>
                    <td style="font-size:14px; text-align:right;">${formatCurrency(totals.shipping)}</td>
                  </tr>
                  <tr>
                    <td style="font-size:14px; color:#6b7280;">Tax</td>
                    <td style="font-size:14px; text-align:right;">${formatCurrency(totals.tax)}</td>
                  </tr>
                  <tr>
                    <td style="font-size:16px; font-weight:bold; padding-top:12px;">Grand total</td>
                    <td style="font-size:16px; font-weight:bold; text-align:right; padding-top:12px;">${formatCurrency(totals.grandTotal)}</td>
                  </tr>
                </table>

                <div style="margin-top:32px;">
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}/order/${orderId}" 
                     style="display:inline-block; padding:12px 24px; background:#D87D4A; color:#ffffff; 
                     text-decoration:none; text-transform:uppercase; font-weight:bold; 
                     letter-spacing:1px; border-radius:6px;">
                    View your order
                  </a>
                </div>

                <h3 style="font-size:16px; margin:32px 0 12px; text-transform:uppercase;">Shipping address</h3>
                <p style="font-size:14px; line-height:1.6; margin:0;">
                  ${customer.address}<br />
                  ${customer.city}, ${customer.country} ${customer.zip}<br />
                  ${customer.phone}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  try {
    const result = await resend.emails.send({
      from,
      to: customer.email,
      subject: `Your Audiophile order (#${orderId})`,
      html,
    });

    console.log("✅ Email sent successfully:", result);
  } catch (error) {
    console.error("❌ Failed to send email via Resend:", error);
  }
}
