import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducers from './login'
import registerReducer from './register'
import addproductReducer from './addproduct'
import areaReducer from './area'

export default combineReducers({
  currentUser,
  loginReducers,
  registerReducer,
  addproductReducer,
  areaReducer
})
