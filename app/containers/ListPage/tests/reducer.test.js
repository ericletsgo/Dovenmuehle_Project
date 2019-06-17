// import produce from 'immer';
import listPageReducer from '../reducer';
import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('listPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      strings: [],
      loading: false,
      error: false,
      rendered: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(
      listPageReducer({
        strings: [],
        loading: false,
        error: false,
        rendered: false,
      }),
    ).toEqual(expectedResult);
  });

  it('should handle the Load Strings action correctly', () => {
    const expectedResult = {
      loading: true,
      error: false,
      rendered: true,
      strings: [],
    };
    expect(listPageReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the Load Strings Success action correctly', () => {
    const expectedResult = {
      loading: false,
      error: false,
      rendered: true,
    };
    expect(listPageReducer(state, loadStringsSuccess())).toEqual(
      expectedResult,
    );
  });

  it('should handle the Load Strings Error action correctly', () => {
    const expectedResult = {
      loading: false,
      error: true,
      rendered: true,
      strings: [],
    };
    expect(listPageReducer(state, loadStringsError())).toEqual(expectedResult);
  });
});
