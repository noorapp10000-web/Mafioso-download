import { useState } from 'react';
import { useReviews } from '../hooks/useReviews';

export default function Reviews() {
  const { reviews, loading, error, addReview } = useReviews();
  
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || comment.length < 10 || !name) return;
    
    setSubmitStatus('submitting');
    try {
      await addReview({ name, rating, comment });
      setSubmitStatus('success');
      setName('');
      setRating(0);
      setComment('');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="reviews" className="bg-[#0d0d0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black gold-text">آراء اللاعبين</h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-gray-400 py-10">كن أول من يقيّم اللعبة! ⭐</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {reviews.map((r) => (
              <div key={r.id} className="bg-[#111111] border border-[rgba(139,0,0,0.2)] rounded-xl p-5">
                <div className="font-bold text-[#f0f0f0]">{r.name}</div>
                <div className="text-[#d4af37] my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < r.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="text-[#cccccc] mt-2 text-sm leading-relaxed">{r.comment}</p>
                <div className="text-xs text-[#888888] mt-4">
                  {r.timestamp?.toDate ? r.timestamp.toDate().toLocaleDateString('ar-EG') : ''}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-[#111111] border border-[rgba(139,0,0,0.3)] rounded-xl p-6 md:p-8 mt-16">
          <h3 className="gold-text text-2xl font-bold mb-6 text-center">شارك رأيك</h3>
          
          {submitStatus === 'success' ? (
            <div className="text-center text-green-500 font-bold py-8">
              شكراً! تقييمك قيد المراجعة وهيظهر قريباً ✅
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">الاسم</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8B0000]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">التقييم</label>
                <div className="flex gap-1 text-2xl cursor-pointer" onMouseLeave={() => setHoverRating(0)}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i}
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHoverRating(i + 1)}
                      className={(hoverRating || rating) > i ? 'text-[#d4af37]' : 'text-gray-600'}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">رأيك في اللعبة</label>
                <textarea 
                  required
                  minLength={10}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8B0000] min-h-[100px]"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="mt-2 w-full bg-[#8B0000] hover:bg-[#a01010] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {submitStatus === 'submitting' ? 'جاري الإرسال...' : 'إرسال التقييم'}
              </button>
              
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm text-center mt-2">حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
