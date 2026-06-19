import { useEffect, useState } from 'react';

const APK_FILENAME = "/mafioso.apk";

export default function Download() {
  const [status, setStatus] = useState('جارٍ تحميل مافيوسو...');

  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement("a");
      link.href = APK_FILENAME;
      link.download = "مافيوسو.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('تم بدء التحميل! ✅');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <img src="/mascot.png" alt="Mascot" className="w-32 mx-auto mb-8 float-anim" />
        
        <h1 className="text-3xl font-black gold-text mb-6">{status}</h1>
        
        {status.includes('جارٍ') && (
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="bg-[#111111] border border-[rgba(139,0,0,0.3)] rounded-xl p-6 text-right mt-8">
          <h2 className="text-white font-bold mb-4 text-xl">خطوات التثبيت:</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">1</div>
            <p className="text-gray-300">افتح الملف الذي تم تحميله</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">2</div>
            <p className="text-gray-300">إذا طلب النظام، اختر "السماح من هذا المصدر"</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">3</div>
            <p className="text-gray-300">اضغط "تثبيت" وانتظر</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 shrink-0 bg-[#8B0000] rounded-full flex items-center justify-center font-bold text-white">4</div>
            <p className="text-gray-300">افتح اللعبة واستمتع!</p>
          </div>
        </div>

        <a href="/" className="inline-block mt-8 text-gray-500 hover:text-white transition-colors">
          العودة للرئيسية
        </a>
      </div>
    </div>
  );
}
