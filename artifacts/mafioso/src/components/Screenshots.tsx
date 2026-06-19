import { motion } from 'framer-motion';

import screen1 from '@assets/Screenshot_20260619-153235_1781874631699.jpg';
import screen2 from '@assets/Screenshot_20260619-153241_1781874631658.jpg';
import screen3 from '@assets/Screenshot_20260619-153249_1781874631770.jpg';
import screen4 from '@assets/Screenshot_20260619-153255_1781874631736.jpg';
import screen5 from '@assets/Screenshot_20260619-153313_1781874631803.jpg';

const phones = [
  { label: 'الشاشة الرئيسية', src: screen1 },
  { label: 'اختيار عدد اللاعبين', src: screen2 },
  { label: 'اختيار القضية', src: screen3 },
  { label: 'إنشاء غرفة أونلاين', src: screen4 },
  { label: 'دخول غرفة أونلاين', src: screen5 },
];

const STATUS_BAR_CROP = 52;

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black gold-text">شوف اللعبة</h2>
          <p className="text-[#888] mt-3 text-sm">لقطات من داخل التطبيق الحقيقي</p>
        </div>

        <div
          className="flex gap-6 md:gap-8 justify-start md:justify-center pb-6 px-2"
          style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
        >
          {phones.map(({ label, src }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center gap-4 shrink-0"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Phone frame */}
              <div
                style={{
                  width: '185px',
                  height: '390px',
                  borderRadius: '46px',
                  background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)',
                  padding: '10px',
                  boxShadow:
                    '0 0 0 0.5px rgba(255,255,255,0.12) inset, 0 0 0 1px #111, 0 24px 64px rgba(0,0,0,0.75), 0 0 48px rgba(139,0,0,0.18)',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                {/* Volume buttons */}
                <div style={{ position: 'absolute', left: '-3px', top: '95px', width: '3px', height: '28px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '132px', width: '3px', height: '44px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
                {/* Power button */}
                <div style={{ position: 'absolute', right: '-3px', top: '115px', width: '3px', height: '56px', background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />

                {/* Screen */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '38px',
                    background: '#000',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Real screenshot — crop status bar from top */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      overflow: 'hidden',
                      borderRadius: '38px',
                    }}
                  >
                    <img
                      src={src}
                      alt={label}
                      style={{
                        position: 'absolute',
                        top: `-${STATUS_BAR_CROP}px`,
                        left: 0,
                        width: '100%',
                        height: `calc(100% + ${STATUS_BAR_CROP}px)`,
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Dynamic Island */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '72px',
                      height: '22px',
                      background: '#000',
                      borderRadius: '20px',
                      zIndex: 30,
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                  />

                  {/* Home indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '7px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '52px',
                      height: '4px',
                      background: 'rgba(255,255,255,0.35)',
                      borderRadius: '3px',
                      zIndex: 30,
                    }}
                  />

                  {/* Screen glare */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)',
                      borderRadius: '38px',
                      pointerEvents: 'none',
                      zIndex: 20,
                    }}
                  />
                </div>
              </div>

              {/* Label */}
              <p
                className="font-bold text-sm text-center"
                style={{ color: '#d4af37', fontFamily: "'Cairo',sans-serif", maxWidth: '185px' }}
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
