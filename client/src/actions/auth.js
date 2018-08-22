import axios from 'axios';
import * as types from './types.js';

export function fetchUser(history) {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(response => {
        dispatch({type: types.FETCH_USER, payload: response.data || false})
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

export function authError(error) {
  return {type: types.AUTH_ERROR, payload: error};
};

