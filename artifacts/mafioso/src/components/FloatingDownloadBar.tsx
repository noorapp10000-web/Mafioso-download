import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { incrementDownloadCount } from "../firebase";

const APK_FILENAME = "/mafioso.apk";

export default function FloatingDownloadBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed z-50"
          style={{ bottom: 0, left: 0, right: 0 }}
        >
          {/* Safe-area bottom padding */}
          <div
            style={{
              background: "linear-gradient(135deg, #6b0000, #8B0000)",
              borderTop: "1px solid rgba(212,175,55,0.4)",
              boxShadow: "0 -4px 24px rgba(139,0,0,0.55)",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <img src="/mascot.png" alt="" className="w-9 h-9 object-contain shrink-0" />
              <div>
                <p className="text-white font-black text-sm leading-tight" style={{ fontFamily: "'Cairo', sans-serif" }}>
                  حمّل مافيوسو
                </p>
                <p className="text-white/60 text-[10px]" style={{ fontFamily: "'Cairo', sans-serif" }}>
                  مجاني • Android
                </p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="shrink-0 text-white font-black text-sm px-5 py-2 rounded-xl transition-all active:scale-95"
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(212,175,55,0.6)",
                color: "#f0d060",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              ⬇️ تحميل
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
