import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('ListPage actions', () => {
  describe('Load String', () => {
    it('has a type of LOAD_STRINGS', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });
});

describe('ListPage actions', () => {
  describe('Load Strings Sucess', () => {
    it('has a type of LOAD_STRINGS_SUCCESS', () => {
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
      };
      expect(loadStringsSuccess()).toEqual(expected);
    });
  });
});

describe('ListPage actions', () => {
  describe('Load Strings Sucess', () => {
    it('has a type of LOAD_STRINGS_ERROR', () => {
      const expected = {
        type: LOAD_STRINGS_ERROR,
      };
      expect(loadStringsError()).toEqual(expected);
    });
  });
});
