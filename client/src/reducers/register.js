import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR } from '../actions/register'

    const defaultState = {
        error: null,
        pending: false,
        user: null,
        isLoggedIn: false

    }

export default function loginReducers (state = defaultState, { action, error, type, user, isLoggedIn }) {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                pending: true,
                isLoggedIn:false

            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false,
                isLoggedIn:true,
                user
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error,
                pending: false,
                isLoggedIn:false,
                user: null
            }
            default:
            return state
      
        }
    }