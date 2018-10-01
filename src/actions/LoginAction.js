import * as types from './actionTypes';

/**
 * initiates a login request
 * @param {payload} payload 
 */
export function apiLoginRequest(payload) {
  return {
    type: types.API_REQUEST_LOGIN,
    payload: payload,
    isFetching: false,
    apiMsg:'test'
  }
}
/**
 * called when api responds with success
 * @param {payload to be returned from the api} payload 
 */
export function apiLoginRequestSucceeded(payload) {
  return {
    type: types.API_REQUEST_SUCCEEDED_LOGIN,
    payload: payload,
    apiMsg: 'login success'
  }
}

/**
 * called when api encounter an error.
 * @param {error payload} payload 
 */
export function apiLoginRequestFailed(payload) {
  return {
    type: types.API_REQUEST_FAILED_LOGIN,
    payload: payload,
    apiMsg: 'login failed'
  }
}
