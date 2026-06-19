import { useState } from "react";

const roles = [
  { name: "بريء", icon: "😇", color: "#1a6e1a", label: "أنت بريء — اكشف المجرم!", sub: "البرئاء" },
  { name: "مافيا", icon: "🎩", color: "#8B0000", label: "أنت المافيا — خدع الجميع!", sub: "المجرمون" },
  { name: "المحقق", icon: "🔍", color: "#1a3a8b", label: "أنت المحقق — اكشف الحقيقة!", sub: "الخاصة" },
];

export function CardFlip() {
  const [flipped, setFlipped] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);

  const role = roles[roleIdx];

  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
      setTimeout(() => setRoleIdx((i) => (i + 1) % roles.length), 300);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse at center, #1a0a0a 0%, #0a0a0a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
        fontFamily: "'Cairo', sans-serif",
        minHeight: 320,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={handleFlip}
    >
      {/* 3D flip container */}
      <div style={{ perspective: 800 }}>
        <div
          style={{
            width: 160,
            height: 220,
            position: "relative",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Back face (hidden pattern) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              borderRadius: 16,
              background: "linear-gradient(135deg, #8B0000 0%, #4a0000 100%)",
              border: "2px solid rgba(212,175,55,0.5)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(139,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 6,
                opacity: 0.4,
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: "#d4af37" }} />
              ))}
            </div>
          </div>

          {/* Front face (role) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              borderRadius: 16,
              transform: "rotateY(180deg)",
              background: `linear-gradient(135deg, ${role.color}dd 0%, ${role.color}88 100%)`,
              border: `2px solid rgba(212,175,55,0.6)`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.7), 0 0 40px ${role.color}55`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 44 }}>{role.icon}</div>
            <div style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>{role.name}</div>
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: 20,
                padding: "2px 10px",
                color: "#d4af37",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              {role.sub}
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, lineHeight: 1.5, margin: 0 }}>
              {role.label}
            </p>
          </div>
        </div>
      </div>

      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>
        {flipped ? "اضغط مجدداً للكشف عن الدور الجاي" : "اضغط على البطاقة لتكشف دورك"}
      </p>

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
        بطاقة الدور تتقلب بـ 3D عند بداية كل جولة
      </div>
    </div>
  );
}
