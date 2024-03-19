// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo1L1EEoeX8iiaj4AZ8c4kKSqt418AYqo",
  authDomain: "netflix-gpt-7bc54.firebaseapp.com",
  projectId: "netflix-gpt-7bc54",
  storageBucket: "netflix-gpt-7bc54.appspot.com",
  messagingSenderId: "528360737779",
  appId: "1:528360737779:web:05db07cd3d6f6b129f2086",
  measurementId: "G-PQ98F5R7PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
