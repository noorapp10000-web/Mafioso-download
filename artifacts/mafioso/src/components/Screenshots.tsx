import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import screen1 from '@assets/Screenshot_20260619-153235_1781874631699.jpg';
import screen2 from '@assets/Screenshot_20260619-153241_1781874631658.jpg';
import screen3 from '@assets/Screenshot_20260619-153249_1781874631770.jpg';
import screen4 from '@assets/Screenshot_20260619-153255_1781874631736.jpg';
import screen5 from '@assets/Screenshot_20260619-153313_1781874631803.jpg';

const screens = [
  { label: 'الشاشة الرئيسية', src: screen1 },
  { label: 'اختيار عدد اللاعبين', src: screen2 },
  { label: 'اختيار القضية', src: screen3 },
  { label: 'إنشاء غرفة أونلاين', src: screen4 },
  { label: 'دخول غرفة أونلاين', src: screen5 },
];

/* ─── Phone frame dimensions ─── */
const PHONE_W = 248;          // outer frame px
const PHONE_H = 534;          // outer frame px  (ratio ≈ 9:19.4)
const FRAME_OUTER_R = 52;     // outer border-radius
const FRAME_PAD_X = 11;       // horizontal padding (bezel)
const FRAME_PAD_TOP = 14;     // top bezel
const FRAME_PAD_BOT = 14;     // bottom bezel
const SCREEN_R = 42;          // inner screen border-radius

const SCREEN_W = PHONE_W - FRAME_PAD_X * 2;
const SCREEN_H = PHONE_H - FRAME_PAD_TOP - FRAME_PAD_BOT;

/* ─── Status-bar crop ─── */
// The real screenshots have a ~6% status bar at top we want to hide.
const CROP_PCT = 6.5;

function PhoneFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 shrink-0" style={{ scrollSnapAlign: 'center' }}>

      {/* ── Outer phone body ── */}
      <div
        style={{
          width: PHONE_W,
          height: PHONE_H,
          borderRadius: FRAME_OUTER_R,
          /* Multi-layer gradient to mimic brushed metal / glass back */
          background: 'linear-gradient(170deg, #4a4a4e 0%, #2a2a2e 30%, #1a1a1e 60%, #2e2e32 100%)',
          padding: `${FRAME_PAD_TOP}px ${FRAME_PAD_X}px ${FRAME_PAD_BOT}px`,
          position: 'relative',
          /* Drop shadow + subtle red glow */
          boxShadow: [
            '0 0 0 1px rgba(255,255,255,0.10) inset',
            '0 0 0 2px #0f0f0f',
            '0 32px 80px rgba(0,0,0,0.85)',
            '0 0 60px rgba(139,0,0,0.15)',
          ].join(', '),
          flexShrink: 0,
        }}
      >
        {/* ── Left side buttons (volume up / down) ── */}
        {[68, 108].map((top, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: -4,
              top,
              width: 4,
              height: i === 0 ? 32 : 52,
              background: 'linear-gradient(90deg, #222, #3a3a3a)',
              borderRadius: '3px 0 0 3px',
            }}
          />
        ))}

        {/* ── Right side button (power) ── */}
        <div
          style={{
            position: 'absolute',
            right: -4,
            top: 100,
            width: 4,
            height: 64,
            background: 'linear-gradient(90deg, #3a3a3a, #222)',
            borderRadius: '0 3px 3px 0',
          }}
        />

        {/* ── Screen container ── */}
        <div
          style={{
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: SCREEN_R,
            background: '#000',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Real screenshot — crop status bar by shifting image up */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              borderRadius: SCREEN_R,
            }}
          >
            <img
              src={src}
              alt={label}
              draggable={false}
              style={{
                position: 'absolute',
                top: `-${CROP_PCT}%`,
                left: 0,
                width: '100%',
                height: `${100 + CROP_PCT}%`,
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                userSelect: 'none',
              }}
            />
          </div>

          {/* Punch-hole camera */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#000',
              zIndex: 20,
              boxShadow: '0 0 0 2px rgba(255,255,255,0.08)',
            }}
          />

          {/* Home indicator pill */}
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.38)',
              zIndex: 20,
            }}
          />

          {/* Screen glare overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: SCREEN_R,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 35%, transparent 60%)',
              pointerEvents: 'none',
              zIndex: 15,
            }}
          />
        </div>
      </div>

      {/* Label */}
      <p
        className="font-bold text-sm text-center"
        style={{
          color: '#d4af37',
          fontFamily: "'Cairo', sans-serif",
          maxWidth: PHONE_W,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black gold-text">شوف اللعبة</h2>
          <p className="text-[#888] mt-3 text-sm">لقطات من داخل التطبيق الحقيقي</p>
        </div>

        {/* ── Desktop: scrollable row ── */}
        <div className="hidden md:flex gap-8 justify-center pb-4 flex-wrap">
          {screens.map(({ label, src }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <PhoneFrame src={src} label={label} />
            </motion.div>
          ))}
        </div>

        {/* ── Mobile: single carousel with dots ── */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="relative w-full flex justify-center" style={{ minHeight: PHONE_H + 60 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
              >
                <PhoneFrame src={screens[active].src} label={screens[active].label} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? '#d4af37' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Swipe arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => setActive(p => (p - 1 + screens.length) % screens.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              ←
            </button>
            <button
              onClick={() => setActive(p => (p + 1) % screens.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
