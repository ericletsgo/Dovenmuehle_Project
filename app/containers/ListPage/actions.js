/*
 *
 * ListPage actions
 *
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const loadStrings = () => ({ type: LOAD_STRINGS });
export const loadStringsSuccess = strings => ({
  type: LOAD_STRINGS_SUCCESS,
  strings,
});
export const loadStringsError = error => ({ type: LOAD_STRINGS_ERROR, error });
