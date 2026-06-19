import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const APK_FILENAME = "/mafioso.apk";

export default function FloatingDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = APK_FILENAME;
    link.download = "مافيوسو.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#8B0000] shadow-[0_-4px_20px_rgba(139,0,0,0.5)] p-3 flex items-center justify-between gap-3 border-t border-[#d4af37]"
        >
          <div className="flex items-center gap-3">
            <img src="/mascot.png" alt="Mascot" className="w-10 h-10 object-contain" />
            <span className="text-white font-bold">حمّل مافيوسو</span>
          </div>
          <button 
            onClick={handleDownload}
            className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg border border-[#d4af37]"
          >
            تحميل
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
