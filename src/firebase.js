// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjHbasGapYuURIrBjGCpxH_jjjL0HNzU",
  authDomain: "test-1d4a0.firebaseapp.com",
  projectId: "test-1d4a0",
  storageBucket: "test-1d4a0.appspot.com",
  messagingSenderId: "433711722575",
  appId: "1:433711722575:web:d0ea765f3edcac1f567a3a",
  measurementId: "G-Q19DXP9NPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
