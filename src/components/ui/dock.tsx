"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: ReactNode;
  className?: string;
}

interface DockItemProps {
  children: ReactNode;
  href?: string;
  title?: string;
  className?: string;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Dock({ children, className }: DockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.nav
      aria-label="Bölüm navigasyonu"
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn("flex h-16 items-end gap-2 rounded-2xl border border-border bg-background/85 px-3 pb-2 shadow-2xl shadow-slate-950/20 backdrop-blur-md dark:bg-neutral-900/80", className)}
    >
      {items.map((child, index) => <DockItem key={index} mouseX={mouseX}>{child}</DockItem>)}
    </motion.nav>
  );
}

function DockItem({ children, mouseX, ...props }: DockItemProps & { mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const width = useSpring(
    useTransform(mouseX, (value) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds || !Number.isFinite(value)) return 44;

      const distance = Math.abs(value - (bounds.left + bounds.width / 2));
      return distance < 120 ? 64 - (distance / 120) * 20 : 44;
    }),
    { stiffness: 300, damping: 20 },
  );

  return (
    <motion.a
      ref={ref}
      style={{ width }}
      {...props}
      className={cn("flex h-11 shrink-0 items-center justify-center rounded-xl border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground", props.className)}
    >
      {children}
    </motion.a>
  );
}