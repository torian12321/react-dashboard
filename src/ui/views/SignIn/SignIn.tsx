import * as React from "react";
import firebase from "firebase/app";

export const SignIn = () => {
  return (
    <div>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
      <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignIn;