import React from 'react';
import Panel from 'ui/components/Panel';
import { Route, Redirect } from "react-router-dom";
import { PATHS } from 'consts';
import Settings from 'ui/views/Settings';
import styles from './Body.module.scss';

const Body = () => (
  <Panel title='Settings' className={styles.panel}>
    <Route exact path={PATHS.DASHBOARD.path}>
    aaaaa
    </Route>
    <Route exact path={PATHS.SETTINGS.path}>
      <Settings />
    </Route>
    <Route path="/">
      <Redirect to={PATHS.DASHBOARD.path} />
    </Route>
  </Panel>
);

export default Body;
