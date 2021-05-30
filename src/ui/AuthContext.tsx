import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  // FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
// import { config } from "../config";

// const config: any = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

export const App = () => {
  return (
    // <FirebaseAuthProvider {...config} firebase={firebase}>
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
      {/* <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <pre style={{ height: 300, overflow: "auto" }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          );
        }}
      </FirebaseAuthConsumer> */}
      <div>
        {/* <IfFirebaseAuthed>
          {() => {
            return <div>You are authenticated</div>;
          }}
        </IfFirebaseAuthed>
        <IfFirebaseAuthedAnd
          filter={({ providerId }) => providerId !== "anonymous"}
        >
          {({ providerId }) => {
            return <div>You are authenticated with {providerId}</div>;
          }}
        </IfFirebaseAuthedAnd> */}
      </div>
    </div>
    // </FirebaseAuthProvider>
  );
};

export default App;