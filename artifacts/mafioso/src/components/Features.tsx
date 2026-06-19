import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: 'قضايا حقيقية غامضة',
    text: 'كل قضية ليها قصة مختلفة وأدوار مختلفة — المتهم، الشاهد، البريء',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.96 3.42 2 2 0 0 1 3.93 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 2a4.5 4.5 0 0 1 0 9" />
        <path d="M17.5 2a7.5 7.5 0 0 1 0 15" />
      </svg>
    ),
    title: 'أونلاين مع أصحابك',
    text: 'ابعت كود الغرفة لأصحابك واللعبة تبدأ في ثواني من أي مكان',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'محلي في نفس الأوضة',
    text: 'مش محتاج إنترنت — مرر الموبايل لكل لاعب وهو يشوف دوره',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text inline-block relative">
            ليه مافيوسو؟
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#8B0000] rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#111111] border-r-4 border-[#8B0000] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,0,0,0.3)] transition-all"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              <div className="text-[#d4af37] mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">{f.title}</h3>
              <p className="text-[#888888] leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
