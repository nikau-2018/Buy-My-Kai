import request from 'axios'

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

export const profileSuccessful = (user) => {
  return {
    type: PROFILE_SUCCESS,
    user
  }
}

export function getProfile (user) {
  return (dispatch) => {
    dispatch(profilePending())
    return request
      .get(`/api/v1/users/profile`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
