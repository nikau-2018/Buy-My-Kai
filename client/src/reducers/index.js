import {combineReducers} from 'redux'

import currentUserReducer from './currentUser'
import addproductReducer from './addproduct'
import areaReducer from './area'
import mapDrawer from './mapDraw'
import selectedUser from './userprofile'

export default combineReducers({
  currentUserReducer,
  addproductReducer,
  areaReducer,
  mapDrawer,
  selectedUser
})
