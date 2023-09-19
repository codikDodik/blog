import {
  LOG_IN_EMAIL,
  LOG_IN_PASSWORD,
  AUTHORIZATION,
  AUTHORIZATION_ERROR,
  LOG_OUT,
} from '../reducers/authorizationUsers.reducer'

export const setLogInEmail = (value) => {
  return {
    type: LOG_IN_EMAIL,
    value,
  }
}

export const setLogInPassword = (value) => {
  return {
    type: LOG_IN_PASSWORD,
    value,
  }
}

export const authorization = () => {
  return {
    type: AUTHORIZATION,
  }
}

export const authorizationError = () => {
  return {
    type: AUTHORIZATION_ERROR,
  }
}

export const logOut = () => {
  localStorage.clear()
  return {
    type: LOG_OUT,
  }
}
