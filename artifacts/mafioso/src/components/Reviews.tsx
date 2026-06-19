import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReviews } from '../hooks/useReviews';

export default function Reviews() {
  const { reviews, loading, addReview } = useReviews();

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !name.trim() || !comment.trim()) return;

    setStatus('submitting');
    try {
      addReview({ name: name.trim(), rating, comment: comment.trim() });
      setStatus('success');
      setName('');
      setRating(0);
      setComment('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="reviews" className="bg-[#0d0d0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black gold-text">آراء اللاعبين</h2>
          <p className="text-[#888] mt-3 text-sm">تقييمات حقيقية من اللاعبين</p>
        </div>

        {/* Reviews grid */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-4xl mb-3">⭐</p>
            <p className="text-gray-400 font-bold">كن أول من يقيّم اللعبة!</p>
            <p className="text-gray-600 text-sm mt-1">شارك تجربتك مع اللاعبين</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{
                  background: '#111',
                  border: '1px solid rgba(139,0,0,0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div className="font-bold text-[#f0f0f0] text-base">{r.name}</div>
                <div className="text-[#d4af37] my-1 text-lg tracking-wide">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < r.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="text-[#ccc] mt-2 text-sm leading-relaxed">{r.comment}</p>
                <div className="text-xs text-[#555] mt-3">
                  {r.timestamp?.toDate
                    ? r.timestamp.toDate().toLocaleDateString('ar-EG')
                    : ''}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Submit form */}
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 md:p-8 mt-4"
          style={{
            background: '#111',
            border: '1px solid rgba(139,0,0,0.3)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          }}
        >
          <h3 className="gold-text text-2xl font-black mb-6 text-center">شارك رأيك</h3>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center gap-3"
              >
                <div className="text-5xl">✅</div>
                <p className="text-xl font-black" style={{ color: '#d4af37' }}>
                  شكراً على تقييمك!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-gray-500 underline hover:text-gray-300 transition-colors"
                >
                  إرسال تقييم آخر
                </button>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center gap-3"
              >
                <div className="text-5xl">❌</div>
                <p className="text-xl font-black text-red-400">
                  حصل خطأ — حاول مرة ثانية
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-gray-500 underline hover:text-gray-300 transition-colors"
                >
                  حاول مجدداً
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">الاسم</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="اكتب اسمك هنا"
                    className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-colors"
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B0000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                {/* Stars */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">التقييم</label>
                  <div
                    className="flex gap-2 text-3xl cursor-pointer"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setRating(i + 1)}
                        onMouseEnter={() => setHoverRating(i + 1)}
                        className="transition-transform hover:scale-125 select-none"
                        style={{ color: (hoverRating || rating) > i ? '#d4af37' : '#333' }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {rating === 0 && (
                    <p className="text-xs text-gray-600 mt-1">اضغط على النجوم عشان تختار</p>
                  )}
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">رأيك في اللعبة</label>
                  <textarea
                    required
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="شاركنا رأيك..."
                    rows={4}
                    className="w-full rounded-xl px-4 py-3 text-white focus:outline-none transition-colors resize-none"
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#8B0000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || rating === 0}
                  className="w-full py-3 rounded-2xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
                  style={{ background: '#8B0000' }}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
                      جاري الإرسال...
                    </span>
                  ) : (
                    'إرسال التقييم ✉️'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
