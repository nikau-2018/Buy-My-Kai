import {removeToken} from '../utils/token'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export const logoutPending = () => ({type: LOGOUT_REQUEST})

export const logoutReq = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const logoutSuc = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const logoutErr = (err) => {
  return {
    type: LOGOUT_ERROR,
    err
  }
}

// Log out the user.
export const logoutUser = () => {
  return dispatch => {
    // Initiate the request.
    dispatch(logoutPending())

    // Remove the token
    removeToken()

    // Dispatch to the store.
    dispatch(logoutSuc())
      .then(window.location.assign('/'))
  }
}
