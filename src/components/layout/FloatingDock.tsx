"use client";

import { Cpu, GitCompare, Home, MessageSquare, Network, Sparkles } from "lucide-react";
import type { ComponentType, MouseEvent } from "react";
import { FUNNEL_DATA } from "@/constants/funnel";
import { DOCK_NAVIGATION_ITEMS } from "@/constants/navigation";
import { Dock } from "@/components/ui/dock";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Home,
  Cpu,
  GitCompare,
  Network,
  MessageSquare,
  Sparkles,
};

export function FloatingDock() {
  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <Dock>
        {DOCK_NAVIGATION_ITEMS.map((item) => {
          const Icon = iconMap[item.iconName];
          const isDemo = item.id === "demo";

          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.title}
              title={item.title}
              className={
                isDemo
                  ? "relative flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 ring-2 ring-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform"
                  : "flex items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors"
              }
              onClick={(event) => {
                if (isDemo) {
                  event.preventDefault();
                  window.dispatchEvent(new Event(FUNNEL_DATA.eventName));
                  return;
                }
                handleNavigation(event, item.href);
              }}
            >
              <Icon className={isDemo ? "size-5 text-slate-950 font-bold" : "size-5"} />
            </a>
          );
        })}
      </Dock>
    </div>
  );
}