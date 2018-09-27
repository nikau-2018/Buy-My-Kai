import {combineReducers} from 'redux'

import currentUser from './currentUser'
import login from './login'

export default combineReducers({
  currentUser,
  login
})
