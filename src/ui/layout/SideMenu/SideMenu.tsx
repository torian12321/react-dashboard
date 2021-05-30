import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../consts';
import styles from './SideMenu.module.scss';

const Link = ({ label, href, onClick }: any) => (
  <li>
    <NavLink
      to={href}
      className={styles.link}
      activeClassName={styles.linkActive}
      // onClick={onClick}
    >
      {label}
    </NavLink>
  </li>
);

const SideMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.menu}>
      <span className={styles.title}>
        Dashboard
      </span>

      <ul className={styles.menuLinksList}>
        <Link href={PATHS.HOME.path} label={PATHS.DASHBOARD.label} />
        <Link href={PATHS.SETTINGS.path} label={PATHS.SETTINGS.label} />
      </ul>
    </div>
  </div>
);

export default SideMenu;
