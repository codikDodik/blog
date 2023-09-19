/* eslint-disable indent */
export const GET_POSTS_LIST = 'GET_POSTS'

const initialState = {
  articles: [],
  articlesCount: 0,
}

const getPostsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LIST:
      return { ...action.data }
    default:
      return state
  }
}

export { getPostsListReducer }
