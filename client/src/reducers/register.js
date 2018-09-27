import {
  REGISTER_PENDING,
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
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        user: null
      }
    default:
      return state
  }
}
