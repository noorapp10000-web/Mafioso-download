import { motion } from 'framer-motion';

// Three iPhone screens using the real uploaded assets
const phones = [
  {
    label: 'شاشة الترحيب',
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        {/* Full background */}
        <img src="/bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(139,0,0,0.25) 50%, rgba(0,0,0,0.85) 100%)' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2 px-3 w-full">
          <img src="/mascot.png" alt="" className="w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(139,0,0,0.8)]" />
          <p className="text-[#d4af37] font-black text-lg" style={{ fontFamily: "'Cairo',sans-serif", textShadow: '0 0 20px rgba(212,175,55,0.5)' }}>
            مافيوسو
          </p>
          <p className="text-white/70 text-[10px] text-center" style={{ fontFamily: "'Cairo',sans-serif" }}>
            لعبة الاستنتاج الاجتماعي
          </p>
          <div className="mt-3 w-full flex flex-col gap-1.5 px-2">
            <div className="w-full py-2 rounded-xl text-center text-[11px] font-black text-white" style={{ background: '#8B0000', fontFamily: "'Cairo',sans-serif" }}>
              ▶ ابدأ اللعبة
            </div>
            <div className="w-full py-2 rounded-xl text-center text-[11px] font-bold text-[#d4af37]" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', fontFamily: "'Cairo',sans-serif" }}>
              انضم لغرفة
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'كشف الدور',
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ background: '#0a0a0a' }}>
        <div className="absolute inset-0 opacity-15">
          <img src="/bg.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 px-4 w-full text-center">
          <div className="text-[10px] text-white/40 tracking-widest uppercase" style={{ fontFamily: "'Cairo',sans-serif" }}>
            دورك السري
          </div>
          <div className="w-full rounded-2xl overflow-hidden border-2" style={{ borderColor: '#8B0000', boxShadow: '0 0 20px rgba(139,0,0,0.5)' }}>
            <div className="py-2 text-[10px] font-black text-white" style={{ background: '#8B0000', fontFamily: "'Cairo',sans-serif" }}>
              🔴 المجرم
            </div>
            <div className="p-3" style={{ background: 'rgba(139,0,0,0.12)' }}>
              <img src="/mascot.png" alt="" className="w-16 h-16 object-contain mx-auto" />
              <p className="text-white/80 text-[9px] mt-2 leading-relaxed" style={{ fontFamily: "'Cairo',sans-serif" }}>
                أنت المجرم — كدب واحتال عشان تبقى آخر واحد!
              </p>
            </div>
          </div>
          <div className="text-[9px] text-white/30 mt-1" style={{ fontFamily: "'Cairo',sans-serif" }}>
            اضغط عشان تخبي الورقة
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'التحقيق الجماعي',
    content: (
      <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: '#0d0d0d' }}>
        <img src="/bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="px-3 pt-1 pb-2" style={{ borderBottom: '1px solid rgba(139,0,0,0.3)' }}>
            <div className="flex items-center justify-between">
              <p className="text-[#d4af37] font-black text-[11px]" style={{ fontFamily: "'Cairo',sans-serif" }}>قضية المطعم</p>
              <span className="text-[9px] text-white/40" style={{ fontFamily: "'Cairo',sans-serif" }}>الجولة 2</span>
            </div>
          </div>

          {/* Chat/discussion */}
          <div className="flex-1 px-2 py-1 overflow-hidden flex flex-col gap-1">
            {[
              { name: 'أحمد', msg: 'أنا مش المجرم والله!', self: false },
              { name: 'نور', msg: 'ليه بتتوتر كده؟ 🤔', self: false },
              { name: 'أنت', msg: 'صوّتوا على أحمد!', self: true },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.self ? 'justify-start' : 'justify-end'}`}>
                <div
                  className="rounded-xl px-2 py-1 max-w-[75%]"
                  style={{
                    background: m.self ? '#8B0000' : 'rgba(255,255,255,0.08)',
                    borderRadius: m.self ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                  }}
                >
                  {!m.self && <p className="text-[#d4af37] text-[7px] font-bold" style={{ fontFamily: "'Cairo',sans-serif" }}>{m.name}</p>}
                  <p className="text-white text-[9px]" style={{ fontFamily: "'Cairo',sans-serif" }}>{m.msg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vote bar */}
          <div className="px-2 pb-2">
            <div className="flex gap-1">
              {['أحمد', 'سيف', 'نور'].map((n, i) => (
                <button
                  key={i}
                  className="flex-1 py-1.5 rounded-lg text-[9px] font-bold transition-all"
                  style={{
                    background: i === 0 ? '#8B0000' : 'rgba(255,255,255,0.06)',
                    border: i === 0 ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.08)',
                    color: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)',
                    fontFamily: "'Cairo',sans-serif",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black gold-text">شوف اللعبة</h2>
          <p className="text-[#888] mt-3 text-sm">لقطات من داخل التطبيق الحقيقي</p>
        </div>

        {/* Scrollable row — works on mobile and desktop */}
        <div
          className="flex gap-6 md:gap-10 justify-start md:justify-center pb-6 px-2"
          style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
        >
          {phones.map(({ label, content }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center gap-4 shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* iPhone frame */}
              <div
                style={{
                  width: '180px',
                  height: '370px',
                  borderRadius: '44px',
                  background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)',
                  padding: '10px',
                  boxShadow: '0 0 0 0.5px rgba(255,255,255,0.12) inset, 0 0 0 1px #111, 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(139,0,0,0.2)',
                  position: 'relative',
                }}
              >
                {/* Side buttons - volume */}
                <div style={{ position: 'absolute', left: '-3px', top: '90px', width: '3px', height: '28px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '126px', width: '3px', height: '40px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
                {/* Side button - power */}
                <div style={{ position: 'absolute', right: '-3px', top: '110px', width: '3px', height: '52px', background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />

                {/* Screen */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '36px',
                    background: '#000',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Dynamic Island */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '70px',
                      height: '22px',
                      background: '#000',
                      borderRadius: '20px',
                      zIndex: 30,
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                  />

                  {/* App content */}
                  <div className="absolute inset-0 pt-10 pb-6">
                    {content}
                  </div>

                  {/* Home indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '7px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '48px',
                      height: '4px',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '3px',
                      zIndex: 30,
                    }}
                  />

                  {/* Screen glare */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 55%)',
                      borderRadius: '36px',
                      pointerEvents: 'none',
                      zIndex: 20,
                    }}
                  />
                </div>
              </div>

              {/* Label */}
              <p
                className="font-bold text-sm"
                style={{ color: '#d4af37', fontFamily: "'Cairo',sans-serif" }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-[#444] text-xs mt-2 md:hidden" style={{ fontFamily: "'Cairo',sans-serif" }}>
          اسحب لليسار لتشوف المزيد ←
        </p>
      </div>
    </section>
  );
}
