import {
  USERNAME,
  IS_ALREADY_USERNAME,
  EMAIL,
  IS_ALREADY_EMAIL,
  PASSWORD,
  ROTATE_PASSWORD,
  APPROVAL,
  CLEAR_FORM,
} from '../reducers/register.reducer'

export const setUsername = (value) => {
  return {
    type: USERNAME,
    value,
  }
}

export const setEmail = (value) => {
  return {
    type: EMAIL,
    value,
  }
}

export const setPassword = (value) => {
  return {
    type: PASSWORD,
    value,
  }
}

export const setRotatePassword = (value) => {
  return {
    type: ROTATE_PASSWORD,
    value,
  }
}

export const setApproval = () => {
  return {
    type: APPROVAL,
  }
}

export const clearForm = () => {
  return {
    type: CLEAR_FORM,
  }
}

export const setAlreadyUsername = () => {
  return {
    type: IS_ALREADY_USERNAME,
  }
}

export const setAlreadyEmail = () => {
  return {
    type: IS_ALREADY_EMAIL,
  }
}
