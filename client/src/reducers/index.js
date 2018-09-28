import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducers from './login'
import registerReducer from './register'
import addproductReducer from './addproduct'

export default combineReducers({
  currentUser,
  loginReducers,
  registerReducer,
  addproductReducer
})
