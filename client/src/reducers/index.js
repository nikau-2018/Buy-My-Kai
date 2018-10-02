import { combineReducers } from 'redux';

import currentUserReducer from './currentUser'
import addproductReducer from './addproduct'
import areaReducer from './area'
import mapDrawReducer from './mapDraw'

export default combineReducers({
  currentUserReducer,
  addproductReducer,
  areaReducer,
  mapDrawer: mapDrawReducer,
})
