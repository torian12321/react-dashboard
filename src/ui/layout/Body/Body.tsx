import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { PATHS } from 'consts';
import Dashboard from 'ui/views/Dashboard';
import Settings from 'ui/views/Settings';

const Body = () => (
  <>
    <Route exact path={PATHS.DASHBOARD.path}>
      <Dashboard />
    </Route>
    <Route exact path={PATHS.SETTINGS.path}>
      <Settings />
    </Route>
    <Route path="/">
      <Redirect to={PATHS.DASHBOARD.path} />
    </Route>
  </>
);

export default Body;
