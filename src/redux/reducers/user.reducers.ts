import * as ACTIONS from 'redux/actions/actions.types';
import { Action } from 'redux/common';

export interface State {
  name: string,
  role: string,
  details: Object,
};

const initialState: State = {
  name: '',
  role: 'admin',
  details: {},
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ACTIONS.USER_SET_NAME:
      const { name }: any = action.payload;
      return {
        ...state,
        name,
      };
    case ACTIONS.USER_ADD_DETAILS:
      const { details }: any = action.payload;
      
      return {
        ...state,
        details: {
          ...state.details,
          ...details,
        }
      };
    case ACTIONS.USER_RESET:
      return initialState;
    default:
      return state;
  };
};

export default reducer;
