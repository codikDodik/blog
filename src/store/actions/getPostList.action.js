import { GET_POSTS_LIST } from '../reducers/getPostList.reducer'

export const getPostsListAction = (data) => {
  return {
    type: GET_POSTS_LIST,
    data,
  }
}
