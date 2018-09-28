import {
  PRODUCT_PENDING,
  PRODUCT_SUCCESS,
  SHOW_ERROR} from '../actions/products'

const defaultState = {
  error: null,
  pending: false,
  product: null
}

export default function addproductReducer (state = defaultState, {action, error, type, product}) {
  switch (type) {
    case PRODUCT_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }
    case PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        product
      }
    case SHOW_ERROR:
      return {
        ...state,
        error,
        pending: false,
        product: null
      }
    default:
      return state
  }
}
