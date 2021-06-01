import { combineReducers } from 'redux';
import user, { State as StateUser } from './user.reducers';

export interface AppState {
  user: StateUser,
}

const rootReducer = combineReducers({
  user,
});


export default rootReducer;
