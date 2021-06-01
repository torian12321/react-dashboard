import React from 'react';
import { connect } from 'react-redux';
import { getUserName, getUserRole } from 'redux/selectors/user.selectors';
import { AppState } from 'redux/reducers';
import Header from './Header';
import { Props } from './Header.interfaces';

const mapState = (state: AppState): Props => ({
  name: getUserName(state),
  role: getUserRole(state),
});

export default connect(
  mapState,
)(React.memo(Header));
