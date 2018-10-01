import request from 'axios'

import {getHeaders} from '../utils/api'

export const SHOW_ERROR = 'SHOW_ERROR'
export const PRODUCT_PENDING = 'PRODUCT_PENDING'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const productPending = (errorMessage) => {
  return {
    type: PRODUCT_PENDING
  }
}

export const productSuccessful = (product) => {
  return {
    type: PRODUCT_SUCCESS,
    product
  }
}

export function sendProduct (product) {
  return (dispatch) => {
    dispatch(productPending())
    return request
      .post('/api/v1/products/addproduct', product, getHeaders())
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res)
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
