import React, { useState, useEffect } from 'react';
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import Header from './Header';
import SideMenu from './SideMenu';
import Body from './Body';
import styles from './Layout.module.scss';

const Layout = ({ setName, addDetails }: any) => {
  const [userInfo, setUserInfo]: any = useState({});
  useEffect(()=> {
    const { displayName } = userInfo;
  
    setName && setName(displayName);
    addDetails && addDetails(userInfo);
  // eslint-disable-next-line
  }, [userInfo])

  return (
    <FirebaseAuthConsumer>
      {({ user }) => {
        setUserInfo(user);

        return (
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
      }}
    </FirebaseAuthConsumer>
  )
};

export default Layout;
