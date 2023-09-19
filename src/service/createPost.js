import { clearFormPost } from '../store/actions/createPost.action'

export const fetchCreatePost = (token, title, description, body, tagList) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/articles/', {
      method: 'post',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.article) {
          dispatch(clearFormPost())
        }
      })
  }
}
