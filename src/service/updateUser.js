import { getDataUserAction } from '../store/actions/dataUser.action'

export const fetchUpdateUser = (token, username, email, image) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/user', {
      method: 'put',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          username,
          bio: 'I work at State Farm.',
          image,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(getDataUserAction(token, username, email, image))
      })
  }
}
