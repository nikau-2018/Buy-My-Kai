/* 
  FILE: MAPDRAW.JS - REDUCER
  VER:  1.0.0
  DESC: Main reducer file the map draw component.
  ----------------------------------------------------
*/

// Import actions.
import {
  MAPDRAW_PENDING,
  MAPDRAW_SUCCESS
} from '../actions/mapDraw'

// Set reducer default state.
const defaultState = {
  isOpen: false,
  pending: false
}

// Export reducer.
export default mapDrawReducer = (state = defaultState, action) => {
  // Check which action to return.
  switch (type) {
    case MAPDRAW_PENDING:
      return {
        ...state,
        pending: true,
        isOpen: false
      }
    case MAPDRAW_SUCCESS:
      return {
        ...state,
        pending: false,
        isOpen: action.drawState
      }
    default:
      return state
  }
}
