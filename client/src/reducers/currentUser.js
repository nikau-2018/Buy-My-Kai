import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR} from '../actions/login'

import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_ERROR} from '../actions/register'

import {
  PROFILE_PENDING,
  PROFILE_SUCCESS,
  PROFILE_ERROR} from '../actions/profile'

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

    case REGISTER_ERROR:
      return {
        ...state,
        error: action.err,
        pending: false,
        user: null
      }

    case PROFILE_PENDING:
      return {
        ...state,
        error: null,
        pending: true,
        isLoggedIn: false
      }

    case PROFILE_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        isLoggedIn: true,
        user: action.user
      }

    case PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false,
        isLoggedIn: false
      }

    default:
      return state
  }
}
