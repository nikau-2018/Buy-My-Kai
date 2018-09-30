import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducer from './login'
import registerReducer from './register'
import addproductReducer from './addproduct'
import areaReducer from './area'

export default combineReducers({
  currentUser,
  loginReducer,
  registerReducer,
  addproductReducer,
  areaReducer
})
