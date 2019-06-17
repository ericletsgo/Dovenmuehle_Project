/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { CHANGE_STRING } from './constants';

// The initial state of the App
export const initialState = {
  string: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STRING:
      return Object.assign({}, state, { string: action.string });
    default:
      return state;
  }
};

export default homeReducer;
