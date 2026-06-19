import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowToPlay from "../components/HowToPlay";
import Screenshots from "../components/Screenshots";
import Reviews from "../components/Reviews";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import FloatingDownloadBar from "../components/FloatingDownloadBar";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // pb-20 md:pb-0 → leaves room on mobile so the floating bar never covers content
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <Features />
      <HowToPlay />
      <Screenshots />
      <Reviews />
      <DownloadSection />
      <Footer />
      <FloatingDownloadBar />

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 left-4 md:bottom-10 md:left-10 z-40 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl transition-colors hover:scale-110 active:scale-95"
            style={{
              background: "#8B0000",
              boxShadow: "0 0 16px rgba(139,0,0,0.6)",
              border: "1px solid rgba(212,175,55,0.4)",
            }}
            aria-label="العودة للأعلى"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
