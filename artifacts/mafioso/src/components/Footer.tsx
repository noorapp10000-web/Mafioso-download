export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(139,0,0,0.2)] py-12 pb-28 md:pb-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="gold-text text-3xl font-black">مافيوسو</h2>
        <p className="text-[#888888] text-sm mt-1">لعبة الاستنتاج الاجتماعي بالعربي</p>

        <div className="mt-8 mb-5 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[rgba(212,175,55,0.35)]" />
          <p className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase opacity-70">
            crafted by
          </p>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[rgba(212,175,55,0.35)]" />
        </div>

        <p
          className="text-2xl md:text-3xl font-black"
          style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #f5e070 45%, #b8960c 75%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.06em',
            filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.3))',
          }}
        >
          Seif Kamel
        </p>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.25)] to-transparent" />
        <p className="text-[#444] text-xs mt-4">© 2026 مافيوسو — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
