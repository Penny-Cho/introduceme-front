import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const createFirebaseApp = (): FirebaseApp => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  // 이미 초기화된 앱이 있다면 첫 번째 앱을 반환
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined" && "measurementId" in firebaseConfig) {
    getAnalytics();
  }

  return app;
};
