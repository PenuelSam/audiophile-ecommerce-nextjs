import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 587);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export const mailer =
  host && user && pass
    ? nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })
    : null;

export async function sendHtmlMail({
  to,
  subject,
  html,
  from = process.env.EMAIL_FROM || 'Audiophile <no-reply@audiophile.app>',
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  if (!mailer) {
    console.warn('SMTP not configured, skipping email.');
    return;
  }
  await mailer.sendMail({ from, to, subject, html });
}
