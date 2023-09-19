export const fetchLikePost = (slug, token) => {
  fetch(`https://blog.kata.academy/api/articles/${slug}/favorite`, {
    method: 'post',
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}
