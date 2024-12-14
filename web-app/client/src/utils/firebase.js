// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskflow-65efa.firebaseapp.com",
  projectId: "taskflow-65efa",
  storageBucket: "taskflow-65efa.appspot.com",
  messagingSenderId: "1014560714568",
  appId: "1:1014560714568:web:73492b9c7c0dc903718d7d",
  measurementId: "G-PCT5P825C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);