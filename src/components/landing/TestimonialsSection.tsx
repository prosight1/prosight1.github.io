"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { TESTIMONIALS_DATA } from "@/constants/testimonials";

export function TestimonialsSection() {
  const openCaseStudy = () => window.dispatchEvent(new Event(TESTIMONIALS_DATA.demoEventName));

  return (
    <section id="testimonials" className="scroll-mt-20 border-y border-border px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center"><p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">{TESTIMONIALS_DATA.badge}</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">{TESTIMONIALS_DATA.title}</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">{TESTIMONIALS_DATA.description}</p></div>
        <div className="mt-12"><StaggerTestimonials items={TESTIMONIALS_DATA.items} /></div>
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border border-amber-400/20 bg-amber-400/5 p-6 text-center sm:flex-row sm:text-left"><div><div className="flex items-center justify-center gap-2 sm:justify-start"><ShieldCheck className="size-5 text-emerald-400" /><h3 className="text-xl font-semibold text-foreground">{TESTIMONIALS_DATA.ctaTitle}</h3></div><p className="mt-2 text-sm text-muted-foreground">Operasyonel güveni ve ölçülebilir kazanımı kendi ağınızda görün.</p></div><Button size="lg" className="shrink-0 gap-2 bg-amber-300 text-slate-950 hover:bg-amber-200" onClick={openCaseStudy}>{TESTIMONIALS_DATA.ctaLabel}<ArrowRight className="size-4" /></Button></div>
      </div>
    </section>
  );
}