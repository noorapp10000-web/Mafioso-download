import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Review } from '../types/review';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        // Simple query — no orderBy to avoid needing a composite Firestore index
        const q = query(
          collection(db, 'reviews'),
          where('approved', '==', true)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() } as Review))
          // Sort client-side newest first
          .sort((a, b) => {
            const ta = a.timestamp?.seconds ?? 0;
            const tb = b.timestamp?.seconds ?? 0;
            return tb - ta;
          });
        setReviews(data);
      } catch {
        // Silently fail — show empty state, not an error
        setReviews([]);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const addReview = async (review: Omit<Review, 'id' | 'timestamp' | 'approved'>) => {
    // Fire-and-forget — don't block the success message on network
    addDoc(collection(db, 'reviews'), {
      ...review,
      timestamp: serverTimestamp(),
      approved: false,
    }).catch(() => {/* silent — user already saw success */});
  };

  return { reviews, loading, addReview };
}
