import request from 'axios'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginPending = () => ({ type: LOGIN_REQUEST })

export const loginSuc = user => ({
  type: LOGIN_SUCCESS,
  user
})

export const loginReq = ({
  type: LOGIN_REQUEST

})

export const loginUser = (username, password) => {
  return dispatch => {
    // dispatch(loginReq())
    return request
      .post(`/api/v1/users/login`, {username, password}, getHeaders())
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        dispatch(loginSuc(res.data.user))
      })
      .catch(({response}) => dispatch(loginError(response.data.error)))
  }
}

export const loginError = error => ({
  type: LOGIN_ERROR,
  error
})
