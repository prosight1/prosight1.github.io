"use client";

import React from "react";
import { type LucideIcon } from "lucide-react";

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg" | "xl";
  showLivePulse?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function CtaButton({
  variant = "primary",
  size = "lg",
  showLivePulse = false,
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  children,
  onClick,
  ...props
}: CtaButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden font-sans cursor-pointer select-none border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50";

  const sizeClasses = {
    md: "px-4 py-2 text-xs md:text-sm rounded-md gap-2",
    lg: "px-6 py-3 text-sm md:text-base font-semibold rounded-xl gap-2.5",
    xl: "px-8 py-4 text-base md:text-lg font-bold rounded-2xl gap-3 shadow-xl",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-slate-950 border-cyan-300/60 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] hover:from-cyan-300 hover:via-sky-300 hover:to-emerald-300 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-slate-900/80 backdrop-blur-md text-cyan-300 border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "bg-transparent text-slate-200 border-slate-700 hover:border-cyan-400 hover:bg-slate-900/60 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-[1.02] active:scale-[0.98]",
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Light Sheen / Shimmer Effect on Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Live Signal Pulse Dot */}
      {showLivePulse && (
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
        </span>
      )}

      {/* Left Icon */}
      {Icon && iconPosition === "left" && (
        <Icon className="size-4 md:size-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}

      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Right Icon */}
      {Icon && iconPosition === "right" && (
        <Icon className="size-4 md:size-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}

export default CtaButton;
