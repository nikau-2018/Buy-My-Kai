import request from 'axios'

export const SHOW_ERROR = 'SHOW_ERROR'
export const AREA_PENDING = 'AREA_PENDING'
export const AREA_SUCCESS = 'AREA_SUCCESS'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const areaPending = (errorMessage) => {
  return {
    type: AREA_PENDING
  }
}

export const areaSuccess = suburb => {
  return {
    type: AREA_SUCCESS,
    suburb
  }
}

export function sendNeighbourhood ({suburb}) {
  return (dispatch) => {
    dispatch(areaPending())
    return request
      .get(`/api/v1/users/?suburb=${suburb}`)
      .then(res => {
        console.log(res.data.result[0])
        // dispatch areaSuccess.
        dispatch(areaSuccess(res.data.result[0]))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
