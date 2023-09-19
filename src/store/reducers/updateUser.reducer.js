/* eslint-disable indent */
export const AUTHORIZATION__USER = 'AUTHORIZATION__USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'
export const UPDATE_USER_AVATAR_IMAGE = 'UPDATE_USER_AVATAR_IMAGE'

const userInfo = localStorage.user ? JSON.parse(localStorage.user) : false

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const initialState = {
  token: userInfo ? userInfo.token : '',
  username: userInfo ? userInfo.username : '',
  usernameError: false,
  email: userInfo ? userInfo.email : '',
  emailError: false,
  newPassword: '',
  avatarImage: '',
}

export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION__USER:
      return {
        ...state,
        token: action.token,
        username: action.username,
        email: action.email,
      }
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username,
        usernameError: action.username.length < 3 || action.username.length > 20 ? true : false,
      }
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        email: action.email,
        emailError: String(action.email).toLowerCase().match(regexEmail) ? false : true,
      }
    case UPDATE_USER_PASSWORD:
      return { ...state, newPassword: action.newPassword }
    case UPDATE_USER_AVATAR_IMAGE:
      return { ...state, avatarImage: action.imageUrl }
    default:
      return state
  }
}
