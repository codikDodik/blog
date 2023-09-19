import { GET_DATA_USER, CLEAR_DATA_USER } from '../reducers/dataUser.reducer'

export const getDataUserAction = (token, username, email, image) => {
  return {
    type: GET_DATA_USER,
    token,
    username,
    email,
    image,
  }
}

export const clearDataUserAction = () => {
  return {
    type: CLEAR_DATA_USER,
  }
}
