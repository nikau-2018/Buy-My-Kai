import {combineReducers} from 'redux'

import currentUserReducer from './currentUser'
import addproductReducer from './addproduct'
import areaReducer from './area'

export default combineReducers({
  currentUserReducer,
  addproductReducer,
  areaReducer
})
