import * as types from './types.js';

export function changeTitle(title) {
  return {
    type: types.CHANGE_TITLE,
    payload: title
  }
};
