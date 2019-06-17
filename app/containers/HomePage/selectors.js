/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.homePage || initialState;

const makeSelectString = () =>
  createSelector(
    selectHome,
    substate => substate.string,
  );

export { selectHome, makeSelectString };
