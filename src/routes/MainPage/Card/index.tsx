import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import store from 'store'
import { SetterOrUpdater } from 'recoil'

import { IProductItem } from 'types/product'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { updateUserDBLikes } from 'services/user'
import { HeartFillIcon, HeartOutlineIcon } from 'assets/svgs'
import styles from './card.module.scss'
import { IDBUser } from 'types/user'

interface ICardProps {
  item: IProductItem
  // user: IDBUser
  // setUser: SetterOrUpdater<IDBUser>
}

const Card = ({ item }: ICardProps): JSX.Element => {
  const [user, setUser] = useRecoil(currentUserState)
  // console.log(item.title)
  const isLiked = user?.data?.likes?.filter((value) => value.id === item.id).length > 0
  const [like, setLike] = useState(isLiked)
  if (item.id === '1qQx3LHaYGg') {
    console.log(user)
    console.log('islike: ', isLiked)
    console.log('like: ', like)
  }

  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || user.data.id === '' || user.data.id === 'admin') return
    store.remove('currentUser')
    if (like) {
      setLike(false)
      setUser((prev) => {
        const tempLikes = prev.data.likes.filter((val) => val.id !== item.id)
        updateUserDBLikes(user.key, tempLikes).then(() => {
          const newUser = { data: { ...user.data, likes: tempLikes }, key: user.key }
          console.log('newuser1: ', newUser)
          store.set('currentUser', newUser)
        })
        const tempData = { ...prev.data }
        tempData.likes = tempLikes
        return { data: { ...tempData }, key: prev.key }
      })
      return
    }

    setLike(true)
    setUser((prev) => {
      const tempLikes = [...prev.data.likes, item]
      updateUserDBLikes(user.key, tempLikes).then(() => {
        const newUser = { data: { ...user.data, likes: tempLikes }, key: user.key }
        console.log('newuser2: ', newUser)
        store.set('currentUser', newUser)
      })
      return { data: { ...prev.data, likes: tempLikes }, key: prev.key }
    })
  }

  return (
    <Link to={`/item/${item.id}`} state={item}>
      <li className={styles.card} title={item.title}>
        <h3 className={styles.header}>
          <div className={styles.title}>{item.title}</div>
          <button type='button' className={styles.likeButton} onClick={handleClickLike}>
            {like ? <HeartFillIcon /> : <HeartOutlineIcon />}
          </button>
        </h3>
        <img src={item.url} alt={item.title} className={styles.itemImage} />

        <dl>
          <div>
            <dt>소유자</dt>
            <dd>{item.owner}</dd>
          </div>
          <div>
            <dt>가격</dt>
            <dd>{item.price} 만원</dd>
          </div>
          <div>
            <dt>등록일</dt>
            <dd>{dayjs(item.date).format('YY-MM-DD')}</dd>
          </div>
        </dl>
      </li>
    </Link>
  )
}

export default Card
