import React, { useState } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { PATHS } from 'consts';
import Btn from './SideMenu.Btn';
import styles from './SideMenu.module.scss';

const Link = ({ label, href, onClick }: any) => (
  <li>
    <NavLink
      to={href}
      className={styles.link}
      activeClassName={styles.linkActive}
      onClick={onClick}
    >
      {label}
    </NavLink>
  </li>
);

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Btn onClick={toggleMenu} />
      <div className={classnames(
        styles.menu,
        isOpen && styles.isOpen
      )}>
        <span className={styles.title}>
          Dashboard
        </span>

        <ul className={styles.menuLinksList}>
          <Link href={PATHS.DASHBOARD.path} label={PATHS.DASHBOARD.label} onClick={closeMenu} />
          <Link href={PATHS.SETTINGS.path} label={PATHS.SETTINGS.label} onClick={closeMenu} />
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
