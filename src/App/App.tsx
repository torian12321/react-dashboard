import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import { BrowserRouter } from "react-router-dom";
import { config } from "config";
import SignIn from 'ui/views/SignIn';
import DashBoard from 'ui/layout';

const App = () => {
  console.log('App ini');
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn = false }) => {
          console.log('App consumer');
          return !isSignedIn
          ? <SignIn />
          : (
            <BrowserRouter>
              <DashBoard />
            </BrowserRouter>
          )
        }
      }
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};

export default App;
