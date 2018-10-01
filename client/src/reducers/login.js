import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR } from '../actions/login'

const defaultState = {
  error: null,
  pending: false,
  user: null,
  isLoggedIn: false
}

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        pending: true,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isLoggedIn: true,
        user: action.user
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
        isLoggedIn: false,
        user: null
      }
    default:
      return state
  }
}
