import { motion } from 'framer-motion';

export default function Screenshots() {
  const screens = ['الشاشة الرئيسية', 'اختيار القضية', 'اللعب الأونلاين'];

  return (
    <section id="screenshots" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text">شوف اللعبة</h2>
        </div>

        <div className="flex gap-8 justify-center overflow-x-auto pb-8 snap-x">
          {screens.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="snap-center shrink-0 w-48 h-96 rounded-[2.5rem] border-4 border-[#333333] bg-black relative overflow-hidden shadow-[0_0_30px_rgba(139,0,0,0.3)]"
            >
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#333333] rounded-b-xl w-24 mx-auto z-20"></div>
              
              {/* Screen Content */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/bg.webp)' }}
              >
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center p-4">
                  <span className="text-white font-bold text-center border border-[#8B0000] bg-[rgba(0,0,0,0.5)] py-2 px-4 rounded-lg backdrop-blur">
                    {title}
                  </span>
                </div>
              </div>

              {/* Fake Status/Bottom Bars */}
              <div className="absolute top-1 right-4 w-12 h-2 bg-[rgba(255,255,255,0.2)] rounded-full z-10"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[rgba(255,255,255,0.4)] rounded-full z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
