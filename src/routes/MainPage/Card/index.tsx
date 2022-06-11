import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import store from 'store'

import { IProductItem } from 'types/product'
import { useI18n } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { updateUserDBLikes } from 'services/user'
import { HeartFillIcon, HeartOutlineIcon } from 'assets/svgs'
import styles from './card.module.scss'

function getTempLikes(items: IProductItem[], like: boolean, item: IProductItem) {
  if (like) {
    return items.filter((value) => value.id !== item.id)
  }
  return [...items, item]
}

interface ICardProps {
  item: IProductItem
}

const Card = ({ item }: ICardProps): JSX.Element => {
  const t = useI18n()
  const [user, setUser] = useRecoil(currentUserState)

  const isLiked = user?.data?.likes?.filter((value) => value.id === item.id).length > 0
  const [like, setLike] = useState(isLiked)

  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || user.data.id === '' || user.data.id === 'admin') return
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
