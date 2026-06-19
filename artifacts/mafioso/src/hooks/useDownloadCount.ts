import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export function useDownloadCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Realtime listener — بيتحدث لحظة بلحظة
    const unsub = onSnapshot(
      doc(db, 'stats', 'global'),
      (snap) => {
        if (snap.exists()) {
          setCount(snap.data().downloads ?? 0);
        } else {
          setCount(0);
        }
      },
      () => setCount(null) // silent on error
    );
    return () => unsub();
  }, []);

  return count;
}
