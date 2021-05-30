import * as React from "react";
import firebase from "firebase/app";

export const SignIn = () => {
  const handleGoogleAuth = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <div>
      <button onClick={handleGoogleAuth}>
        Sign In with Google
      </button>
      {/* <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button> */}
    </div>
  );
};

export default SignIn;