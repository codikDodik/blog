import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import classes from './RegistrationAndEntrance.module.scss'

const RegistrationAndEntrance = () => {
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <Link to="/sign-in">
        <button type="button" className={`${classes['button']} ${classes['button_sign-in']}`}>
          Sign In
        </button>
      </Link>
      <Link to="/sign-up">
        <button type="button" className={`${classes['button']} ${classes['button_sign-up']}`}>
          Sign Up
        </button>
      </Link>
    </div>
  )
}

export { RegistrationAndEntrance }
