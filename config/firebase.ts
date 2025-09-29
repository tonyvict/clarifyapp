import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
// Replace these values with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAYm4lq8LttCQJt30COEKMsTPbxEbdZ9gg",
  authDomain: "clarify-f7500.firebaseapp.com",
  projectId: "clarify-f7500",
  storageBucket: "clarify-f7500.firebasestorage.app",
  messagingSenderId: "841218600430",
  appId: "1:841218600430:web:5386743cc427bef01972ff",
  measurementId: "G-69VZ0WFLZ8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
