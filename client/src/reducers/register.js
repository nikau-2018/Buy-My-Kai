import {
  SHOW_ERROR,
  REGISTER_PENDING } from '../actions/register'

const defaultState = {
  error: null,
  pending: false,
  user: null
}

export default function registerReducer (state = defaultState, { action, error, type, user }) {
  switch (type) {
    case REGISTER_PENDING:
      return {
        ...state,
        error: null,
        pending: true

      }

    case SHOW_ERROR:
      return {
        error,
        pending: false,
        user: null
      }
    default:
      return state
  }
}
