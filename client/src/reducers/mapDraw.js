import {MAPDRAW_SUCCESS} from '../actions/mapDraw'

// Set reducer default state.
const defaultState = {
  isOpen: false
}

// Export reducer.
export default function mapDrawReducer (state = defaultState, action) {
  // Check which action to return.
  switch (action.type) {
    case MAPDRAW_SUCCESS:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}
