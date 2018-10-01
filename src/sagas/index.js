import {fork} from 'redux-saga/effects';

import {watchLoginRequest} from './LoginSaga';

/**
 * combines all the sagas to one root saga.
 */
export default function* rootSaga() {
  yield [
    fork(watchLoginRequest)
  ]
}
