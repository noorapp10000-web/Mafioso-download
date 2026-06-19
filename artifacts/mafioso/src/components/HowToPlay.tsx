import { motion } from 'framer-motion';

const steps = [
  { icon: '🎴', title: 'كل لاعب يشوف ورقته بسر', desc: 'دوره سري بينه وبين نفسه' },
  { icon: '🗣️', title: 'النقاش والتحقيق', desc: 'اتكلم، اسأل، لاحظ — المجرم بيكدب بذكاء' },
  { icon: '🗳️', title: 'التصويت على المشتبه بيه', desc: 'الأغلبية تقرر مين المتهم' },
  { icon: '🏆', title: 'الحكم والنتيجة', desc: 'هل نجحتوا تكشفوا المجرم؟' }
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#111111] rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#8B0000] border-2 border-[#d4af37] flex items-center justify-center font-bold text-white">
                {i + 1}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
