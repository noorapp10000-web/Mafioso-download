import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowToPlay from '../components/HowToPlay';
import Screenshots from '../components/Screenshots';
import Reviews from '../components/Reviews';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import FloatingDownloadBar from '../components/FloatingDownloadBar';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      <Navbar />
      <Hero />
      <Features />
      <HowToPlay />
      <Screenshots />
      <Reviews />
      <DownloadSection />
      <Footer />
      <FloatingDownloadBar />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-[#8B0000] text-white rounded-full shadow-[0_0_15px_rgba(139,0,0,0.6)] flex items-center justify-center text-xl hover:bg-[#a01010] transition-colors border border-[rgba(212,175,55,0.5)] md:bottom-10 md:left-10"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
