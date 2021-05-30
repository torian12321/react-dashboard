import * as React from "react";
import Card from 'ui/components/Card';
import Button from 'ui/components/Button';
import firebase from "firebase/app";
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const handleGoogleAuth = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <div className={styles.page}>
      <Card>
        <Button
          label='Sign In with Google'
          onClick={handleGoogleAuth}
        />
      </Card>
    </div>
  );
};

export default SignIn;