"use client";

import { CheckCircle2, LoaderCircle, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FUNNEL_DATA } from "@/constants/funnel";

type ContactValues = { fullName: string; company: string; email: string; phone: string; kvkkAccepted: boolean; marketingAccepted: boolean };

const initialContact: ContactValues = { fullName: "", company: "", email: "", phone: "", kvkkAccepted: false, marketingAccepted: false };

export function FunnelModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [contact, setContact] = useState(initialContact);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [leadId, setLeadId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const open = () => { setIsOpen(true); setSubmitted(false); setError(""); };
    window.addEventListener(FUNNEL_DATA.eventName, open);
    return () => window.removeEventListener(FUNNEL_DATA.eventName, open);
  }, []);

  const close = () => { if (isSubmitting) return; setIsOpen(false); setStep(1); setContact(initialContact); setAnswers({}); setLeadId(""); setSubmitted(false); setError(""); };
  const updateContact = (field: keyof ContactValues, value: string | boolean) => setContact((current) => ({ ...current, [field]: value }));

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError("");
    if (!contact.kvkkAccepted) { setError(FUNNEL_DATA.validation.kvkkRequired); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || FUNNEL_DATA.validation.submitError);
      setLeadId(result.leadId); setStep(2);
    } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : FUNNEL_DATA.validation.unexpectedError); } finally { setIsSubmitting(false); }
  };

  const submitQualification = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError("");
    if (Object.keys(answers).length !== FUNNEL_DATA.questions.length) { setError(FUNNEL_DATA.validation.allQuestionsRequired); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead/qualification", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ leadId, answers }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || FUNNEL_DATA.validation.qualificationError);
      setSubmitted(true);
    } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : FUNNEL_DATA.validation.unexpectedError); } finally { setIsSubmitting(false); }
  };

  if (!isOpen) return null;
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm" role="presentation" onClick={close}>
    <div role="dialog" aria-modal="true" aria-labelledby="funnel-title" className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
      <div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-400">{step === 1 ? FUNNEL_DATA.step1.badge : FUNNEL_DATA.step2.badge}</p><h2 id="funnel-title" className="mt-2 text-2xl font-semibold text-foreground">{submitted ? FUNNEL_DATA.success.title : step === 1 ? FUNNEL_DATA.step1.title : FUNNEL_DATA.step2.title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{submitted ? FUNNEL_DATA.success.description : step === 1 ? FUNNEL_DATA.step1.description : FUNNEL_DATA.step2.description}</p></div><Button variant="ghost" size="icon" aria-label="Pencereyi kapat" onClick={close}><X /></Button></div>
      {submitted ? <div className="grid place-items-center py-14 text-center"><CheckCircle2 className="size-16 animate-pulse text-emerald-400" /><Button className="mt-8" onClick={close}>{FUNNEL_DATA.success.closeButton}</Button></div> : step === 1 ? <form className="mt-7 space-y-4" onSubmit={submitContact}><div className="grid gap-4 sm:grid-cols-2"><Field label={FUNNEL_DATA.fields.fullName} value={contact.fullName} onChange={(value) => updateContact("fullName", value)} required /><Field label={FUNNEL_DATA.fields.company} value={contact.company} onChange={(value) => updateContact("company", value)} required /><Field label={FUNNEL_DATA.fields.email} type="email" value={contact.email} onChange={(value) => updateContact("email", value)} required /><Field label={FUNNEL_DATA.fields.phone} type="tel" value={contact.phone} onChange={(value) => updateContact("phone", value)} required /></div><Consent checked={contact.kvkkAccepted} onChange={(value) => updateContact("kvkkAccepted", value)}>{FUNNEL_DATA.fields.kvkk}</Consent><Consent checked={contact.marketingAccepted} onChange={(value) => updateContact("marketingAccepted", value)}>{FUNNEL_DATA.fields.marketing}</Consent><SubmitRow error={error} isSubmitting={isSubmitting} label={FUNNEL_DATA.step1.submitButton} /></form> : <form className="mt-7 space-y-5" onSubmit={submitQualification}>{FUNNEL_DATA.questions.map((question) => <label key={question.id} className="block text-sm font-medium text-foreground">{question.question}<select required value={answers[question.id] || ""} onChange={(event) => setAnswers((current) => ({ ...current, [question.id]: event.target.value }))} className="mt-2 h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"><option value="">{FUNNEL_DATA.validation.selectPlaceholder}</option>{question.options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>)}<SubmitRow error={error} isSubmitting={isSubmitting} label={FUNNEL_DATA.step2.submitButton} /></form>}
    </div>
  </div>;
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) { return <label className="block text-sm font-medium text-foreground">{label}<input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-border bg-card px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30" /></label>; }
function Consent({ checked, onChange, children }: { checked: boolean; onChange: (value: boolean) => void; children: string }) { return <label className="flex items-start gap-3 text-xs leading-5 text-muted-foreground"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-1 accent-sky-500" />{children}</label>; }
function SubmitRow({ error, isSubmitting, label }: { error: string; isSubmitting: boolean; label: string }) { return <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center"><p className="text-xs text-red-400">{error}</p><Button type="submit" disabled={isSubmitting} className="shrink-0 gap-2 bg-sky-500 text-slate-950 hover:bg-sky-400">{isSubmitting && <LoaderCircle className="size-4 animate-spin" />}{label}</Button></div>; }