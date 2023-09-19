import { GET_POST, CLEAR_POST } from '../reducers/getPost.reducer'

export const getPostAction = (article) => {
  return {
    type: GET_POST,
    article,
  }
}

export const clearPostAction = () => {
  return {
    type: CLEAR_POST,
  }
}
