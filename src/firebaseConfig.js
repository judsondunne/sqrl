// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADuC-O_HJvrUpL54AyfScgGVyo8ashDXw",
  authDomain: "sqrl-a521c.firebaseapp.com",
  projectId: "sqrl-a521c",
  storageBucket: "sqrl-a521c.appspot.com",
  messagingSenderId: "188689627038",
  appId: "1:188689627038:web:d78a2e8d29cffe8136488f",
  measurementId: "G-9NM8769P5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);