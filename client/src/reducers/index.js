import {combineReducers} from 'redux'

import currentUser from './currentUser'
import loginReducers from './login'

export default combineReducers({
  currentUser,
  loginReducers

})
