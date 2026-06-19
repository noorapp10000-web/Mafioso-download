import { motion } from "framer-motion";
import { incrementDownloadCount } from "../firebase";
import { useDownloadCount } from "../hooks/useDownloadCount";

const APK_FILENAME = "/mafioso.apk";

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return n.toString();
}

export default function Hero() {
  const downloadCount = useDownloadCount();

  const handleDownload = () => {
    incrementDownloadCount();
    const link = document.createElement("a");
    link.href = APK_FILENAME;
    link.download = "مافيوسو.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg.webp)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(139,0,0,0.35) 60%, rgba(0,0,0,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex-grow flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-10 lg:gap-8">

          {/* Mascot */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.img
              src="/mascot.png"
              alt="مافيوسو"
              className="object-contain red-glow-shadow"
              style={{ maxHeight: "clamp(280px, 45vw, 520px)" }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            />
          </div>

          {/* Text */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-right gap-5"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold"
              style={{
                background: "rgba(139,0,0,0.5)",
                border: "1px solid rgba(212,175,55,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              🔴 الآن متاح على Android
            </div>

            {/* Title */}
            <h1
              className="font-black gold-text leading-none"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
            >
              مافيوسو
            </h1>

            <p className="text-xl text-gray-200 font-bold">
              لعبة الاستنتاج الاجتماعي الأولى بالعربي
            </p>

            <p className="text-gray-400 max-w-xl text-base lg:text-lg leading-relaxed">
              اكتشف المجرم، خدع أصحابك، وابقَ صاحي. من 4 لـ 6 لاعبين — محلي أو أونلاين
            </p>

            {/* Stats row — includes live download counter */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 p-3 rounded-xl w-full max-w-md"
              style={{
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(139,0,0,0.3)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Live download count — always visible once Firebase responds */}
              <motion.span
                className="font-black text-sm"
                style={{ color: "#d4af37" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ⬇️{" "}
                {downloadCount === null ? (
                  <span className="opacity-40">...</span>
                ) : (
                  <span>{formatCount(downloadCount)} تحميل</span>
                )}
              </motion.span>
              <span className="font-bold text-sm">📱 متاح على Android</span>
              <span className="font-bold text-sm">👥 4–6 لاعبين</span>
              <span className="font-bold text-sm">🎮 أكثر من قضية</span>
            </div>

            {/* CTA */}
            <div className="mt-2 flex flex-col items-center lg:items-start w-full gap-2">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-10 py-4 text-white text-xl lg:text-2xl font-black rounded-xl pulse-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#8B0000" }}
              >
                ⬇️ حمّل مافيوسو مجاناً
              </button>
              <p className="text-sm" style={{ color: "#888" }}>
                APK مجاني • Android 5.0+ • بدون إعلانات
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center w-full mt-auto">
        <a
          href="#features"
          className="text-gray-400 hover:text-white bounce-scroll text-3xl block"
          aria-label="تمرير للأسفل"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
