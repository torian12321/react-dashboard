import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { config } from "config";
import SignIn from 'ui/views/SignIn';
import DashBoard from 'ui/layout';

const App = () => (
  <FirebaseAuthProvider {...config} firebase={firebase}>
    <FirebaseAuthConsumer>
      {({ isSignedIn = false }) => !isSignedIn
        ? <SignIn />
        : (
          <BrowserRouter>
            <DashBoard />
          </BrowserRouter>
        )
    }
    </FirebaseAuthConsumer>
  </FirebaseAuthProvider>
);

export default App;
