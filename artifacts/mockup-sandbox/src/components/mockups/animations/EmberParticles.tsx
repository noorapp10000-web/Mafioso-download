import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

export function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];

    const spawn = () => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          size: Math.random() * 3 + 1,
          speedY: -(Math.random() * 1.5 + 0.8),
          speedX: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.8 + 0.2,
          hue: Math.random() > 0.6 ? 40 : 0, // gold or red
          life: 0,
          maxLife: Math.random() * 120 + 80,
        });
      }
    };

    let frame = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % 8 === 0) spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.speedX + Math.sin(p.life * 0.05) * 0.4;
        p.y += p.speedY;
        const alpha = p.opacity * (1 - p.life / p.maxLife);

        ctx.save();
        ctx.globalAlpha = alpha;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        grad.addColorStop(0, p.hue === 40 ? "#ffd700" : "#ff3300");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife || p.y < -10) {
          particles.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse at bottom, #1a0000 0%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
        fontFamily: "'Cairo', sans-serif",
        minHeight: 320,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <p style={{ color: "#d4af37", fontSize: 28, fontWeight: 900, margin: 0 }}>مافيوسو</p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "6px 0 0" }}>
          جمر عائم في خلفية الـ Hero
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(139,0,0,0.35)",
          border: "1px solid rgba(212,175,55,0.3)",
          borderRadius: 20,
          padding: "4px 14px",
          color: "#d4af37",
          fontSize: 11,
          whiteSpace: "nowrap",
          zIndex: 3,
        }}
      >
        جزيئات جمر حمراء وذهبية تطير للأعلى
      </div>
    </div>
  );
}
