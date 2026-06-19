import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// REPLACE with your Firebase config values
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_KEY",
  authDomain: "REPLACE_WITH_YOUR_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
