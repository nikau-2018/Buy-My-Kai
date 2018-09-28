import {
  PROFILE_PENDING,
  PROFILE_SUCCESS,
  SHOW_ERROR} from '../actions/profile'

const defaultState = {
  error: null,
  pending: false,
  user: null
}

export default function profileReducer (state = defaultState, {action, error, type, user}) {
  switch (type) {
    case PROFILE_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }
    case PROFILE_SUCCESS:
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
        user: null
      }
    default:
      return state
  }
}
