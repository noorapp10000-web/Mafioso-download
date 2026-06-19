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
      <nav className="sticky top-0 z-50 backdrop-blur bg-[rgba(0,0,0,0.8)] border-b border-[rgba(139,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="gold-text font-black text-2xl">مافيوسو</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 space-x-reverse gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-bold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
              >
                <span className="text-2xl">☰</span>
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
            className="md:hidden fixed inset-0 z-40 bg-[rgba(10,10,10,0.95)] backdrop-blur pt-20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-xl font-bold w-full text-center"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 text-red-500 font-bold text-xl border border-red-900 rounded-full px-6 py-2"
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
