"use client";

import { Moon, ShieldCheck, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import { FUNNEL_DATA } from "@/constants/funnel";
import { HEADER_CONTENT } from "@/constants/navigation";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [language, setLanguage] = useState<(typeof HEADER_CONTENT.languages)[number]>("TR");
  const isDark = resolvedTheme === "dark";

  const openFunnel = () => window.dispatchEvent(new Event(FUNNEL_DATA.eventName));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3" aria-label={`${HEADER_CONTENT.brand} ana sayfa`}>
            <span className="flex size-8 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-400"><ShieldCheck className="size-4" /></span>
            <span className="hidden font-mono text-sm font-semibold tracking-[0.18em] sm:inline">{HEADER_CONTENT.brand}</span>
            <span className="hidden border-l border-border pl-3 text-xs text-muted-foreground md:inline">{HEADER_CONTENT.badge}</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border border-border bg-muted/40 p-0.5" aria-label="Dil seçimi">
              {HEADER_CONTENT.languages.map((option) => <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={`rounded-md px-2 py-1 text-[11px] font-semibold transition-colors ${language === option ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{option}</button>)}
            </div>
            <Button variant="ghost" size="icon" aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"} title={isDark ? "Açık tema" : "Koyu tema"} onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <Sun /> : <Moon />}</Button>
            <CtaButton variant="primary" size="md" icon={Sparkles} showLivePulse className="hidden sm:inline-flex" onClick={openFunnel}>{HEADER_CONTENT.demoAction}</CtaButton>
          </div>
        </div>
      </header>
    </>
  );
}