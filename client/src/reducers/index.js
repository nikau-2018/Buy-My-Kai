import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducers from './login'
import registerReducer from './register'
import profileReducer from './profile'

export default combineReducers({
  currentUser,
  loginReducers,
  registerReducer,
  profileReducer
})
