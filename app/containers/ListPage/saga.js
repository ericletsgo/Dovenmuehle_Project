import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_STRINGS } from './constants';
import { loadStringsSuccess, loadStringsError } from './actions';

export function* loadStrings() {
  const requestURL = 'http://localhost:3000/loadstrings';

  try {
    const strings = yield call(request, requestURL);
    yield put(loadStringsSuccess(strings));
  } catch (err) {
    yield put(loadStringsError(err));
  }
}

// Individual exports for testing
export default function* listPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_STRINGS, loadStrings);
}
