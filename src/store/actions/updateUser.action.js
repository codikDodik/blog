import {
  AUTHORIZATION__USER,
  UPDATE_USER_NAME,
  UPDATE_USER_EMAIL,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_AVATAR_IMAGE,
} from '../reducers/updateUser.reducer'

export const authorizationUser = (token, username, email) => {
  return {
    type: AUTHORIZATION__USER,
    token,
    username,
    email,
  }
}

export const updateUsername = (username) => {
  return {
    type: UPDATE_USER_NAME,
    username,
  }
}

export const updateEmail = (email) => {
  return {
    type: UPDATE_USER_EMAIL,
    email,
  }
}

export const updatePassword = (newPassword) => {
  return {
    type: UPDATE_USER_PASSWORD,
    newPassword,
  }
}

export const updateAvatarImage = (imageUrl) => {
  return {
    type: UPDATE_USER_AVATAR_IMAGE,
    imageUrl,
  }
}
