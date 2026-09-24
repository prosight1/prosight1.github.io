"use client";

import { CheckCircle2, Minus, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ECOSYSTEM_DATA } from "@/constants/ecosystem";

const OrbitingCirclesGlobe = dynamic(() => import("@/components/ui/orbiting-circles-02"), {
  ssr: false,
  loading: () => (
    <div
      className="mx-auto aspect-square w-full max-w-[38rem] animate-pulse rounded-full border border-cyan-500/20 bg-slate-950/20 flex items-center justify-center"
      aria-label="Ekosistem görseli yükleniyor"
    >
      <span className="text-xs font-mono uppercase tracking-widest text-cyan-400/60">Yörünge Ağ Yükleniyor...</span>
    </div>
  ),
});

const matrixColumns = [
  ["l2l3Topology", "L2/L3 Topoloji"],
  ["configBackup", "Yedekleme & Diff"],
  ["pathFinder", "Yol Analizi"],
  ["ruleTranspiler", "Kural Transpiler"],
  ["complianceAudit", "Uyumluluk Denetimi"],
] as const;

export function EcosystemSection() {
  const openVendorReview = () => window.dispatchEvent(new Event(ECOSYSTEM_DATA.demoEventName));

  return (
    <section id="ecosystem" className="scroll-mt-20 border-y border-border px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">{ECOSYSTEM_DATA.badge}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">{ECOSYSTEM_DATA.title}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{ECOSYSTEM_DATA.description}</p>
        </div>
        <div className="mt-14"><OrbitingCirclesGlobe /></div>
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <caption className="sr-only">Üretici destek ve özellik matrisi</caption>
              <thead>
                <tr className="border-b border-border bg-muted/40 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <th className="p-4">Üretici / İşletim Sistemi</th>
                  <th className="p-4">Desteklenen Modeller</th>
                  {matrixColumns.map(([, label]) => <th key={label} className="p-4 text-center">{label}</th>)}
                </tr>
              </thead>
              <tbody>
                {ECOSYSTEM_DATA.matrix.map((vendor) => (
                  <tr key={vendor.vendor} className="border-b border-border/70 last:border-0 hover:bg-muted/30">
                    <td className="p-4 font-semibold text-foreground">{vendor.vendor}</td>
                    <td className="p-4 text-sm text-muted-foreground">{vendor.models}</td>
                    {matrixColumns.map(([key, label]) => (
                      <td key={`${vendor.vendor}-${label}`} className="p-4 text-center">
                        {vendor[key] ? <CheckCircle2 className="mx-auto size-5 text-emerald-400" aria-label="Destekleniyor" /> : <Minus className="mx-auto size-5 text-muted-foreground" aria-label="Geliştirilmekte" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-emerald-950/40 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-[0_0_40px_rgba(6,182,212,0.1)]">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <ShieldCheck className="size-5 text-emerald-400" />
              <h3 className="text-xl font-semibold text-foreground">Çok satıcılı yapınızı tek akışta görün.</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Mevcut cihaz ve araçlarınızı AllConfig kontrol katmanında birlikte değerlendirelim.</p>
          </div>
          <Button
            size="lg"
            className="shrink-0 bg-gradient-to-r from-cyan-400 to-emerald-400 font-semibold text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300"
            onClick={openVendorReview}
          >
            {ECOSYSTEM_DATA.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}