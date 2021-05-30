import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import SignIn from '../ui/views/SignIn';
import DashBoard from '../ui/layout';

const App = () => (
  <FirebaseAuthConsumer>
    {({ isSignedIn = false }) => !isSignedIn
      ? <SignIn />
      : <DashBoard />
    }
  </FirebaseAuthConsumer>
);

export default App;
