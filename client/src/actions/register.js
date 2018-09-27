import request from 'axios'

export const SHOW_ERROR = 'SHOW_ERROR'
export const REGISTER_PENDING = 'REGISTER_PENDING'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const registerPending = (errorMessage) => {
  return {
    type: REGISTER_PENDING
  }
}

export function postUser (user) {
  return (dispatch) => {
    dispatch(registerPending())
    return request
      .post('/api/v1/register')
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
