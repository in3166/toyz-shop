import { useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import store from 'store'

import { IProductItem } from 'types/product'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { updateUserLikes } from 'services/user'
import { HeartFillIcon, HeartOutlineIcon } from 'assets/svgs'
import styles from './card.module.scss'

interface ICardProps {
  item: IProductItem
  likes: string[]
}

const Card = ({ item, likes }: ICardProps): JSX.Element => {
  const [user, setUser] = useRecoil(currentUserState)
  const isLiked = likes?.indexOf(item.id) > -1
  const [like, setLike] = useState(isLiked)
  const handleClickLike = () => {
    store.remove('currentUser')
    if (isLiked) {
      setLike(false)
      const tempLikes = user.data.likes.filter((val) => val !== item.id)
      updateUserLikes(user.key, tempLikes).then(() => {
        setUser((prev) => {
          const newUser = { data: { ...user, likes: tempLikes }, key: user.key }
          store.set('currentUser', newUser)
          return { ...prev, likes: tempLikes }
        })
      })
      return
    }

    const tempLikes = [...user.data.likes, item.id]
    setLike(true)
    updateUserLikes(user.key, tempLikes)
      .then(() => {
        const newUser = { data: { ...user, likes: tempLikes }, key: user.key }
        store.set('currentUser', newUser)
        setUser((prev) => {
          return { ...prev, likes: tempLikes }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Link to={`/item/${item.id}`} state={item}>
      <li className={styles.card} title={item.title}>
        <h3 className={styles.header}>
          <div className={styles.title}>{item.title}</div>
          <button type='button' className={styles.trashButton} onClick={handleClickLike}>
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
