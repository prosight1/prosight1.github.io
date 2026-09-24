"use client";

import { useEffect, useRef } from "react";

interface Particle3D {
  x0: number;
  y0: number;
  z0: number;
  baseRadius: number;
  color: string;
}

export function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frameId = 0;
    let width = 0;
    let height = 0;

    const PARTICLE_COUNT = 420;
    const particles: Particle3D[] = [];

    // AllConfig neon color palette
    const colors = ["#06b6d4", "#10b981", "#38bdf8", "#34d399", "#22d3ee"];

    // Initialize particles uniformly distributed on 3D unit sphere using Fibonacci lattice
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);

      const sinPhi = Math.sin(phi);
      const x0 = sinPhi * Math.cos(theta);
      const y0 = Math.cos(phi);
      const z0 = sinPhi * Math.sin(theta);

      particles.push({
        x0,
        y0,
        z0,
        baseRadius: 1 + Math.random() * 1.5,
        color: colors[i % colors.length],
      });
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    let rotationY = 0;
    const tiltX = 0.25; // Slight 3D tilt for perspective

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;
      const fov = 320;

      rotationY += 0.006; // Continuous smooth rotation around Y axis

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      // Core background radial glow
      const glow = context.createRadialGradient(
        centerX,
        centerY,
        2,
        centerX,
        centerY,
        radius * 1.3
      );
      glow.addColorStop(0, "rgba(6, 182, 212, 0.28)");
      glow.addColorStop(0.5, "rgba(16, 185, 129, 0.12)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      // Project and sort particles by depth (Z-index)
      const projected = particles.map((p) => {
        // Rotate around Y axis
        const x1 = p.x0 * cosY + p.z0 * sinY;
        const z1 = -p.x0 * sinY + p.z0 * cosY;

        // Tilt around X axis
        const y1 = p.y0 * cosX - z1 * sinX;
        const z2 = p.y0 * sinX + z1 * cosX;

        // Apply scale factor based on radius
        const worldX = x1 * radius;
        const worldY = y1 * radius;
        const worldZ = z2 * radius;

        // Perspective scale factor
        const scale = fov / (fov + worldZ);
        const projX = centerX + worldX * scale;
        const projY = centerY + worldY * scale;

        // Normalize depth alpha [0.15, 1.0]
        const depthAlpha = Math.max(
          0.15,
          Math.min(1, (worldZ + radius) / (2 * radius))
        );

        return {
          projX,
          projY,
          worldZ,
          scale,
          depthAlpha,
          baseRadius: p.baseRadius,
          color: p.color,
        };
      });

      // Sort back-to-front so front particles render over back particles
      projected.sort((a, b) => a.worldZ - b.worldZ);

      // Render projected 3D particles
      projected.forEach((p) => {
        const particleRadius = Math.max(0.6, p.baseRadius * p.scale);
        context.globalAlpha = p.depthAlpha;
        context.fillStyle = p.color;

        // Neon glow for particles closer to viewer
        if (p.worldZ > 0) {
          context.shadowColor = p.color;
          context.shadowBlur = 8 * p.scale;
        } else {
          context.shadowBlur = 0;
        }

        context.beginPath();
        context.arc(p.projX, p.projY, particleRadius, 0, Math.PI * 2);
        context.fill();
      });

      context.shadowBlur = 0;
      context.globalAlpha = 1;

      frameId = requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="AllConfig 3D Parçacık Küresi"
      className="h-full w-full"
    />
  );
}

export default ParticleSphereAnimation;