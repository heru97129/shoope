// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lq_WDIFF3HYQn5_PDwxJQgDukQNqCi0",
  authDomain: "shoopeapp-f909b.firebaseapp.com",
  projectId: "shoopeapp-f909b",
  storageBucket: "shoopeapp-f909b.appspot.com",
  messagingSenderId: "565898691804",
  appId: "1:565898691804:web:54d6e5b54c47ecd743a019",
  measurementId: "G-WCFGKSV2CJ"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const db = getFirestore(firebaseapp)
export default db