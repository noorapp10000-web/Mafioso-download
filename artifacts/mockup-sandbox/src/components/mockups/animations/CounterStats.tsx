import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [trigger, target, duration]);

  return value;
}

function StatCard({
  icon,
  label,
  target,
  suffix,
  trigger,
  delay,
}: {
  icon: string;
  label: string;
  target: number;
  suffix?: string;
  trigger: boolean;
  delay: number;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [trigger, delay]);
  const val = useCountUp(target, 1600, active);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(212,175,55,0.2)",
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        minWidth: 110,
        flex: 1,
        transition: "border-color 0.4s",
        borderColor: active ? "rgba(212,175,55,0.5)" : "rgba(212,175,55,0.15)",
      }}
    >
      <div style={{ fontSize: 28 }}>{icon}</div>
      <div
        style={{
          color: "#d4af37",
          fontSize: 32,
          fontWeight: 900,
          fontFamily: "monospace",
          letterSpacing: -1,
          minHeight: 42,
        }}
      >
        {val.toLocaleString("ar-EG")}
        {suffix && (
          <span style={{ fontSize: 16, marginRight: 2, opacity: 0.7 }}>{suffix}</span>
        )}
      </div>
      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'Cairo',sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

export function CounterStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100%",
        height: "100%",
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
        fontFamily: "'Cairo', sans-serif",
        minHeight: 320,
        padding: "0 16px",
        boxSizing: "border-box",
      }}
    >
      <p style={{ color: "#d4af37", fontWeight: 900, fontSize: 18, margin: 0 }}>
        إحصائيات اللعبة
      </p>

      <div style={{ display: "flex", gap: 12, width: "100%", maxWidth: 420 }}>
        <StatCard icon="⬇️" label="تحميل" target={1247} trigger={triggered} delay={0} />
        <StatCard icon="🎮" label="قضية" target={90} trigger={triggered} delay={200} />
        <StatCard icon="👥" label="لاعب نشط" target={342} trigger={triggered} delay={400} />
      </div>

      <button
        onClick={() => setTriggered(false)}
        onAnimationEnd={() => setTriggered(true)}
        style={{
          background: "rgba(139,0,0,0.3)",
          border: "1px solid rgba(139,0,0,0.5)",
          borderRadius: 20,
          padding: "6px 18px",
          color: "#fff",
          fontSize: 12,
          cursor: "pointer",
          fontFamily: "'Cairo',sans-serif",
        }}
        onClick={() => { setTriggered(false); setTimeout(() => setTriggered(true), 50); }}
      >
        ↺ شوف الأنيميشن مجدداً
      </button>

      <div
        style={{
          background: "rgba(139,0,0,0.35)",
          border: "1px solid rgba(212,175,55,0.3)",
          borderRadius: 20,
          padding: "4px 14px",
          color: "#d4af37",
          fontSize: 11,
          whiteSpace: "nowrap",
        }}
      >
        الأرقام بتعدّ بشكل سلس لما تدخل للـ viewport
      </div>
    </div>
  );
}
