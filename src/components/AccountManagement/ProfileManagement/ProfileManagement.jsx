import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import imgProfile from '../../../assets/img/photo.svg'
//Action
import { logOut } from '../../../store/actions/authorizationUsers.action'
import { clearDataUserAction } from '../../../store/actions/dataUser.action'

//Scss
import classes from './ProfileManagement.module.scss'

const ProfileManagement = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  return (
    <div className={classes['profile-management']}>
      <Link to="/new-article" className={classes['button-create-post']} type="button">
        Create article
      </Link>
      <div className={classes['profile-info']}>
        <Link to="/profile">
          <span className={classes['profile-name']}>{user.username}</span>
        </Link>
        <img
          className={classes['profile-img']}
          src={user.image ? user.image : imgProfile}
          alt="profile-img"
          width={46}
          height={46}
        />
      </div>
      <button
        className={classes['button-log-out']}
        type="button"
        onClick={() => {
          navigate('/')
          dispatch(clearDataUserAction())
          dispatch(logOut())
        }}
      >
        Log Out
      </button>
    </div>
  )
}

export { ProfileManagement }
