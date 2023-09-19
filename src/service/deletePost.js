export const fetchDeletePost = (token, slug) => {
  fetch(`https://blog.kata.academy/api/articles/${slug}`, {
    method: 'delete',
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}
