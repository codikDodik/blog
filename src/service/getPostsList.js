import { getPostsListAction } from '../store/actions/getPostList.action'

export const fetchGetPostsList = (limit = 5, offset = 0, token) => {
  return (dispatch) => {
    fetch(`https://blog.kata.academy/api/articles?limit=${limit}&offset=${offset}`, {
      method: 'get',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getPostsListAction(data))
      })
  }
}
