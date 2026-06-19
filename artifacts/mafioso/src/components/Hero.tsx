import { motion } from 'framer-motion';

const APK_FILENAME = "/mafioso.apk";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = APK_FILENAME;
    link.download = "مافيوسو.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/bg.webp)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-[rgba(139,0,0,0.4)]" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-12 lg:gap-8">
          
          {/* LEFT column visually (RTL so it's the right side of the flex row reverse) - MASCOT */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.img 
              src="/mascot.png" 
              alt="Mascot"
              className="max-h-96 lg:max-h-[500px] object-contain float-anim red-glow-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* RIGHT column visually (RTL so it's the left side) - TEXT */}
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-right gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8B0000] border border-[#d4af37] text-sm font-bold">
              <span>🔴 الآن متاح على Android</span>
            </div>

            <h1 className="text-7xl lg:text-8xl font-black gold-text leading-tight">
              مافيوسو
            </h1>

            <p className="text-xl text-gray-300 font-bold">
              لعبة الاستنتاج الاجتماعي الأولى بالعربي
            </p>

            <p className="text-gray-400 max-w-xl text-lg">
              اكتشف المجرم، خدع أصحابك، وابقَ صاحي. من 4 لـ 6 لاعبين — محلي أو أونلاين
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 p-3 bg-[rgba(0,0,0,0.5)] border border-[rgba(139,0,0,0.3)] rounded-xl mt-2">
              <span className="font-bold">📱 متاح على Android</span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="font-bold">👥 4–6 لاعبين</span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="font-bold">🎮 أكثر من قضية</span>
            </div>

            <div className="mt-4 flex flex-col items-center lg:items-start w-full gap-2">
              <button 
                onClick={handleDownload}
                className="w-full sm:w-auto px-10 py-5 bg-[#8B0000] hover:bg-[#a01010] text-white text-2xl font-black rounded-xl pulse-glow transition-all"
              >
                ⬇️ حمّل مافيوسو مجاناً
              </button>
              <p className="text-sm text-[#888888]">
                APK مجاني • Android 5.0+ • بدون إعلانات
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex justify-center w-full mt-auto">
        <a href="#features" className="text-gray-400 hover:text-white bounce-scroll text-3xl">
          ↓
        </a>
      </div>
    </section>
  );
}
