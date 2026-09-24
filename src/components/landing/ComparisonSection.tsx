"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, X } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { COMPARISON_SECTION_DATA } from "@/constants/comparison";

export function ComparisonSection() {
  const openAnalysis = () => window.dispatchEvent(new Event(COMPARISON_SECTION_DATA.demoEventName));

  return (
    <section id="comparison" className="scroll-mt-20 border-y border-border bg-muted/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">{COMPARISON_SECTION_DATA.badge}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">{COMPARISON_SECTION_DATA.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{COMPARISON_SECTION_DATA.description}</p>
        </div>

        <div className="mt-14 hidden grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 font-mono text-xs uppercase tracking-[0.16em] md:grid">
          <p className="text-red-300">{COMPARISON_SECTION_DATA.beforeLabel}</p>
          <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">VS</span>
          <p className="text-cyan-300">{COMPARISON_SECTION_DATA.afterLabel}</p>
        </div>

        <div className="mt-5 space-y-5">
          {COMPARISON_SECTION_DATA.items.map((item) => (
            <article key={item.id} className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-4">
              <div className="border border-red-500/20 bg-red-950/10 p-6 shadow-lg shadow-red-950/5">
                <div className="flex items-start justify-between gap-4"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-red-300">{item.category}</p><X className="size-5 shrink-0 text-red-400/80" /></div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.before.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.before.description}</p>
                <p className="mt-6 inline-flex border border-red-400/20 bg-red-400/10 px-3 py-2 font-mono text-xs text-red-300">{item.before.metric}</p>
              </div>
              <div className="hidden items-center justify-center md:flex"><ArrowRight className="size-5 text-muted-foreground" /></div>
              <div className="border border-cyan-500/40 bg-cyan-950/10 p-6 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
                <div className="flex items-start justify-between gap-4"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-300">{item.category}</p><CheckCircle2 className="size-5 shrink-0 text-emerald-400" /></div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.after.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.after.description}</p>
                <p className="mt-6 inline-flex border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 font-mono text-xs text-emerald-300">{item.after.metric}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-emerald-950/40 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-[0_0_40px_rgba(6,182,212,0.12)]">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <ShieldCheck className="size-5 text-emerald-400" />
              <h3 className="text-xl font-semibold text-foreground">Ağınızdaki İnsan Hatası ve Manuel Kural Risklerini Sıfırlayın</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Kritik yollarınızı, kural çakışmalarınızı ve uyumluluk açıklarınızı birlikte görünür kılalım.</p>
          </div>
          <CtaButton
            variant="primary"
            size="xl"
            showLivePulse
            icon={ArrowRight}
            className="shrink-0"
            onClick={openAnalysis}
          >
            Ücretsiz Risk & Topoloji Analizi İsteyin
          </CtaButton>
        </div>
      </div>
    </section>
  );
}