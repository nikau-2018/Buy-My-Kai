import request from 'axios'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const PROFILE_ERROR = 'PROFILE_ERROR'
export const PROFILE_PENDING = 'PROFILE_PENDING'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'

export const profileError = (errorMessage) => {
  return {
    type: PROFILE_ERROR,
    error: errorMessage
  }
}

export const profilePending = () => {
  return {
    type: PROFILE_PENDING
  }
}

export const profileSuccess = user => {
  return {
    type: PROFILE_SUCCESS,
    user
  }
}

export function getProfile () {
  return dispatch => {
    dispatch(profilePending())

    return request
      .get('/api/v1/users/profile', getHeaders())
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        // Handle sellers and eaters separately.
        if (res.data.user[0].isSeller) {
          // Sellers are returned in arrays.
          dispatch(profileSuccess(res.data.user[0]))
        } else {
          // Send user to the store.
          dispatch(profileSuccess(res.data.user))
        }
        

        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(profileError(err.message))
      })
  }
}
