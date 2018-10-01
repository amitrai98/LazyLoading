import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: '',
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

/**
 * It handles login lifecycle call backs.
 * @param {state to be updated while login is in progress} state 
 * @param {actions to be fired wile login is in prgress} action 
 */
export default function apiLogin(state = initialState, action) {
  //login call back checks
  switch (action.type) {
    // login api call
    case types.API_REQUEST_LOGIN:
      return {
        ...state,
        data: [],
        apiMsg:'received login request',
        isFetching: true
      };

      //login request succeded.
      case types.API_REQUEST_SUCCEEDED_LOGIN:
      return {
        ...state,
        isFetching: false,
        apiMsg:'login success',
        data: action.data_is
      };

      // login request failed.
    case types.API_REQUEST_FAILED_LOGIN:
      return {
        ...state,
        apiMsg:'login failed',
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}


