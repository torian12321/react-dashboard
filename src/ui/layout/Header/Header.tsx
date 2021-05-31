import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import styles from './Header.module.scss';

const Body = () => (
  <FirebaseAuthConsumer>
    {({ user = {} }) => {
      const { displayName } = user;
      const name = displayName || 'Anonymous';

      return (
        <header className={styles.wrapper}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role} >admin</span>
        </header>
      );
    }}
  </FirebaseAuthConsumer>  
);

export default Body;
