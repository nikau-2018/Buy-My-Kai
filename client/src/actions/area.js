import request from 'axios'

export const AREA_ERROR = 'AREA_ERROR'
export const AREA_PENDING = 'AREA_PENDING'
export const AREA_SUCCESS = 'AREA_SUCCESS'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const areaError = (errorMessage) => {
  return {
    type: AREA_ERROR,
    errorMessage: errorMessage
  }
}

export const areaPending = (errorMessage) => {
  return {
    type: AREA_PENDING
  }
}

export const areaSuccess = growersList => {
  return {
    type: AREA_SUCCESS,
    growersList: growersList
  }
}

export function sendNeighbourhood (suburb) {
  return (dispatch) => {
    dispatch(areaPending())
    return request
      .get(`/api/v1/users/neighbourhood/?suburb=${suburb}`, getHeaders())
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }
        // eslint-disable-next-line no-console
        console.log(res.data.result)
        // dispatch areaSuccess.
        dispatch(areaSuccess(res.data.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(areaError(err.message))
      })
  }
}
