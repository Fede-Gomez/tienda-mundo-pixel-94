import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics con modo debug en localhost
export const analytics = getAnalytics(app);

// Activar modo debug si estamos en localhost
if (window.location.hostname === "localhost") {
  // @ts-ignore - Firebase Analytics doesn't have a direct setter for debug_mode in the SDK,
  // but this is the common way to force it for the DebugView
  // window['ga-debug'] = true; 
}

// Initialize Firestore with local persistence caching
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});
