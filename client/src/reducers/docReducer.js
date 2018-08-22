import * as types from '../actions/types';

export default function (state = {title: 'untitled', data: ''}, action ) {
  switch(action.type){
    case types.CHANGE_TITLE:
      return {...state, title: action.payload}
    case types.PASTE_DATA:
      return { title: state.title, data: action.payload}  
    
    default:
      return state;
  }
}