export const fetchUpdatePost = (slug, token, title, description, body) => {
  fetch(`https://blog.kata.academy/api/articles/${slug}`, {
    method: 'put',
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      article: {
        title,
        description,
        body,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
}
