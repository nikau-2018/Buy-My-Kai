import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR} from '../actions/login'

import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  SHOW_ERROR} from '../actions/register'

const defaultState = {
  error: null,
  pending: false,
  user: null,
  isLoggedIn: false
}

export default function currentUserReducer (state = defaultState, action) {
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

    case REGISTER_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        isLoggedIn: true,
        user: action.user
      }

    case SHOW_ERROR:
      return {
        ...state,
        error: action.err,
        pending: false,
        user: null
      }

    default:
      return state
  }
}
