import React from 'react';
import firebase from "firebase/app";
// import { FirebaseAuthConsumer } from "@react-firebase/auth";
import Button from '../../components/Button';
import styles from './Settings.module.scss';

const Settings = () => {
  const handleOnLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={styles.wrapper}>
      <Button label='Sign Out' onClick={handleOnLogout} />
      {/* <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <pre style={{ height: 300, overflow: "auto" }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          );
        }}
      </FirebaseAuthConsumer> */}
    </div>
  );
};

export default Settings;
