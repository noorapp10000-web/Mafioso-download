import { motion } from 'framer-motion';

const features = [
  { icon: '🕵️', title: 'قضايا حقيقية غامضة', text: 'كل قضية ليها قصة مختلفة وأدوار مختلفة — المتهم، الشاهد، البريء' },
  { icon: '🌐', title: 'أونلاين مع أصحابك', text: 'ابعت كود الغرفة لأصحابك واللعبة تبدأ في ثواني من أي مكان' },
  { icon: '📱', title: 'محلي في نفس الأوضة', text: 'مش محتاج إنترنت — مرر الموبايل لكل لاعب وهو يشوف دوره' }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text inline-block relative">
            ليه مافيوسو؟
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#8B0000] rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#111111] border-r-4 border-[#8B0000] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,0,0,0.3)] transition-all"
            >
              <div className="text-4xl text-[#d4af37] mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">{f.title}</h3>
              <p className="text-[#888888]">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
