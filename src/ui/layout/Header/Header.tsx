import React from 'react';
import { Props } from './Header.interfaces';
import styles from './Header.module.scss';

const Body = ({ name, role }: Props) => (
  <header className={styles.wrapper}>
    <span className={styles.name}>{name}</span>
    <span className={styles.role} >{role}</span>
  </header>
);

export default Body;
