// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_tntRlN8BoW2ssiMn09ssCCiIGQ55UyA",
  authDomain: "real-estate-marketplace-c63aa.firebaseapp.com",
  projectId: "real-estate-marketplace-c63aa",
  storageBucket: "real-estate-marketplace-c63aa.appspot.com",
  messagingSenderId: "717668467746",
  appId: "1:717668467746:web:a4bf5a67117ac50ae7367b",
  measurementId: "G-0ZXLQQVZVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);