import { MouseEvent, useState } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import store from 'store'
// import HeartFillIcon from 'public/svgs/heartFill.svg'
import { useI18n } from 'hooks'
import { IProductItem } from 'types/product'
import styles from './card.module.scss'
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs'
import { IDBUser, IUser } from 'types/user'
import { SetterOrUpdater } from 'recoil'
import { updateUserDBLikes } from 'services/user'
import { getTempLikes } from './getTempLikes'

interface ICardProps {
  item: IProductItem
  user?: IUser
  setUser?: SetterOrUpdater<IUser>
}

const Card = ({ item, user, setUser }: ICardProps) => {
  const t = useI18n()
  const isLiked = false
  // user && user.role === 1 ? user.likes.filter((value) => value.id === item.id).length > 0 : false
  const [like, setLike] = useState(isLiked)

  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || !setUser) return
    if (user.id === '' || user.id === 'admin') return
    store.remove('currentUser')

    setLike((prev) => !prev)
    setUser((prev) => {
      const tempLikes = getTempLikes(prev.likes ?? [], like, item)
      updateUserDBLikes(user.id, tempLikes).then(() => {
        const newUser = { data: { ...user, likes: tempLikes }, key: user.id }
        store.set('currentUser', newUser)
      })
      return { ...prev, likes: tempLikes }
    })
  }

  return (
    <Link href={`/product/${item.id}`}>
      <li className={styles.card} title={item.name}>
        <h3 className={styles.header}>
          <div className={styles.title}>{item.name}</div>
          <button type='button' className={styles.likeButton} onClick={handleClickLike}>
            {like ? <HeartFillIcon /> : <HeartOutlineIcon />}
          </button>
        </h3>

        <img src={item.image} alt={item.name} className={styles.itemImage} />

        <dl>
          <div>
            <dt>{`${t('common:owner')}`}</dt>
            <dd>{item.owner}</dd>
          </div>
          <div>
            <dt>{`${t('common:price')}`}</dt>
            <dd>{item.price} 만원</dd>
          </div>
          <div>
            <dt>{`${t('common:date')}`}</dt>
            <dd>{dayjs(item.createdAt).format('YY-MM-DD')}</dd>
          </div>
        </dl>
      </li>
    </Link>
  )
}

export default Card
