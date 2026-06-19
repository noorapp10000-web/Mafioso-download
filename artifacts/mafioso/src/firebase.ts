import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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

if (typeof window !== "undefined") {
  getAnalytics(app);
}

const DOWNLOAD_KEY = "mafioso_counted";

/**
 * Increments the download counter in Firebase — only once per device/browser.
 * Uses localStorage to avoid counting the same person twice (like Play Store unique installs).
 */
export async function incrementDownloadCount(): Promise<void> {
  try {
    if (typeof window !== "undefined" && localStorage.getItem(DOWNLOAD_KEY)) {
      return;
    }

    const ref = doc(db, "stats", "global");
    const snap = await getDoc(ref);
    if (snap.exists()) {
      await updateDoc(ref, { downloads: increment(1) });
    } else {
      await setDoc(ref, { downloads: 1 });
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(DOWNLOAD_KEY, "1");
    }
  } catch (err) {
    console.error("Download counter error:", err);
  }
}

export default app;
