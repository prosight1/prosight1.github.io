import { NextResponse } from "next/server";
import { updateLeadQualifications } from "@/lib/lead-repository";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { leadId?: string; answers?: Record<string, string> } | null;
  const answers = body?.answers;
  if (!body?.leadId || !answers || Object.keys(answers).length !== 5 || Object.values(answers).some((value) => typeof value !== "string" || !value.trim())) {
    return NextResponse.json({ error: "Beş analiz sorusunun tamamı yanıtlanmalıdır." }, { status: 400 });
  }

  const lead = updateLeadQualifications(body.leadId, answers);
  if (!lead) return NextResponse.json({ error: "Lead kaydı bulunamadı." }, { status: 404 });
  console.info(JSON.stringify({ event: "b2b_lead_qualified", leadId: lead.id, company: lead.company, createdAt: new Date().toISOString() }));
  return NextResponse.json({ success: true });
}