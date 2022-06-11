import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import store from 'store'

import { useI18n } from 'hooks'
import { IProductItem } from 'types/product'
import styles from './card.module.scss'
import { HeartFillIcon, HeartOutlineIcon } from 'assets/svgs'
import { IDBUser } from 'types/user'
import { SetterOrUpdater } from 'recoil'
import { updateUserDBLikes } from 'services/user'
import { getTempLikes } from './getTempLikes'

interface ICardProps {
  item: IProductItem
  user?: IDBUser
  setUser?: SetterOrUpdater<IDBUser>
}

const Card = ({ item, user, setUser }: ICardProps) => {
  const t = useI18n()
  const isLiked =
    user && user.data.role === 0 ? user.data.likes.filter((value) => value.id === item.id).length > 0 : false
  const [like, setLike] = useState(isLiked)

  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || !setUser) return
    if (user.data.id === '' || user.data.id === 'admin') return
    store.remove('currentUser')

    setLike((prev) => !prev)
    setUser((prev) => {
      const tempLikes = getTempLikes(prev.data.likes, like, item)
      updateUserDBLikes(user.key, tempLikes).then(() => {
        const newUser = { data: { ...user.data, likes: tempLikes }, key: user.key }
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
            <dt>{`${t('front:owner')}`}</dt>
            <dd>{item.owner}</dd>
          </div>
          <div>
            <dt>{`${t('front:price')}`}</dt>
            <dd>{item.price} 만원</dd>
          </div>
          <div>
            <dt>{`${t('front:date')}`}</dt>
            <dd>{dayjs(item.date).format('YY-MM-DD')}</dd>
          </div>
        </dl>
      </li>
    </Link>
  )
}

export default Card
