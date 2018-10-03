import request from 'axios'

import {setToken} from '../utils/token'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginPending = () => ({type: LOGIN_REQUEST})

export const loginReq = () => ({
  type: LOGIN_REQUEST
})

export const loginSuc = user => ({
  type: LOGIN_SUCCESS,
  user
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  error
})

export const loginUser = (email, hash) => {
  return dispatch => {

    // Initiate the login request.
    dispatch(loginReq())

    // Make the request.
    return request
      .post('/api/v1/users/login', {email, hash})

      // Handle the response.
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }
        // Store the user data.
        dispatch(loginSuc(res.data.user))

      })
      .catch(err => dispatch(loginError(err.message)))
  }
}
