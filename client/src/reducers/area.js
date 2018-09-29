import {
  AREA_PENDING,
  AREA_SUCCESS,
  SHOW_ERROR} from '../actions/area'

const defaultState = {
  error: null,
  pending: false,
  suburb: null
}

export default function areaReducer (state = defaultState, {action, error, type, suburb}) {
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
        suburb
      }
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        suburb: null
      }

    default:
      return state
  }
}
