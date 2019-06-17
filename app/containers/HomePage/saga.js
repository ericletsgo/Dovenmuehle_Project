/**
 * Gets the repositories of the user from Github
 */

import { select, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SEND_STRINGS } from './constants';
import { sendStringsSuccess, sendStringsError } from './actions';
import { makeSelectString } from './selectors';

export function* sendString() {
  const string = yield select(makeSelectString());
  const postURL = 'http://localhost:3000/';

  const apiCall = (url, payload) => axios.post(url, payload);

  try {
    const result = yield apiCall(postURL, string);
    if (result) yield put(sendStringsSuccess);
  } catch (err) {
    yield put(sendStringsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  yield takeLatest(SEND_STRINGS, sendString);
}
