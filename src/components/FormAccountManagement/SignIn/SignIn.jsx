/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { authorizationUsers } from '../../../service/authorizationUsers'
import { setLogInEmail, setLogInPassword } from '../../../store/actions/authorizationUsers.action'
//Scss
import classesForm from '../FormStyle.module.scss'

const SignIn = () => {
  const navigate = useNavigate()
  const authorization = useSelector((store) => store.logIn.authorization)

  useEffect(() => {
    if (authorization) {
      navigate('/')
    }
  }, [])

  const dispatch = useDispatch()
  const authorizationError = useSelector((store) => store.logIn.authorizationError)
  const email = useSelector((store) => store.logIn.email)
  const password = useSelector((store) => store.logIn.password)

  const logIn = (e) => {
    e.preventDefault()
    dispatch(authorizationUsers(email, password))
  }

  return (
    <div className={classesForm['wrapper']}>
      <h2 className={classesForm['title']}>Sign In</h2>
      <form className={classesForm['form']}>
        {authorizationError ? <span className={classesForm['span-error']}>Неверный логин или пароль</span> : null}
        <label className={classesForm['label']}>
          Email address
          <input
            value={email}
            onChange={(e) => dispatch(setLogInEmail(e.target.value.toString().trim()))}
            className={classesForm['input']}
            type="email"
            placeholder="Email address"
            autoFocus
            required
          />
        </label>
        <label className={classesForm['label']}>
          Password
          <input
            value={password}
            onChange={(e) => dispatch(setLogInPassword(e.target.value.trim()))}
            className={classesForm['input']}
            type="password"
            placeholder="Password"
            required
          />
        </label>
        <button type="submit" className={classesForm['button']} onClick={logIn}>
          Login
        </button>
      </form>
      <p className={classesForm['reassign']}>
        Don`t have an account?{' '}
        <Link to="/sign_up">
          <span>Sign In</span>
        </Link>
      </p>
    </div>
  )
}

export { SignIn }
