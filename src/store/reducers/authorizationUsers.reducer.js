/* eslint-disable indent */
export const LOG_IN_EMAIL = 'LOG_IN_EMAIL'
export const LOG_IN_PASSWORD = 'LOG_IN_PASSWORD'
export const AUTHORIZATION = 'AUTHORIZATION'
export const AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR'
export const LOG_OUT = 'LOG_OUT'

const user = localStorage.user ? JSON.parse(localStorage.user) : false

const initialState = {
  authorization: user ? true : false,
  authorizationError: false,
  email: '',
  password: '',
}

const authorizationUsers = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_EMAIL:
      return { ...state, email: action.value }
    case LOG_IN_PASSWORD:
      return { ...state, password: action.value }
    case AUTHORIZATION:
      return {
        ...state,
        authorization: true,
        authorizationError: false,
      }
    case AUTHORIZATION_ERROR:
      return { ...state, authorizationError: true }
    case LOG_OUT:
      return { ...state, authorization: false }
    default:
      return state
  }
}

export { authorizationUsers }
