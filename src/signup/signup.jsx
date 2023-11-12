import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref as databaseRef, update } from 'firebase/database';

// Import your Firebase configuration and assets
import { auth } from '../firebaseConfig';
import google from '../assets/Google.png';
import './signup.css';

function Signup(props) {
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
          scans: {
            placeholder: "Place holder" // Use a placeholder value
          } // Initialize scans as an empty array
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
            <h2 className="screen-title">SQrL</h2>
            <div className="form-container">
                <div className="close-button" >&times;</div>
                <form>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email address"
                            
                            
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            
                            
                            required
                        />
                    </div>
                    <button type="submit" className="submitt-btn">Create account</button>
                    <div className="account-exists">
                        Already have an account? <a href="/login">Log in</a>
                    </div>
                </form>
            </div>
        </div>
          Continue with
          <div className="google" onClick={handleGoogleSignIn}>
            <img src={google} alt="Google Sign-In" />
            {/* <img src={apple} alt="Apple Sign-In" />
            <img src={facebook} alt="Facebook Sign-In" /> */}
          </div>
        
      
    </div>
  );
}

export default Signup;
