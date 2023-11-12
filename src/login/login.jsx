import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref as databaseRef, update } from 'firebase/database';
import squirrelLogo from '../assets/logo.png';

// Import your Firebase configuration and assets
import { auth } from '../firebaseConfig';
import google from '../assets/Google.png';
import './login.css';

function Login(props) {
  const provider = new GoogleAuthProvider();
  const db = getDatabase(); // Initialize Firebase Database

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        console.log(user);
  
        // Update (or create) the user's profile in Firebase Realtime Database
        const userRef = databaseRef(db, `users/${user.uid}`);
        await update(userRef, {
          email: user.email,
          name: user.displayName,
          // Do not overwrite 'scans' if it already exists
        });
  
        // Set user ID in Local Storage
        localStorage.setItem('userId', user.uid);
  
        console.log("User profile updated in Firebase Database");
  
        // Redirect to the desired route (e.g., '/')
        window.location.href = '/'; // This will change the URL and trigger a page reload
      })
      .catch((error) => {
        console.error("Error during sign-in: ", error);
        // Handle errors here
      });
  };

  return (
    <div className="main">
      <div className="login-container">
      <h1 className="screen-title">SQrL</h1> {/* Title added here */}
      <div className="login-logo">
        <img src={squirrelLogo} alt="Logo" className="logo-squirrel" />
      </div>
      <button className="button-create-account">Create account</button>
      <div className="divider">or</div>
      <button className="button-login">Log in</button>
    </div>
        <div className="continue">
          Continue with
          <div className="google" onClick={handleGoogleSignIn}>
            <img src={google} alt="Google Sign-In" />
            {/* <img src={apple} alt="Apple Sign-In" />
            <img src={facebook} alt="Facebook Sign-In" /> */}
          </div>
        </div>
      </div> 
    
  );
}

export default Login;
