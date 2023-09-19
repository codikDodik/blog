import { setAlreadyUsername, setAlreadyEmail, clearForm } from '../store/actions/register.action'

export const registerUsers = (username, email, password) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          const { errors } = data
          if (errors.username === 'is already taken.') {
            dispatch(setAlreadyUsername())
          }
          if (errors.email === 'is already taken.') {
            dispatch(setAlreadyEmail())
          }
        } else {
          dispatch(clearForm())
        }
      })
  }
}
