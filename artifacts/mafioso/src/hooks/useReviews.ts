import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Review } from '../types/review';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const q = query(
          collection(db, 'reviews'),
          where('approved', '==', true),
          orderBy('timestamp', 'desc')
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Review));
        setReviews(data);
      } catch (err: any) {
        // Handle gracefully, especially since we have placeholder Firebase credentials
        console.error("Error fetching reviews:", err);
        setError("تعذر تحميل التقييمات");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const addReview = async (review: Omit<Review, 'id' | 'timestamp' | 'approved'>) => {
    try {
      await addDoc(collection(db, 'reviews'), {
        ...review,
        timestamp: serverTimestamp(),
        approved: false,
      });
      return true;
    } catch (err: any) {
      console.error("Error adding review:", err);
      throw new Error("تعذر إرسال التقييم");
    }
  };

  return { reviews, loading, error, addReview };
}
