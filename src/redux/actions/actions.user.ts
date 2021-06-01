import { Action } from 'redux/common';
import * as ACTIONS from 'redux/actions/actions.types';

export const userReset = (): Action => ({
  type: ACTIONS.USER_RESET,
});

export const userSetName = (name: string): Action => ({
  type: ACTIONS.USER_SET_NAME,
  payload: {
    name,
  },
});

export const userAddDetails = (details: Object): Action => ({
  type: ACTIONS.USER_ADD_DETAILS,
  payload: {
    details,
  },
});
