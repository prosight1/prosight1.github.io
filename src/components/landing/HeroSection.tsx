"use client";

import dynamic from "next/dynamic";
import { ArrowRight, CircleCheck, Network, Radio, ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { HERO_CONTENT } from "@/constants/hero";

const GatewayFlow = dynamic(() => import("@/components/ui/gateway-flow"), {
  ssr: false,
  loading: () => (
    <div className="h-[540px] w-full animate-pulse rounded-2xl border border-cyan-500/20 bg-card/40 backdrop-blur-xl flex items-center justify-center">
      <span className="text-xs uppercase tracking-widest text-cyan-400/60 font-mono">Telemetri Akışı Yükleniyor...</span>
    </div>
  ),
});

export function HeroSection() {
  const openDemo = () => window.dispatchEvent(new Event(HERO_CONTENT.demoEventName));
  const discoverTwin = () => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="hero" className="scroll-mt-20 mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-300">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-emerald-400" /></span>
          {HERO_CONTENT.badge}
        </div>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl">{HERO_CONTENT.titleLine1}<span className="mt-2 block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">{HERO_CONTENT.titleHighlight}</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">{HERO_CONTENT.description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton variant="primary" size="xl" showLivePulse icon={ArrowRight} onClick={openDemo}>
            Canlı Demoyu Başlat (2 Dakikada Kurulum)
          </CtaButton>
          <CtaButton variant="secondary" size="xl" icon={Network} onClick={discoverTwin}>
            Ağ İkizini Keşfet
          </CtaButton>
        </div>
        <div className="mt-12 flex items-center gap-4 border-t border-border pt-6">
          <div className="flex -space-x-2" aria-label="Dağıtık doğrulama düğümleri"><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-sky-500 text-[10px] font-bold text-slate-950">C</span><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-emerald-400 text-[10px] font-bold text-slate-950">F</span><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-amber-300 text-[10px] font-bold text-slate-950">P</span><span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-slate-500 text-[10px] font-bold text-white">+</span></div>
          <div><p className="flex items-center gap-1 text-sm font-semibold text-foreground"><CircleCheck className="size-4 text-emerald-400" />{HERO_CONTENT.socialProof.nodeCount}</p><p className="mt-1 text-xs text-muted-foreground">{HERO_CONTENT.socialProof.subtext}</p></div>
        </div>
      </div>
      <div className="relative h-[540px] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#030712] shadow-[0_0_50px_rgba(6,182,212,0.15)] pointer-events-auto">
        <div className="absolute inset-0"><GatewayFlow /></div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(56,189,248,0.04)_50%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-sky-300"><Radio className="size-3 animate-pulse" />{HERO_CONTENT.telemetry.eyebrow}</div>
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 font-mono text-[10px] text-slate-300"><div><p className="mb-2 text-sky-300">{HERO_CONTENT.telemetry.title}</p><p>ACTIVE CORE NODES: <span className="text-emerald-300">{HERO_CONTENT.telemetry.activeNodes}</span></p><p>POLICY MATRIX: <span className="text-emerald-300">{HERO_CONTENT.telemetry.policyMatrix}</span></p></div><div className="text-right"><ShieldCheck className="ml-auto mb-2 size-6 text-emerald-400" /><p className="text-emerald-300">{HERO_CONTENT.telemetry.drift}</p></div></div>
      </div>
    </section>
  );
}