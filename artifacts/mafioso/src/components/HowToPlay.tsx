import { motion } from 'framer-motion';

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'كل لاعب يشوف ورقته بسر',
    desc: 'دوره سري بينه وبين نفسه',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'النقاش والتحقيق',
    desc: 'اتكلم، اسأل، لاحظ — المجرم بيكدب بذكاء',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'التصويت على المشتبه بيه',
    desc: 'الأغلبية تقرر مين المتهم',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'الحكم والنتيجة',
    desc: 'هل نجحتوا تكشفوا المجرم؟',
  },
];

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="bg-[#0d0d0d] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text">إزاي بتتلعب؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-6 relative overflow-hidden flex items-start gap-4"
              style={{
                background: '#111111',
                border: '1px solid rgba(139,0,0,0.18)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {/* Step number */}
              <div
                className="w-10 h-10 shrink-0 flex items-center justify-center font-black text-white text-sm rounded-full"
                style={{ background: '#8B0000', border: '2px solid rgba(212,175,55,0.5)' }}
              >
                {i + 1}
              </div>

              <div>
                {/* Icon */}
                <div className="text-[#d4af37] mb-2">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
