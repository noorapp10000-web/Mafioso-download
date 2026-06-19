import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ← ضع apiKey الحقيقي هنا — أضفه كـ Secret اسمه VITE_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "REPLACE_WITH_YOUR_KEY",
  authDomain: "mafioso-30ea1.firebaseapp.com",
  projectId: "mafioso-30ea1",
  storageBucket: "mafioso-30ea1.firebasestorage.app",
  messagingSenderId: "51204344415",
  appId: "1:51204344415:web:ba0f4d719c25d963bf29ea",
  measurementId: "G-L5CERN7G9N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics — only in browser
if (typeof window !== "undefined") {
  getAnalytics(app);
}

// ── Download counter ─────────────────────────────────────────────────────────
// Collection: "stats", Document: "global", Field: "downloads"
export async function incrementDownloadCount(): Promise<void> {
  try {
    const ref = doc(db, "stats", "global");
    const snap = await getDoc(ref);
    if (snap.exists()) {
      await updateDoc(ref, { downloads: increment(1) });
    } else {
      await setDoc(ref, { downloads: 1 });
    }
  } catch (err) {
    // Don't block the download if counter fails
    console.error("Download counter error:", err);
  }
}

export default app;
