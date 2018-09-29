import {
  AREA_PENDING,
  AREA_SUCCESS,
  SHOW_ERROR} from '../actions/area'

const defaultState = {
  error: null,
  pending: false,
  details: null
}

export default function areaReducer (state = defaultState, {action, error, type, details}) {
  switch (type) {
    case AREA_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }
    case AREA_SUCCESS:
      return {
        error: null,
        pending: false,
        details
      }
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        details: null
      }

    default:
      return state
  }
}
