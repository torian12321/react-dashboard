import { createSelector } from 'reselect';
import { AppState } from 'redux/reducers';
import { State as StateUser } from 'redux/reducers/user.reducers';

const getUser = (state: AppState): StateUser =>
  state.user || state || {};

export const getUserDetails = createSelector(
  getUser,
  (user: StateUser): Object =>
  user.details || {}
);
