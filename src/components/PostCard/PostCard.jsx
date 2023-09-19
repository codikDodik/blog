import React, { useState } from 'react'
import nextId from 'react-id-generator'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Popconfirm } from 'antd'

//Service
import { fetchLikePost } from '../../service/likePost'
//Img
import authorImg from '../../assets/img/photo.svg'
import likeImg from '../../assets/img/like.svg'
import likeActiveImage from '../../assets/img/likeActive.svg'

//Scss
import classes from './PostCard.module.scss'

const PostCard = ({ title, description, tagList, favoritesCount, author, createdAt, slug, favorited }) => {
  const [like, setLike] = useState(favorited ? true : false)

  const { username, image } = author
  const userToken = useSelector((store) => store.user.token)
  const dateCreateAt = format(new Date(createdAt), 'MMM d, yyyy')
  const authorization = useSelector((store) => store.logIn.authorization)

  const addLike = () => {
    if (authorization) {
      fetchLikePost(slug, userToken)
      setLike(true)
    }
  }

  return (
    <article className={classes['post-card']}>
      <header className={classes['header']}>
        <div className={classes['post-info']}>
          <div className={classes['wrapper']}>
            <Link to={`/${slug}`}>
              <h2 className={classes['title']}>{title.trim() ? title : 'Not title'}</h2>
            </Link>
            {authorization ? (
              <button className={classes['button-like']} type="button" onClick={addLike}>
                <img className={classes['like']} src={favorited || like ? likeActiveImage : likeImg} alt="like" />
              </button>
            ) : (
              <Popconfirm
                placement="right"
                title="Нужна авторизация"
                onConfirm={addLike}
                cancelButtonProps={{ style: { display: 'none' } }}
              >
                <button className={classes['button-like']} type="button" onClick={addLike}>
                  <img className={classes['like']} src={likeImg} alt="like" />
                </button>
              </Popconfirm>
            )}
            <span className={classes['quantity-like']}>{like ? favoritesCount + 1 : favoritesCount}</span>
          </div>
          <ul className={classes['teg-list']}>
            {tagList.map((el) => {
              return (
                <li key={nextId()} className={classes['teg-item']}>
                  <button className={classes['teg']}>{el}</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={classes['author']}>
          <div className={classes['author__info']}>
            <span className={classes['author__name']}>{username}</span>
            <span className={classes['author__date-create-post']}>{dateCreateAt}</span>
          </div>
          <img
            className={classes['author__img']}
            src={image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = `${authorImg}`
            }}
            alt="author-img"
            width={46}
            height={46}
          />
        </div>
      </header>
      <main className={classes['main']}>
        <p className={classes['post-description']}>{description.trim() ? description : 'Not description'}</p>
      </main>
    </article>
  )
}

export { PostCard }
