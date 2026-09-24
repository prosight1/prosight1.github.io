"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

export interface VendorIcon {
  src: string;
  alt: string;
  angle: number;
}

export interface OrbitConfig {
  size: string;
  duration: number;
  icons: VendorIcon[];
}

export const VENDOR_ORBITS: OrbitConfig[] = [
  {
    size: "w-56 h-56 md:w-72 md:h-72",
    duration: 22,
    icons: [
      { src: "https://cdn.simpleicons.org/cisco/049fd9", alt: "Cisco IOS-XE / NX-OS", angle: 0 },
      { src: "https://cdn.simpleicons.org/fortinet/ee3124", alt: "Fortinet FortiOS", angle: 120 },
      { src: "https://cdn.simpleicons.org/paloaltonetworks/fa5821", alt: "Palo Alto PAN-OS", angle: 240 },
    ],
  },
  {
    size: "w-80 h-80 md:w-[25rem] md:h-[25rem]",
    duration: 30,
    icons: [
      { src: "https://cdn.simpleicons.org/huawei/cf0a2c", alt: "Huawei VRP", angle: 45 },
      { src: "https://cdn.simpleicons.org/junipernetworks/20c0f0", alt: "Juniper Junos OS", angle: 135 },
      { src: "https://cdn.simpleicons.org/checkpoint/e0005a", alt: "Check Point R81", angle: 225 },
      { src: "https://cdn.simpleicons.org/f5/e4002b", alt: "F5 BIG-IP TMOS", angle: 315 },
    ],
  },
  {
    size: "w-[24rem] h-[24rem] md:w-[34rem] md:h-[34rem]",
    duration: 38,
    icons: [
      { src: "https://cdn.simpleicons.org/docker/2496ed", alt: "Docker Container Ecosystem", angle: 0 },
      { src: "https://cdn.simpleicons.org/kubernetes/326ce5", alt: "Kubernetes CNI Policy", angle: 72 },
      { src: "https://cdn.simpleicons.org/amazonaws/ff9900", alt: "AWS Security Groups & VPC", angle: 144 },
      { src: "https://cdn.simpleicons.org/microsoftazure/0078d4", alt: "Azure Network Security Groups", angle: 216 },
      { src: "https://cdn.simpleicons.org/terraform/844fba", alt: "HashiCorp Terraform IaC", angle: 288 },
    ],
  },
  {
    size: "w-[30rem] h-[30rem] md:w-[42rem] md:h-[42rem]",
    duration: 46,
    icons: [
      { src: "https://cdn.simpleicons.org/ansible/ee0000", alt: "Red Hat Ansible Automation", angle: 30 },
      { src: "https://cdn.simpleicons.org/slack/4a154b", alt: "Slack SecOps Notifications", angle: 150 },
      { src: "https://cdn.simpleicons.org/postgresql/4169e1", alt: "PostgreSQL Policy DB", angle: 270 },
    ],
  },
];

export function OrbitingCirclesGlobe() {
  return (
    <div className="relative w-full h-[480px] md:h-[580px] overflow-hidden flex items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#030712] shadow-[0_0_60px_rgba(6,182,212,0.12)]">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Radial Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_60%)]" />

      {/* Center 3D Particle Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square pointer-events-none w-36 h-36 md:w-48 md:h-48 z-20 rounded-full border border-cyan-400/40 bg-slate-950/80 p-2 shadow-[0_0_80px_rgba(6,182,212,0.35)]">
        <ParticleSphereAnimation />
      </div>

      {/* Concentric Orbiting Rings */}
      {VENDOR_ORBITS.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/15 pointer-events-none ${orbit.size}`}
          >
            {orbit.icons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-6 md:-ml-8 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                {/* Counter-rotating vendor icon card */}
                <div
                  className="pointer-events-auto group relative z-10 -mt-6 md:-mt-8 flex items-center justify-center p-2.5 sm:p-3.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                  title={iconData.alt}
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={32}
                    height={32}
                    className="w-5 h-5 md:w-7 md:h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Tooltip on hover */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2.5 py-1 rounded-md bg-slate-950 border border-cyan-500/40 font-mono text-[10px] text-cyan-300 whitespace-nowrap z-30 shadow-xl">
                    {iconData.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default OrbitingCirclesGlobe;