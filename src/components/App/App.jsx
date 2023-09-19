import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'

//Components
import { NotExistingPage } from '../NotExistingPage'
import { PostsList } from '../PostsList'
import { Post } from '../Post'
import { RegistrationAndEntrance } from '../AccountManagement/RegistrationAndEntrance'
import { ProfileManagement } from '../AccountManagement/ProfileManagement'
import { SignUp } from '../FormAccountManagement/SignUp'
import { SignIn } from '../FormAccountManagement/SignIn'
import { Profile } from '../FormAccountManagement/EditProfile'
import { CreatePost } from '../CreatePost'
//Action

//Scss
import classes from './App.module.scss'

const App = () => {
  const authorization = useSelector((store) => store.logIn.authorization)

  useEffect(() => {}, [authorization])

  return (
    <div className={classes['App']}>
      <header className={classes['header']}>
        <Link to="/">
          <h1 className={classes['title']}>Realworld Blog</h1>
        </Link>
        {localStorage.user ? <ProfileManagement /> : <RegistrationAndEntrance />}
      </header>
      <main className={classes['main']}>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/:slug" element={<Post />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-article" element={<CreatePost />} />
          <Route path="/articles/:slug/edit" element={<CreatePost />} />
          <Route path="*" element={<NotExistingPage />} />
        </Routes>
      </main>
    </div>
  )
}

export { App }
