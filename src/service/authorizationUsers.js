import { authorization, authorizationError } from '../store/actions/authorizationUsers.action'
import { authorizationUser } from '../store/actions/updateUser.action'
import { getDataUserAction } from '../store/actions/dataUser.action'

export const authorizationUsers = (email, password) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          const { user } = data
          localStorage.user = JSON.stringify(user)
          dispatch(getDataUserAction(user.token, user.username, user.email, user.image))
          dispatch(authorizationUser(user.token, user.username, user.email))
          dispatch(authorization())
        } else {
          dispatch(authorizationError())
        }
      })
  }
}
