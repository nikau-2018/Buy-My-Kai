import request from 'axios'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const PROFILE_ERROR = 'PROFILE_ERROR'
export const PROFILE_PENDING = 'PROFILE_PENDING'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'

const GEOCODING_PROVIDER_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=4d6Splj1DnO9rnsmLbDkjAuyqmExW4KH'

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

export function editUser (user) {
  return dispatch => {
    dispatch(profilePending())

    const searchAddress = `${user.address} ${user.suburb} ${user.city} New Zealand`
    return getLatLng(searchAddress)
      .then(({lat, lng: long}) => {
        const userWithCoordinates = {
          ...user,
          lat,
          long
        }
        request
          .put('/api/v1/users/edit', userWithCoordinates, getHeaders())
          .then(res => {
            if (res.data.token) {
              setToken(res.data.token)
            }

            dispatch(profileSuccess(userWithCoordinates))
          })
      })
      .catch((err) => {
        dispatch(profileError(err.message))
      })
  }
}

export function getLatLng (address) {
  return request.post(GEOCODING_PROVIDER_URL, {location: address})
    .then((response) => response.data.results[0].locations[0].latLng)
  /* eslint-disable no-console */
    .catch((error) => console.log(error))
}
