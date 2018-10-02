import {
  AREA_PENDING,
  AREA_SUCCESS,
  AREA_ERROR} from '../actions/area'

const defaultState = {
  error: null,
  pending: false,
  growersList: null
}

export default function areaReducer (state = defaultState, {action, error, type, growersList}) {
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
        growersList
      }
    case AREA_ERROR:
      return {
        ...state,
        error,
        pending: false,
        growersList: null
      }

    default:
      return state
  }
}
