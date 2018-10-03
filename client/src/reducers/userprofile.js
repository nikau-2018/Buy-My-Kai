import {SELECT_USER} from '../actions/userprofile'

const defaultState = null

// Export reducer.
export default function mapDetailReducer (state = defaultState, {type, id}) {
  // Check which action to return.
  switch (type) {
    case SELECT_USER:
      return id
    default:
      return state
  }
}
