import { createSelector } from 'reselect';
import { AppState } from 'redux/reducers';
import { State as StateUser } from 'redux/reducers/user.reducers';

const getUser = (state: AppState): StateUser =>
  state.user || state || {};

export const getUserDetails = createSelector(
  getUser,
  (user: StateUser): any =>
    user.details || {}
);

export const getUserName = createSelector(
  [getUser, getUserDetails],
  (user: StateUser, details): string =>
    user.name || details.email || 'Anonymous'
);

export const getUserRole = createSelector(
  getUser,
  (user: StateUser): string =>
    user.role || ''
);
