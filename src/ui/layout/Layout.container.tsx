import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
// import { Props } from './Layout.interfaces';
import { Dispatch } from 'redux/common';
import { userSetName, userAddDetails } from 'redux/actions/user.actions';

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  setName: (name: string) => dispatch(userSetName(name)),
  addDetails: (details: Object) => dispatch(userAddDetails(details)),
});

export default connect(
  null,
  mapDispatchToProps,
)(React.memo(Layout));
