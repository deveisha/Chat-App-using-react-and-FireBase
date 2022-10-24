import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBETKrBSzD25Z8O9TdnNpEpqNLzq9gwh10",
  authDomain: "let-s-talk-chat-app-a0332.firebaseapp.com",
  projectId: "let-s-talk-chat-app-a0332",
  storageBucket: "let-s-talk-chat-app-a0332.appspot.com",
  messagingSenderId: "343334352254",
  appId: "1:343334352254:web:998565d2da57b03942ef2f",
  measurementId: "G-6WP4BFEB45"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);