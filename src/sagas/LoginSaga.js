import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import AppConstants from '../utility/AppConstants';

/**
 * login api calls with saga.
 * @param {login actions} action 
 */
export function* handleLoginRequest(action) {
  try {
    const apiConfig = {
      method: AppConstants.METHOD_TYPE_POST,
      url: AppConstants.BASE_URL,
      data: {
        section_id: '1',
      },
      setTimeout:1000
    };
    const response = yield call(axios, apiConfig);
    yield put({type: types.API_REQUEST_SUCCEEDED_LOGIN, data_is: response.data});
  } catch (e) {
    console.log(e);
    yield put({type: types.API_REQUEST_FAILED_LOGIN, payload: e.message });
  }
}

/**
 * watches for a particular action to be fired in app.
 */
export function* watchLoginRequest() {
  yield takeEvery(types.API_REQUEST_LOGIN, handleLoginRequest);
}
