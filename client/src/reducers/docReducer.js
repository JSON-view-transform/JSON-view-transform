import * as types from '../actions/types';

export default function (state = {title: 'untitled'}, action ) {
  switch(action.type){
    case types.CHANGE_TITLE:
      return {...state, title: action.payload}
    default:
      return state;
  }
}