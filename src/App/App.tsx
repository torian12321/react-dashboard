import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SignIn from '../ui/views/SignIn';
import DashBoard from '../ui/layout';

const App = () => (
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
);

export default App;
