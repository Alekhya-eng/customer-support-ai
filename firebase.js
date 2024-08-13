// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnrEkTtxr76Aha8lvkt-qnAjdjBawY-Mc",
  authDomain: "chatbot-ai-8e86f.firebaseapp.com",
  projectId: "chatbot-ai-8e86f",
  storageBucket: "chatbot-ai-8e86f.appspot.com",
  messagingSenderId: "584318151022",
  appId: "1:584318151022:web:b7a36054c4f14fa8fe397f",
  measurementId: "G-BVDY8J8CTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export auth methods and instances
export { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut };
