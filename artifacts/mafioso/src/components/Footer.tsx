export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(139,0,0,0.2)] py-12 pb-24 md:pb-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="gold-text text-3xl font-black">مافيوسو</h2>
        <p className="text-[#888888] text-sm mt-1">لعبة الاستنتاج الاجتماعي بالعربي</p>

        <div className="mt-8 mb-6 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[rgba(212,175,55,0.4)]"></div>
          <p
            className="text-[#d4af37] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 400, letterSpacing: "0.3em" }}
          >
            crafted by
          </p>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[rgba(212,175,55,0.4)]"></div>
        </div>

        <p
          className="text-2xl md:text-3xl font-black"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #f0d060 40%, #b8960c 70%, #d4af37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Cairo', sans-serif",
            letterSpacing: "0.05em",
            textShadow: "none",
            filter: "drop-shadow(0 0 12px rgba(212,175,55,0.35))",
          }}
        >
          Seif Kamel
        </p>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.3)] to-transparent"></div>
        <p className="text-[#444444] text-xs mt-4">© 2025 مافيوسو — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
