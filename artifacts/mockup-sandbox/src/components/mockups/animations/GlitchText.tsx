import { useEffect, useState } from "react";

const glitchChars = "!@#$%^&*<>?/\\|~";

function randomGlitch(text: string, intensity: number): string {
  return text
    .split("")
    .map((ch) =>
      Math.random() < intensity
        ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
        : ch
    )
    .join("");
}

export function GlitchText() {
  const original = "مافيوسو";
  const [display, setDisplay] = useState(original);
  const [glitching, setGlitching] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetX2, setOffsetX2] = useState(0);

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitching(true);
      let ticks = 0;
      const maxTicks = 18;
      const iv = setInterval(() => {
        ticks++;
        const intensity = ticks < 6 ? 0.4 : ticks < 14 ? 0.2 : 0.05;
        setDisplay(randomGlitch(original, intensity));
        setOffsetX((Math.random() - 0.5) * 10);
        setOffsetX2((Math.random() - 0.5) * 8);
        if (ticks >= maxTicks) {
          clearInterval(iv);
          setDisplay(original);
          setOffsetX(0);
          setOffsetX2(0);
          setGlitching(false);
        }
      }, 50);
    };

    // Trigger every 3-5 seconds
    const schedule = () => {
      const delay = 3000 + Math.random() * 2000;
      return setTimeout(() => {
        triggerGlitch();
        timer = schedule();
      }, delay);
    };
    let timer = schedule();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        fontFamily: "'Cairo', sans-serif",
        minHeight: 320,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scan-line overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Glitch layers */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Red ghost layer */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            color: "#ff0033",
            fontSize: 64,
            fontWeight: 900,
            transform: `translateX(${offsetX}px)`,
            opacity: glitching ? 0.65 : 0,
            mixBlendMode: "screen",
            transition: "opacity 0.05s",
            userSelect: "none",
          }}
        >
          {display}
        </div>
        {/* Cyan ghost layer */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            color: "#00eeff",
            fontSize: 64,
            fontWeight: 900,
            transform: `translateX(${offsetX2}px)`,
            opacity: glitching ? 0.55 : 0,
            mixBlendMode: "screen",
            transition: "opacity 0.05s",
            userSelect: "none",
          }}
        >
          {display}
        </div>
        {/* Main text */}
        <div
          style={{
            color: "#d4af37",
            fontSize: 64,
            fontWeight: 900,
            position: "relative",
            letterSpacing: 2,
            textShadow: glitching ? "0 0 20px rgba(212,175,55,0.8)" : "0 0 40px rgba(212,175,55,0.3)",
            transition: "text-shadow 0.1s",
          }}
        >
          {display}
        </div>
      </div>

      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, margin: 0, zIndex: 2 }}>
        MAFIOSO — لعبة الاستنتاج الاجتماعي
      </p>

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
        العنوان بيتكسّر كل 3-5 ثواني زي شاشة مكسورة
      </div>
    </div>
  );
}
