import { NextResponse } from "next/server";
import { createLead } from "@/lib/lead-repository";

export const runtime = "nodejs";

interface LeadRequest {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  kvkkAccepted?: boolean;
  marketingAccepted?: boolean;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadRequest | null;
  const emailValid = typeof body?.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
  const requiredText = [body?.fullName, body?.company, body?.phone].every((value) => typeof value === "string" && value.trim().length > 1);

  if (!body || !requiredText || !emailValid || body.kvkkAccepted !== true) {
    return NextResponse.json({ error: "Geçerli iletişim bilgileri ve KVKK onayı gereklidir." }, { status: 400 });
  }

  const lead = createLead({ fullName: body.fullName!.trim(), company: body.company!.trim(), email: body.email!.trim(), phone: body.phone!.trim(), kvkkAccepted: true, marketingAccepted: body.marketingAccepted === true });
  const alert = { event: "new_b2b_demo_lead", leadId: lead.id, company: lead.company, email: lead.email, createdAt: lead.createdAt };

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.ALERT_EMAIL) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === "true", auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
      await transporter.sendMail({ from: process.env.SMTP_USER, to: process.env.ALERT_EMAIL, subject: "Yeni B2B Demo Talebi Geldi", text: `${lead.company} şirketinden ${lead.fullName} demo talebinde bulundu. E-posta: ${lead.email}` });
      console.info(JSON.stringify({ ...alert, notification: "smtp_sent", recipient: process.env.ALERT_EMAIL }));
    } catch (smtpError) {
      console.error(JSON.stringify({ ...alert, notification: "smtp_failed", error: smtpError instanceof Error ? smtpError.message : "Unknown SMTP error" }));
    }
  } else {
    console.info(JSON.stringify({ ...alert, notification: "structured_log_fallback", reason: "SMTP environment variables are not configured" }));
  }

  return NextResponse.json({ leadId: lead.id });
}