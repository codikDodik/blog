/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//Service
import { fetchUpdateUser } from '../../../service/updateUser'
//Action
import {
  updateUsername,
  updateEmail,
  updatePassword,
  updateAvatarImage,
} from '../../../store/actions/updateUser.action'
//Scss
import classesForm from '../FormStyle.module.scss'

const Profile = () => {
  const navigate = useNavigate()
  const authorization = useSelector((store) => store.logIn.authorization)

  useEffect(() => {
    if (!authorization) {
      navigate('/')
    }
  }, [])

  const dispatch = useDispatch()

  const token = useSelector((store) => store.updateUser.token)
  const username = useSelector((store) => store.updateUser.username)
  const email = useSelector((store) => store.updateUser.email)
  const newPassword = useSelector((store) => store.updateUser.newPassword)
  const avatarImage = useSelector((store) => store.updateUser.avatarImage)
  //Error
  const emailError = useSelector((store) => store.updateUser.emailError)
  const usernameError = useSelector((store) => store.updateUser.usernameError)

  const validForm = !emailError && !usernameError

  const updateUser = (e) => {
    e.preventDefault()
    if (validForm) {
      localStorage.user = JSON.stringify({
        username: username,
        email: email,
        token: token,
        image: avatarImage,
      })
      dispatch(fetchUpdateUser(token, username, email, avatarImage))
    } else {
      console.log('форма не валидна')
    }
  }

  return (
    <div className={classesForm['wrapper']}>
      <h2 className={classesForm['title']}>Sign In</h2>
      <form className={classesForm['form']}>
        <label className={classesForm['label']}>
          username
          <input
            value={username}
            onChange={(e) => dispatch(updateUsername(e.target.value))}
            className={`${classesForm['input']} ${usernameError ? classesForm['input-error'] : null}`}
            type="text"
            placeholder="username"
            autoFocus
          />
          {usernameError ? (
            <span className={classesForm['span-error']}>Имя должно содержать от 3 до 20 символов</span>
          ) : null}
        </label>
        <label className={classesForm['label']}>
          Email address
          <input
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            className={`${classesForm['input']} ${emailError ? classesForm['input-error'] : null}`}
            type="email"
            placeholder="Email address"
            autoFocus
          />
          {emailError ? <span className={classesForm['span-error']}>Не корректный email</span> : null}
        </label>
        <label className={classesForm['label']}>
          New Password
          <input
            value={newPassword}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
            className={classesForm['input']}
            type="password"
            placeholder="Password"
          />
        </label>
        <label className={classesForm['label']}>
          Avatar image(url)
          <input
            value={avatarImage}
            onChange={(e) => dispatch(updateAvatarImage(e.target.value))}
            className={classesForm['input']}
            type="url"
            placeholder="Avatar image"
          />
        </label>
        <button type="submit" className={classesForm['button']} onClick={updateUser}>
          Save
        </button>
      </form>
    </div>
  )
}

export { Profile }
