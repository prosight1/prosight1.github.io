export interface LeadRecord {
  id: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  kvkkAccepted: boolean;
  marketingAccepted: boolean;
  createdAt: string;
  qualifications?: Record<string, string>;
}

const globalForLeadStore = globalThis as typeof globalThis & { __allconfigLeads?: LeadRecord[] };
const leads = globalForLeadStore.__allconfigLeads ?? (globalForLeadStore.__allconfigLeads = []);

export function createLead(input: Omit<LeadRecord, "id" | "createdAt" | "qualifications">) {
  const lead: LeadRecord = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  leads.push(lead);
  return lead;
}

export function updateLeadQualifications(id: string, qualifications: Record<string, string>) {
  const lead = leads.find((item) => item.id === id);
  if (!lead) return null;
  lead.qualifications = qualifications;
  return lead;
}