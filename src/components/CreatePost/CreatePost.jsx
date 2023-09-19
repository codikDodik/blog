/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Alert } from 'antd'

//Service
import { fetchCreatePost } from '../../service/createPost'
import { fetchUpdatePost } from '../../service/updatePost'
import { fetchGetPost } from '../../service/getPost'
//Action
import {
  setTitlePost,
  setDescriptionPost,
  setTextPost,
  setTagPost,
  addTagPost,
  deleteTagPost,
  clearFormPost,
} from '../../store/actions/createPost.action'

//Scss
import classes from './CreatePost.module.scss'

const CreatePost = () => {
  const { slug } = useParams()
  const post = useSelector((store) => store.post)
  const navigate = useNavigate()

  const [tagInclude, setTagInclude] = useState(false)
  const [tag, setTag] = useState(false)
  const [createPost, setCreatePost] = useState(false)

  const dispatch = useDispatch()
  const authorization = useSelector((store) => store.logIn.authorization)
  const userToken = useSelector((store) => store.user.token)

  const {
    title: titlePost,
    description: descriptionPost,
    text: textPost,
    tag: tagPost,
    tagList,
    titleError,
    descriptionError,
    textError,
  } = useSelector((store) => store.createPost)

  const valid = !titleError && !descriptionError && !textError

  useEffect(() => {
    if (!authorization) {
      navigate('/sign-in')
    }

    if (!post.article && !!slug) {
      dispatch(fetchGetPost(slug))
    }

    if (!slug) {
      dispatch(clearFormPost())
    }

    if (post.article && !!slug) {
      const { title, description, body, tagList: tagListResponse } = post.article
      dispatch(setTitlePost(title))
      dispatch(setDescriptionPost(description))
      dispatch(setTextPost(body))
      tagListResponse.forEach((tag) => {
        if (!tagList.includes(tag, 0)) {
          dispatch(addTagPost(tag))
        }
      })
    }
  }, [slug, post])

  const onCreatePost = (e) => {
    e.preventDefault()
    console.log('create')
    setCreatePost(true)
    if (titlePost.trim() && descriptionPost.trim() && textPost.trim() && valid) {
      if (!slug) {
        dispatch(fetchCreatePost(userToken, titlePost, descriptionPost, textPost, tagList))
      } else {
        fetchUpdatePost(slug, userToken, titlePost, descriptionPost, textPost)
      }
    }
  }

  const deleteTag = (e) => {
    const tag = e.target.nextElementSibling.innerHTML
    dispatch(deleteTagPost(tag))
  }

  const addTag = () => {
    if (tagList.includes(tagPost, 0)) {
      setTagInclude(true)
      setTag(false)
    } else {
      if (!tagPost.trim()) {
        setTagInclude(false)
        setTag(true)
      } else {
        setTag(false)
        setTagInclude(false)
        dispatch(addTagPost(tagPost))
      }
    }
  }

  return (
    <>
      {createPost ? (
        <Alert type="success" message="Пост успешно создан" />
      ) : (
        <div className={classes['wrapper']}>
          <h2>{slug ? 'Edit Article' : 'Create Article'}</h2>
          <form className={classes['form']}>
            <label className={classes['label']}>
              Title
              <input
                value={titlePost}
                onChange={(e) => dispatch(setTitlePost(e.target.value))}
                className={`${classes['input']} ${titleError ? classes['input-error'] : null}`}
                type="text"
                placeholder="Title"
                autoFocus
              />
            </label>
            <label className={classes['label']}>
              Short description
              <input
                value={descriptionPost}
                onChange={(e) => dispatch(setDescriptionPost(e.target.value))}
                className={`${classes['input']} ${descriptionError ? classes['input-error'] : null}`}
                type="text"
                placeholder="description"
              />
            </label>
            <label className={classes['label']}>
              Text
              <textarea
                value={textPost}
                onChange={(e) => dispatch(setTextPost(e.target.value))}
                className={`${classes['textarea']} ${textError ? classes['textarea-error'] : null}`}
                placeholder="text"
                rows="13"
              />
            </label>
            <fieldset className={classes['fieldset']}>
              <div className={classes['tag-list']}>
                <legend>Tags</legend>
                {tagList.map((el) => {
                  return (
                    <div key={el} className={classes['tag-item']}>
                      <button className={classes['button-delete-teg']} type="button" onClick={deleteTag}>
                        Delete
                      </button>
                      <p className={classes['tag-text']}>{el}</p>
                    </div>
                  )
                })}
              </div>
              <div className={classes['create-tag']}>
                <div className={classes['tag']}>
                  <input
                    value={tagPost}
                    onChange={(e) => dispatch(setTagPost(e.target.value))}
                    className={classes['input']}
                    type="text"
                    placeholder="tags"
                  />
                  <button className={classes['button-delete-teg']} type="button">
                    Delete
                  </button>
                </div>
                <button className={classes['button-add-tag']} type="button" onClick={addTag}>
                  Add tags
                </button>
              </div>
              {tag ? <span className={classes['span']}>тэг не может быть пустым</span> : null}
              {tagInclude ? <span className={classes['span']}>уже есть такой тэг</span> : null}
            </fieldset>
            <button type="submit" className={classes['button']} onClick={onCreatePost}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export { CreatePost }
