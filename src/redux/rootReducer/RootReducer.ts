import {combineReducers} from 'redux';
import authReducer from '../reducer/authReducer';

export const RootReducer = combineReducers({
  Auth: authReducer,
});
