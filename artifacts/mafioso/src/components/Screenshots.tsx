import { motion } from "framer-motion";

const phones = [
  {
    label: "الشاشة الرئيسية",
    screen: (
      <div className="absolute inset-0 flex flex-col" style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #1a0000 100%)" }}>
        {/* Wallpaper street bg */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(/bg.webp)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-3 px-3 pt-4">
          <img src="/mascot.png" alt="" className="w-14 h-14 object-contain" style={{ filter: "drop-shadow(0 0 8px rgba(139,0,0,0.8))" }} />
          <p className="text-[#d4af37] font-black text-base" style={{ fontFamily: "'Cairo', sans-serif" }}>مافيوسو</p>
          <p className="text-white/60 text-[9px]" style={{ fontFamily: "'Cairo', sans-serif" }}>لعبة الاستنتاج الاجتماعي</p>

          <button className="w-full mt-2 py-2 rounded-xl text-white font-bold text-[10px]" style={{ background: "#8B0000", fontFamily: "'Cairo', sans-serif" }}>
            ▶ ابدأ اللعبة
          </button>
          <button className="w-full py-2 rounded-xl font-bold text-[10px]" style={{ background: "rgba(255,255,255,0.07)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.3)", fontFamily: "'Cairo', sans-serif" }}>
            انضم لغرفة
          </button>
          <button className="w-full py-2 rounded-xl text-white/50 font-bold text-[10px]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Cairo', sans-serif" }}>
            ⚙ الإعدادات
          </button>
        </div>

        {/* Bottom version */}
        <p className="relative z-10 text-center text-white/20 text-[8px] pb-3" style={{ fontFamily: "'Cairo', sans-serif" }}>v1.0.0</p>
      </div>
    ),
  },
  {
    label: "اختيار القضية",
    screen: (
      <div className="absolute inset-0 flex flex-col" style={{ background: "#0d0d0d" }}>
        {/* Header */}
        <div className="flex items-center gap-2 px-3 pt-4 pb-2" style={{ borderBottom: "1px solid rgba(139,0,0,0.25)" }}>
          <span className="text-white/40 text-[10px]">→</span>
          <p className="text-[#d4af37] font-black text-[11px]" style={{ fontFamily: "'Cairo', sans-serif" }}>اختر القضية</p>
        </div>

        {/* Cases */}
        {[
          { name: "قضية المطعم", players: "4-6", icon: "🍽️" },
          { name: "سرقة البنك", players: "5-6", icon: "🏦" },
          { name: "ليلة القصر", players: "4-5", icon: "🏰" },
        ].map((c, i) => (
          <div
            key={i}
            className="mx-3 mt-2 rounded-lg p-2 flex items-center gap-2"
            style={{
              background: i === 0 ? "rgba(139,0,0,0.3)" : "rgba(255,255,255,0.04)",
              border: i === 0 ? "1px solid rgba(139,0,0,0.7)" : "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span className="text-base">{c.icon}</span>
            <div className="flex-1">
              <p className="text-white font-bold text-[9px]" style={{ fontFamily: "'Cairo', sans-serif" }}>{c.name}</p>
              <p className="text-white/40 text-[8px]" style={{ fontFamily: "'Cairo', sans-serif" }}>👥 {c.players} لاعبين</p>
            </div>
            {i === 0 && <span className="text-[#d4af37] text-[8px]">✓</span>}
          </div>
        ))}

        <div className="mx-3 mt-auto mb-3">
          <button className="w-full py-2 rounded-xl text-white font-black text-[10px]" style={{ background: "#8B0000", fontFamily: "'Cairo', sans-serif" }}>
            ابدأ القضية
          </button>
        </div>
      </div>
    ),
  },
  {
    label: "اللعب الأونلاين",
    screen: (
      <div className="absolute inset-0 flex flex-col" style={{ background: "#0d0d0d" }}>
        {/* Header */}
        <div className="px-3 pt-4 pb-2" style={{ borderBottom: "1px solid rgba(139,0,0,0.25)" }}>
          <p className="text-[#d4af37] font-black text-[11px]" style={{ fontFamily: "'Cairo', sans-serif" }}>الغرفة #7X4K</p>
          <p className="text-white/40 text-[8px]" style={{ fontFamily: "'Cairo', sans-serif" }}>قضية المطعم</p>
        </div>

        {/* Players */}
        <div className="px-3 pt-2 flex-1">
          <p className="text-white/40 text-[8px] mb-1" style={{ fontFamily: "'Cairo', sans-serif" }}>اللاعبون 4/6</p>
          {["سيف", "أحمد", "نور", "خالد"].map((name, i) => (
            <div key={i} className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: i === 0 ? "#8B0000" : "rgba(255,255,255,0.1)" }}>
                {name[0]}
              </div>
              <p className="text-white text-[9px] font-bold" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {name} {i === 0 && <span className="text-[#d4af37] text-[7px]">(أنت)</span>}
              </p>
              <div className="mr-auto w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            </div>
          ))}
          <div className="flex items-center gap-2 mb-1.5 opacity-40">
            <div className="w-5 h-5 rounded-full border border-dashed border-white/30 flex items-center justify-center">
              <span className="text-white text-[8px]">+</span>
            </div>
            <p className="text-white/40 text-[9px]" style={{ fontFamily: "'Cairo', sans-serif" }}>في انتظار لاعب...</p>
          </div>
        </div>

        <div className="px-3 mb-3">
          <div className="p-2 rounded-lg mb-2 text-center" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)" }}>
            <p className="text-[#d4af37] text-[8px]" style={{ fontFamily: "'Cairo', sans-serif" }}>شارك كود الغرفة</p>
            <p className="text-white font-black text-[11px] tracking-widest" style={{ fontFamily: "'Cairo', sans-serif" }}>7X4K</p>
          </div>
          <button className="w-full py-1.5 rounded-lg text-white/50 text-[9px]" style={{ background: "rgba(139,0,0,0.15)", border: "1px solid rgba(139,0,0,0.3)", fontFamily: "'Cairo', sans-serif" }}>
            ابدأ (المضيف فقط)
          </button>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text">شوف اللعبة</h2>
          <p className="text-[#888] mt-3 text-sm">لقطات حقيقية من داخل التطبيق</p>
        </div>

        <div className="flex gap-8 justify-center overflow-x-auto pb-8 snap-x px-4">
          {phones.map(({ label, screen }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className="snap-center shrink-0 flex flex-col items-center gap-4"
            >
              {/* Phone shell */}
              <div
                className="relative"
                style={{
                  width: "168px",
                  height: "340px",
                  borderRadius: "36px",
                  background: "linear-gradient(145deg, #2a2a2a, #111)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 0 3px #1a1a1a, 0 0 40px rgba(139,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                  padding: "10px",
                }}
              >
                {/* Screen area */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "28px",
                    background: "#000",
                  }}
                >
                  {/* Punch-hole camera */}
                  <div
                    className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#000",
                      boxShadow: "0 0 0 1.5px rgba(255,255,255,0.1)",
                    }}
                  />

                  {/* App content starts below camera */}
                  <div className="absolute inset-0 pt-6">
                    {screen}
                  </div>

                  {/* Home indicator */}
                  <div
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30"
                    style={{
                      width: "40px",
                      height: "3px",
                      borderRadius: "2px",
                      background: "rgba(255,255,255,0.35)",
                    }}
                  />

                  {/* Screen glare */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
                      borderRadius: "28px",
                    }}
                  />
                </div>

                {/* Side buttons */}
                <div className="absolute -right-[3px] top-20 w-[3px] h-8 rounded-r-sm" style={{ background: "#333" }} />
                <div className="absolute -left-[3px] top-16 w-[3px] h-6 rounded-l-sm" style={{ background: "#333" }} />
                <div className="absolute -left-[3px] top-24 w-[3px] h-10 rounded-l-sm" style={{ background: "#333" }} />
              </div>

              {/* Label below phone */}
              <p
                className="text-[#d4af37] text-sm font-bold"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
