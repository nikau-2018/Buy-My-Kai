import request from 'axios'
import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

const GEOCODING_PROVIDER_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=4d6Splj1DnO9rnsmLbDkjAuyqmExW4KH'

export const registerError = (errorMessage) => {
  return {
    type: REGISTER_ERROR,
    errorMessage: errorMessage
  }
}

export const registerPending = (errorMessage) => {
  return {
    type: REGISTER_PENDING
  }
}

export const registerSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    user
  }
}

export function postUser (user) {
  return dispatch => {
    dispatch(registerPending())

    const searchAddress = `${user.address} ${user.suburb} ${user.city} New Zealand`
    return getLatLng(searchAddress)
      .then(({lat, lng: long}) => {
        const userWithCoordinates = {
          ...user,
          lat,
          long
        }
        request
          .post('/api/v1/users/register', userWithCoordinates, getHeaders())
          .then(res => {
            if (res.data.token) {
              setToken(res.data.token)
            }

            dispatch(registerSuccess(userWithCoordinates))
          })
      })
      .catch((err) => {
        dispatch(registerError(err.message))
      })
  }
}

export function getLatLng (address) {
  return request.post(GEOCODING_PROVIDER_URL, {location: address})
    .then((response) => response.data.results[0].locations[0].latLng)
    .catch((error) => console.log(error))
}

export function becomeGrower (user, id) {
  return dispatch => {
    dispatch(registerPending())

    const searchAddress = `${user.address} ${user.suburb} ${user.city} New Zealand`
    return getLatLng(searchAddress)
      .then(({lat, lng: long}) => {
        const userWithCoordinates = {
          ...user,
          id,
          lat,
          long
        }
        request
          .put('/api/v1/users/becomegrower', userWithCoordinates, getHeaders())
          .then(res => {
            if (res.data.token) {
              setToken(res.data.token)
            }
            dispatch(registerSuccess(userWithCoordinates))
          })
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
