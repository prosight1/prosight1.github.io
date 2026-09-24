"use client";

import React, { useEffect } from "react";

interface GatewayFlowProps {
  mode?: "dark" | "light";
  className?: string;
}

const gatewayFlowSource = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AllConfig Gateway Flow</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            brand: {
              cyan: '#06b6d4',
              emerald: '#10b981',
              dark: '#030712',
            }
          }
        }
      }
    }
  </script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #030712; font-family: 'Inter', sans-serif; }
    canvas { display: block; position: absolute; inset: 0; z-index: 1; }
    .glass-card {
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(6, 182, 212, 0.25);
      box-shadow: 0 0 50px rgba(6, 182, 212, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.1);
    }
    .glow-button {
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .glow-button:hover {
      box-shadow: 0 0 35px rgba(6, 182, 212, 0.65), 0 0 15px rgba(16, 185, 129, 0.4);
      transform: translateY(-1px);
    }
  </style>
</head>
<body class="relative flex items-center justify-center min-h-screen text-slate-100 select-none">
  <canvas id="flowCanvas"></canvas>

  <div class="relative z-10 w-[92%] max-w-md p-6 sm:p-8 rounded-2xl glass-card text-center transition-all duration-300 hover:border-cyan-400/40">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 font-mono text-[11px] uppercase tracking-wider text-cyan-300 mb-5">
      <svg class="w-3.5 h-3.5 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span>CANLI ÇEKİRDEK • VERI AKIŞI</span>
    </div>

    <!-- Title -->
    <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
      <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">ALLCONFIG</span>
      <span class="block text-xl sm:text-2xl mt-1 text-slate-200">NETWORK TWIN</span>
    </h2>

    <!-- Description -->
    <p class="text-xs sm:text-sm text-slate-300/90 font-normal leading-relaxed mb-6">
      Canlı bellek içi graf telemetrisi ve çok satıcılı otonom politika denetimi aktif.
    </p>

    <!-- Metrics Grid -->
    <div class="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-950/50 border border-slate-800/80 mb-6 font-mono text-left">
      <div class="p-2">
        <div class="text-[10px] text-slate-400 uppercase tracking-tight">Düğümler</div>
        <div class="text-xs font-bold text-cyan-300 mt-0.5">2,840+</div>
      </div>
      <div class="p-2 border-l border-slate-800/80">
        <div class="text-[10px] text-slate-400 uppercase tracking-tight">Gecikme</div>
        <div class="text-xs font-bold text-emerald-400 mt-0.5">&lt;0.4ms</div>
      </div>
      <div class="p-2 border-l border-slate-800/80">
        <div class="text-[10px] text-slate-400 uppercase tracking-tight">Uyum</div>
        <div class="text-xs font-bold text-emerald-300 mt-0.5">%100</div>
      </div>
    </div>

    <!-- CTA Button -->
    <button id="demoBtn" class="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase text-slate-950 glow-button flex items-center justify-center gap-2 cursor-pointer font-sans">
      <span>CANLI DEMO AKIŞINI BAŞLAT</span>
      <svg class="w-4 h-4 text-slate-950 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  </div>

  <script>
    const canvas = document.getElementById('flowCanvas');
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let nodes = [];
    let explosions = [];

    const nodeCount = 38;
    const colors = {
      cyan: 'rgba(6, 182, 212, ',
      emerald: 'rgba(16, 185, 129, ',
      line: 'rgba(6, 182, 212, 0.4)'
    };

    function init() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = Math.min(width, height) * (0.22 + (i % 5) * 0.04);
        nodes.push({
          x: width / 2 + Math.cos(angle) * radius,
          y: height / 2 + Math.sin(angle) * radius,
          baseX: width / 2 + Math.cos(angle) * radius,
          baseY: height / 2 + Math.sin(angle) * radius,
          radius: 1.5 + (i % 3) * 0.8,
          phase: i * 0.5,
          speed: 0.001 + (i % 4) * 0.0005,
          color: i % 3 === 0 ? colors.emerald : colors.cyan
        });
      }
    }

    function createExplosion(x, y) {
      const particleCount = 36;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + Math.random() * 0.2;
        const speed = 1.5 + Math.random() * 4.5;
        const isEmerald = Math.random() > 0.5;
        explosions.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 2.5,
          color: isEmerald ? 'rgba(16, 185, 129, ' : 'rgba(6, 182, 212, ',
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02
        });
      }
    }

    function draw(time) {
      // Dark navy night blue background gradient
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, Math.max(width, height) * 0.75);
      bgGrad.addColorStop(0, '#07111f');
      bgGrad.addColorStop(1, '#030712');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Connect nodes with neon cyan lines
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < Math.min(width, height) * 0.35) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      nodes.forEach((node, i) => {
        const orbitAngle = time * node.speed + node.phase;
        const rOffset = Math.sin(time * 0.002 + node.phase) * 15;
        const radius = Math.min(width, height) * (0.24 + (i % 5) * 0.035) + rOffset;
        
        node.x = width / 2 + Math.cos(orbitAngle) * radius;
        node.y = height / 2 + Math.sin(orbitAngle) * radius;

        ctx.fillStyle = node.color + '0.9)';
        ctx.shadowColor = node.color + '1)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Core pulse glow
      const coreGrad = ctx.createRadialGradient(width / 2, height / 2, 2, width / 2, height / 2, 120);
      coreGrad.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
      coreGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.15)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 120, 0, Math.PI * 2);
      ctx.fill();

      // Render explosions
      for (let i = explosions.length - 1; i >= 0; i--) {
        const p = explosions[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          explosions.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowColor = p.color + p.alpha + ')';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', init);
    window.addEventListener('pointerdown', (e) => {
      createExplosion(e.clientX, e.clientY);
    });

    document.getElementById('demoBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = e.target.getBoundingClientRect();
      createExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);
      window.parent.postMessage({ type: 'OPEN_DEMO' }, '*');
    });

    init();
    requestAnimationFrame(draw);
  </script>
</body>
</html>`;

export function GatewayFlow({ className = "" }: GatewayFlowProps) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "OPEN_DEMO") {
        window.dispatchEvent(new Event("open-lead-modal"));
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      srcDoc={gatewayFlowSource}
      title="AllConfig Network Twin Gateway Flow"
      className={`h-full w-full border-0 pointer-events-auto ${className}`}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}

export default GatewayFlow;