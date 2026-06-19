import { motion } from "framer-motion";
import { incrementDownloadCount } from "../firebase";

const APK_FILENAME = "/mafioso.apk";

export default function DownloadSection() {
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
    <section
      id="download"
      className="relative w-full py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.webp)" }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.88)" }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <motion.img
          src="/mascot.png"
          alt="مافيوسو"
          className="w-44 mx-auto mb-8 object-contain"
          style={{ filter: "drop-shadow(0 0 20px rgba(139,0,0,0.6))", animation: "float 3s ease-in-out infinite" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />

        <h2 className="text-4xl lg:text-5xl font-black gold-text">جاهز تبدأ التحقيق؟</h2>
        <p className="text-gray-300 text-lg mt-3 mb-10">
          حمّل مافيوسو مجاناً على أجهزة Android
        </p>

        <button
          onClick={handleDownload}
          className="w-full sm:w-auto px-14 py-5 text-white text-2xl font-black rounded-2xl pulse-glow transition-all hover:scale-[1.03] active:scale-[0.97] mx-auto block mb-12"
          style={{ background: "#8B0000" }}
        >
          ⬇️ تحميل التطبيق
        </button>

        {/* Installation steps */}
        <div
          className="rounded-2xl p-6 text-right max-w-md mx-auto"
          style={{
            background: "rgba(17,17,17,0.85)",
            border: "1px solid rgba(139,0,0,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-[#d4af37] font-black text-base mb-5" style={{ fontFamily: "'Cairo', sans-serif" }}>
            طريقة التثبيت
          </p>
          {[
            "اضغط زر التحميل وانتظر اكتمال التنزيل",
            "افتح الإعدادات ← فعّل «السماح بمصادر غير معروفة»",
            "افتح ملف APK وثبّت — خلاص جهّز نفسك!",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
              <div
                className="w-8 h-8 shrink-0 flex items-center justify-center font-black text-white text-sm rounded-full"
                style={{ background: "#8B0000", minWidth: "2rem" }}
              >
                {i + 1}
              </div>
              <p className="text-gray-200 text-sm leading-relaxed pt-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
                {step}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm mt-8" style={{ color: "#666" }}>
          الحجم تقريباً 15-25 ميجا — يشتغل على Android 5.0 وأعلى
        </p>
      </div>
    </section>
  );
}
