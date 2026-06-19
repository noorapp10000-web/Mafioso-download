import { motion } from 'framer-motion';

const APK_FILENAME = "/mafioso.apk";

export default function DownloadSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = APK_FILENAME;
    link.download = "مافيوسو.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="relative w-full py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/bg.webp)' }}>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.88)]"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <motion.img 
          src="/mascot.png" 
          alt="Mascot" 
          className="w-48 mx-auto mb-8 float-anim object-contain"
        />
        
        <h2 className="text-4xl font-black gold-text">جاهز تبدأ التحقيق؟</h2>
        <p className="text-gray-300 text-lg mt-2 mb-8">حمّل مافيوسو مجاناً على أجهزة Android</p>
        
        <button 
          onClick={handleDownload}
          className="w-full sm:w-auto px-12 py-5 bg-[#8B0000] hover:bg-[#a01010] text-white text-2xl font-black rounded-xl pulse-glow transition-all mx-auto block mb-12"
        >
          ⬇️ تحميل التطبيق
        </button>
        
        <div className="bg-[rgba(17,17,17,0.8)] border border-[rgba(139,0,0,0.3)] rounded-xl p-6 text-right max-w-md mx-auto backdrop-blur">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">1</div>
            <p className="text-gray-200">اضغط زر التحميل وانتظر</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">2</div>
            <p className="text-gray-200">افتح الإعدادات ← فعّل 'السماح بمصادر غير معروفة'</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">3</div>
            <p className="text-gray-200">افتح ملف APK وثبّت — خلاص!</p>
          </div>
        </div>
        
        <p className="text-sm text-[#888888] mt-8">
          الحجم تقريباً 15-25 ميجا — يشتغل على Android 5.0 وأعلى
        </p>
      </div>
    </section>
  );
}
