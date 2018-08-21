import {combineReducers} from 'redux';

import authReducer from './auth.js';
import docReducer from './docReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  docReducer: docReducer
});

export default rootReducer;
