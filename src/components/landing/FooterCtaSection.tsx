"use client";

import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { FUNNEL_DATA } from "@/constants/funnel";

export function FooterCtaSection() {
  const openDemo = () => {
    window.dispatchEvent(new Event(FUNNEL_DATA.eventName));
  };

  return (
    <section id="cta-footer" className="relative scroll-mt-20 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 p-10 md:p-16 text-center shadow-[0_0_80px_rgba(6,182,212,0.18)]">
          {/* Ambient Background Radial Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25),transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-300">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>SIFIR KESİNTİ • ÇOK SATICILI NSPM</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Ağ Güvenliğinizi ve Operasyonlarınızı{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Otonomlaştırmaya Hazır mısınız?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base md:text-xl leading-relaxed text-slate-300">
              15 dakikalık teknik mimari demosu ile altyapınızdaki potansiyel riskleri ve kural çakışmalarını canlı görün.
            </p>

            {/* Action Button */}
            <div className="mt-10 flex items-center justify-center">
              <CtaButton
                variant="primary"
                size="xl"
                showLivePulse
                icon={Sparkles}
                onClick={openDemo}
                className="scale-105 hover:scale-110 shadow-[0_0_50px_rgba(6,182,212,0.5)]"
              >
                Ücretsiz POC & Demo Başlat
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterCtaSection;
