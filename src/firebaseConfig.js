

// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    
    apiKey: "AIzaSyADuC-O_HJvrUpL54AyfScgGVyo8ashDXw",
    authDomain: "sqrl-a521c.firebaseapp.com",
    projectId: "sqrl-a521c",
    storageBucket: "sqrl-a521c.appspot.com",
    messagingSenderId: "188689627038",
    appId: "1:188689627038:web:d78a2e8d29cffe8136488f",
    measurementId: "G-9NM8769P5S"
  
// Your Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage }; // Updated export statement
