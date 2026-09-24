"use client";

import { Activity, Check, Code2, FileCheck, Network, Route, ShieldCheck, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { FEATURES_SECTION_DATA } from "@/constants/features";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Activity,
  Code2,
  FileCheck,
  Network,
  Route,
  ShieldCheck,
};

export function FeaturesSection() {
  const openArchitecture = () => window.dispatchEvent(new Event(FEATURES_SECTION_DATA.demoEventName));

  return (
    <section id="features" className="scroll-mt-20 border-y border-border px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">{FEATURES_SECTION_DATA.badge}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">{FEATURES_SECTION_DATA.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{FEATURES_SECTION_DATA.description}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES_SECTION_DATA.features.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <article key={feature.id} className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_34px_rgba(34,211,238,0.1)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4"><div className="flex size-11 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-cyan-300"><Icon className="size-5" /></div><span className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{feature.category}</span></div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-400">{feature.technicalBadge}</p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                <ul className="mt-6 space-y-2 border-t border-border/70 pt-5">{feature.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />{highlight}</li>)}</ul>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-emerald-950/40 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-[0_0_40px_rgba(6,182,212,0.12)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-300">NSPM CORE</p>
            <p className="mt-2 text-lg font-semibold text-foreground">Mimarinin her katmanını canlı olarak inceleyin.</p>
          </div>
          <CtaButton
            variant="primary"
            size="xl"
            showLivePulse
            icon={Sparkles}
            className="shrink-0"
            onClick={openArchitecture}
          >
            {FEATURES_SECTION_DATA.ctaLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}