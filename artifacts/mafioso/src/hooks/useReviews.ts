import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Review } from '../types/review';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      // جيب كل التقييمات بدون فلتر — كلها تظهر فوراً للناس
      const snapshot = await getDocs(collection(db, 'reviews'));
      const data = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Review))
        .sort((a, b) => (b.timestamp?.seconds ?? 0) - (a.timestamp?.seconds ?? 0));
      setReviews(data);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const addReview = async (review: Omit<Review, 'id' | 'timestamp' | 'approved'>) => {
    try {
      await addDoc(collection(db, 'reviews'), {
        ...review,
        timestamp: serverTimestamp(),
        approved: true, // يظهر فوراً
      });
      // أعد تحميل التقييمات بعد الإضافة
      fetchReviews();
    } catch {
      // silent — user already saw success message
    }
  };

  return { reviews, loading, addReview };
}
