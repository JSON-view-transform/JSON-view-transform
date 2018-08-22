import * as types from '../actions/types.js';

export default function(state = {data: null, error: null}, action) {
  switch (action.type) {
    case types.FETCH_USER:
      return {...state, data: action.payload};
    case types.AUTH_ERROR:
      return {...state, data: false, error: action.payload};
    default:
      return state;
  }
};

