"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import type { TestimonialItem } from "@/constants/testimonials";

interface StaggerTestimonialsProps {
  items: TestimonialItem[];
}

export function StaggerTestimonials({ items }: StaggerTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const activeItem = items[activeIndex];
  const previousItem = items[(activeIndex - 1 + items.length) % items.length];
  const nextItem = items[(activeIndex + 1) % items.length];
  const move = (direction: -1 | 1) => setActiveIndex((index) => (index + direction + items.length) % items.length);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative min-h-[27rem] overflow-hidden px-2 py-8 sm:min-h-[24rem] md:min-h-[22rem]">
        <motion.div className="absolute left-0 top-1/2 hidden w-[31%] -translate-y-1/2 md:block" animate={{ rotate: -5, x: -8, scale: 0.92, opacity: 0.62 }} transition={{ duration: 0.35 }}>
          <TestimonialCard item={previousItem} position="side" />
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeItem.tempId} initial={{ opacity: 0, rotateY: 12, y: 18 }} animate={{ opacity: 1, rotateY: 0, y: 0 }} exit={{ opacity: 0, rotateY: -12, y: -18 }} transition={{ duration: 0.35 }} className="relative z-10 mx-auto w-full md:w-[58%]">
            <TestimonialCard item={activeItem} position="active" />
          </motion.div>
        </AnimatePresence>
        <motion.div className="absolute right-0 top-1/2 hidden w-[31%] -translate-y-1/2 md:block" animate={{ rotate: 5, x: 8, scale: 0.92, opacity: 0.62 }} transition={{ duration: 0.35 }}>
          <TestimonialCard item={nextItem} position="side" />
        </motion.div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button type="button" onClick={() => move(-1)} aria-label="Önceki referans" className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-muted"><ArrowLeft className="size-4" /></button>
        <div className="flex gap-1.5" aria-label="Referans seçimi">{items.map((item, index) => <button key={item.tempId} type="button" aria-label={`${index + 1}. referansı göster`} aria-current={index === activeIndex} onClick={() => setActiveIndex(index)} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"}`} />)}</div>
        <button type="button" onClick={() => move(1)} aria-label="Sonraki referans" className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-muted"><ArrowRight className="size-4" /></button>
      </div>
    </div>
  );
}

function TestimonialCard({ item, position }: { item: TestimonialItem; position: "active" | "side" }) {
  return (
    <article className={`relative min-h-[19rem] overflow-hidden rounded-2xl border p-7 ${position === "active" ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20" : "border-border/80 bg-card text-card-foreground shadow-xl hover:border-primary/50"}`}>
      <div className="pointer-events-none absolute inset-2 rounded-xl border border-current opacity-15" />
      <div className="relative flex items-start justify-between gap-4"><Quote className={`size-8 ${position === "active" ? "text-primary-foreground/70" : "text-primary/70"}`} /><span className={`rounded-full px-2.5 py-1 font-mono text-[10px] ${position === "active" ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"}`}>{item.metricBadge}</span></div>
      <p className={`relative mt-6 text-base leading-7 ${position === "active" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{item.testimonial}</p>
      <div className="relative mt-7 flex items-center gap-3"><span className="size-11 shrink-0 rounded-full border-2 border-current bg-cover bg-center" style={{ backgroundImage: `url(${item.imgSrc})` }} /><div><p className="font-semibold">{item.by}</p><p className={`text-xs ${position === "active" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.role} · {item.company}</p></div></div>
    </article>
  );
}