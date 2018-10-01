import request from 'axios'

import {getHeaders} from '../utils/api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const PROFILE_PENDING = 'PROFILE_PENDING'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const profilePending = (errorMessage) => {
  return {
    type: PROFILE_PENDING
  }
}

export const profileSuccess = (user) => {
  return {
    type: PROFILE_SUCCESS,
    user
  }
}

export function getProfile (user) {
  return (dispatch) => {
    dispatch(profilePending())
    return request
      .get('/api/v1/users/profile', getHeaders())
      .then(res => {

        // Send user to the store.
        dispatch(profileSuccess(res.data.user))

        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
