import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export default function GoogleSignIn() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User info:", result.user);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn-google-login">
      Sign in with Google
    </button>
  );
}
