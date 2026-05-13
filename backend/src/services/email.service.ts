import nodemailer from 'nodemailer';
import { env } from '../config/env';

const transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpPort === 465,
    auth: {
        user: env.smtpUser,
        pass: env.smtpPass,
    },
});

interface InquiryEmailData {
    name: string;
    email: string;
    projectType: string;
    budgetRange: string;
    message: string;
}

export const sendInquiryNotification = async (data: InquiryEmailData): Promise<void> => {
    // Skip sending if SMTP is not configured
    if (!env.smtpUser || !env.smtpPass) {
        console.log('[Email] SMTP not configured. Skipping email notification.');
        console.log('[Email] Inquiry received:', data.name, data.email);
        return;
    }

    const htmlContent = `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(168,85,247,0.3);">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Project Inquiry 🚀</h1>
        </div>
        <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 12px 0; color: #a78bfa; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top; width: 120px;">Name</td>
                    <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; color: #a78bfa; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
                    <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px;"><a href="mailto:${data.email}" style="color: #a855f7;">${data.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; color: #a78bfa; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Project</td>
                    <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px;">${data.projectType}</td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; color: #a78bfa; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Budget</td>
                    <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px;">${data.budgetRange}</td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; color: #a78bfa; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                    <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">${data.message}</td>
                </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
                <a href="mailto:${data.email}" style="display: inline-block; background: #a855f7; color: #fff; padding: 12px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${data.name}</a>
            </div>
        </div>
    </div>`;

    await transporter.sendMail({
        from: `"Portfolio Inquiry" <${env.smtpUser}>`,
        to: env.notificationEmail,
        subject: `🚀 New Inquiry: ${data.projectType} from ${data.name}`,
        html: htmlContent,
    });
};
