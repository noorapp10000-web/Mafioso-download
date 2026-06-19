import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'كيف تلعب؟', href: '#how-to-play' },
    { name: 'تقييمات', href: '#reviews' },
    { name: 'تحميل', href: '#download' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur bg-[rgba(0,0,0,0.82)] border-b border-[rgba(139,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="gold-text font-black text-2xl tracking-wide">مافيوسو</a>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-xl focus:outline-none transition-colors hover:bg-white/5"
                aria-label="قائمة"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                  {isOpen ? (
                    <>
                      <path d="M18 6 6 18M6 6l12 12" />
                    </>
                  ) : (
                    <>
                      <path d="M3 12h18M3 6h18M3 18h18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-[rgba(10,10,10,0.97)] backdrop-blur pt-20"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-white block px-4 py-4 rounded-2xl text-xl font-bold w-full text-center transition-colors hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 text-red-400 font-bold text-base border border-red-900 rounded-2xl px-8 py-3 transition-colors hover:bg-red-900/20"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
