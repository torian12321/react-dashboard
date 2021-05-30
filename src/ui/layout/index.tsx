import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Body from './Body';
import styles from './layout.module.scss';

const Layout = () => (
  <div className={styles.wrapper}>
    <div className={styles.menu}>
      <SideMenu />
    </div>
    <div className={styles.content}>
      <Header />
      <Body />
    </div>
  </div>
);

export default Layout;
