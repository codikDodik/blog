/* eslint-disable indent */
export const USERNAME = 'USERNAME'
export const EMAIL = 'EMAIL'
export const PASSWORD = 'PASSWORD'
export const ROTATE_PASSWORD = 'ROTATE_PASSWORD'
export const APPROVAL = 'APPROVAL'
export const CLEAR_FORM = 'CLEAR_FORM'
export const IS_ALREADY_USERNAME = 'IS_ALREADY_USERNAME'
export const IS_ALREADY_EMAIL = 'IS_ALREADY_EMAIL'

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regexPassword = /^(?=.*[0-9])(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{6,40}$/

const initialState = {
  username: '',
  isAlreadyUsername: false,
  errorUsername: false,
  email: '',
  isAlreadyEmail: false,
  errorEmail: false,
  password: '',
  errorPassword: false,
  rotatePassword: '',
  errorRotatePassword: false,
  approval: false,
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        username: action.value,
        errorUsername: action.value.length < 3 || action.value.length > 20 ? true : false,
      }
    case IS_ALREADY_USERNAME:
      return { ...state, isAlreadyUsername: true }
    case EMAIL:
      return {
        ...state,
        email: action.value,
        errorEmail: String(action.value).toLowerCase().match(regexEmail) ? false : true,
      }
    case IS_ALREADY_EMAIL:
      return { ...state, isAlreadyEmail: true }
    case PASSWORD:
      return {
        ...state,
        password: action.value,
        errorPassword: String(action.value).match(regexPassword) ? false : true,
      }
    case ROTATE_PASSWORD:
      return {
        ...state,
        rotatePassword: action.value,
        errorRotatePassword: action.value !== state.password ? true : false,
      }
    case APPROVAL:
      return { ...state, approval: !state.approval }
    case CLEAR_FORM:
      return { ...initialState }
    default:
      return state
  }
}
