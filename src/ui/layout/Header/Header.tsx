import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import styles from './Header.module.scss';

const Body = () => (
  <FirebaseAuthConsumer>
    {({ user = {} }) => {
      const { displayName } = user;

      return (
        <header className={styles.wrapper}>
          <span className={styles.name}>{displayName}</span>
          <span className={styles.role} >admin</span>
        </header>
      );
    }}
  </FirebaseAuthConsumer>  
);

export default Body;
