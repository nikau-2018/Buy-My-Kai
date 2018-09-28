import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  SHOW_ERROR} from '../actions/register'

const defaultState = {
  error: null,
  pending: false,
  user: null
}

export default function registerReducer (state = defaultState, {action, error, type, user}) {
  switch (type) {
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
        user
      }
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        user: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: true
      }
    default:
      return state
  }
}
