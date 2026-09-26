import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  update: () => void;
  draw: () => void;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState<boolean>(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Forest green palette - adapts to theme
    const palette = isDark
      ? {
          particle: { r: 107, g: 138, b: 116 }, // Forest green #6b8a74
          particleOpacity: 0.6,
          connectionOpacity: 0.25,
          warm: { r: 74, g: 105, b: 88 }, // Deep sage #4A6958
          warmOpacity: 0.4,
        }
      : {
          particle: { r: 74, g: 105, b: 88 }, // Deep sage #4A6958
          particleOpacity: 0.35,
          connectionOpacity: 0.12,
          warm: { r: 67, g: 81, b: 70 }, // Forest #435146
          warmOpacity: 0.2,
        };

    // Configuration
    const particleCount = window.innerWidth < 768 ? 35 : 70;
    const connectionDistance = 140;
    const mouseDistance = 180;

    let mouse = { x: -1000, y: -1000 };

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
      isWarm: boolean;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.8;
        this.baseOpacity = Math.random() * 0.5 + 0.5;
        this.isWarm = Math.random() > 0.8; // 20% warm-colored particles
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Keep in bounds
        if (this.x < 0) this.x = 0;
        if (this.x > w) this.x = w;
        if (this.y < 0) this.y = 0;
        if (this.y > h) this.y = h;
      }

      draw() {
        if (!ctx) return;
        const color = this.isWarm ? palette.warm : palette.particle;
        const opacity = this.isWarm ? palette.warmOpacity : palette.particleOpacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * this.baseOpacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleImpl());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connections first (behind particles)
      particles.forEach((p, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const p2 = particles[i];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity =
              palette.connectionOpacity - (distance / connectionDistance) * palette.connectionOpacity;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${palette.particle.r}, ${palette.particle.g}, ${palette.particle.b}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);

        if (distMouse < mouseDistance) {
          const opacity = 0.25 - (distMouse / mouseDistance) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${palette.warm.r}, ${palette.warm.g}, ${palette.warm.b}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Draw particles on top
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden no-print"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #1C1C1C 0%, #1B2922 50%, #1C1C1C 100%)"
          : "linear-gradient(180deg, #f8f9f8 0%, #f0f2f0 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at top, rgba(107, 138, 116, 0.08) 0%, transparent 60%)"
            : "radial-gradient(ellipse at top, rgba(74, 105, 88, 0.06) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
};
