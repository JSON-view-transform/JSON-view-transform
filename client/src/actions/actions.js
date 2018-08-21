import * as types from './types.js';

export function pasteData(data) {
  return {
    type: types.PASTE_DATA,
    payload: data
  }
}  

export function changeTitle(title) {
  return {
    type: types.CHANGE_TITLE,
    payload: title
  }
};
