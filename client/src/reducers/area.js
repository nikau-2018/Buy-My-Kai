import {
  AREA_PENDING,
  AREA_SUCCESS,
  SHOW_ERROR} from '../actions/area'

const defaultState = {
  error: null,
  pending: false,
  neighbourhood: null
}

export default function areaReducer (state = defaultState, {action, error, type, neighbourhood}) {
  switch (type) {
    case AREA_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }
    case AREA_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        neighbourhood
      }
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        neighbourhood: false
      }

    default:
      return state
  }
}
