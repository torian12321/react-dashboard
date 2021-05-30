import React from 'react';
import Panel from '../../components/Panel';
import styles from './Body.module.scss';

const Body = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      username
    </header>
    <Panel title='Settings' className={styles.panel}>
      abccc
    </Panel>
  </div>
);

export default Body;
