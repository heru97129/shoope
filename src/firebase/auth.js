import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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
const firebaseApp = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
