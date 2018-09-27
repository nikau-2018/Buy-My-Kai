import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducers from './login'
import registerReducer from './register'

export default combineReducers({
  currentUser,
  loginReducers,
  registerReducer
})
