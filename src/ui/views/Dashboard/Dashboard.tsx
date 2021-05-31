import React from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import Panel from 'ui/components/Panel';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <Panel title="Dashboard" className={styles.panel}>
    User Details:
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <pre className={styles.code}>
            {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
          </pre>
        );
      }}
    </FirebaseAuthConsumer>
  </Panel>
);

export default Dashboard;
