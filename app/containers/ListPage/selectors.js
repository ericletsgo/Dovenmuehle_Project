import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listPage state domain
 */

const selectListPageDomain = state => state.listPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListPage
 */

const makeSelectStrings = () =>
  createSelector(
    selectListPageDomain,
    substate => substate.strings,
  );

const makeSelectLoading = () =>
  createSelector(
    selectListPageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectListPageDomain,
    substate => substate.error,
  );

const makeSelectRendered = () =>
  createSelector(
    selectListPageDomain,
    substate => substate.rendered,
  );

export {
  selectListPageDomain,
  makeSelectStrings,
  makeSelectError,
  makeSelectLoading,
  makeSelectRendered,
};
