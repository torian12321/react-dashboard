import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { logout } from 'authActions';
import Button from 'ui/components/Button';
import styles from './Settings.module.scss';

const Settings = () => (
  <div className={styles.wrapper}>
    <Button label='Sign Out' onClick={logout} />
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <pre style={{ height: 300, overflow: "auto" }}>
            {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
          </pre>
        );
      }}
    </FirebaseAuthConsumer>
  </div>
);

export default Settings;
