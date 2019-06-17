/*
 *
 * ListPage reducer
 *
 */
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  strings: [],
  loading: false,
  error: false,
  rendered: false,
};

/* eslint-disable default-case, no-param-reassign */
const listPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STRINGS:
      return {
        ...state,
        loading: true,
        error: false,
        rendered: true,
      };
    case LOAD_STRINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        strings: action.strings,
        rendered: true,
      };
    case LOAD_STRINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        rendered: true,
      };
    default:
      return state;
  }
};

export default listPageReducer;
