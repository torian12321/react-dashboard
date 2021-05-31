import React from 'react';
import { logout } from 'authActions';
import Panel from 'ui/components/Panel';
import Button from 'ui/components/Button';
import styles from './Settings.module.scss';

const Settings = () => (
  <Panel title='Settings' className={styles.panel}>
    <Button label='Sign Out' onClick={logout} />
  </Panel>
);

export default Settings;
