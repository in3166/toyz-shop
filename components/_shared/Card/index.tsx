import { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { SetterOrUpdater } from 'recoil'
import dayjs from 'dayjs'
import store from 'store'
import { useI18n } from 'hooks'
import { IProductItem } from 'types/product'
import { IUser } from 'types/user'
import { changeLikesList } from './changeLikesList'
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs'
import styles from './card.module.scss'

interface ICardProps {
  product: IProductItem
  user?: IUser
  setUser?: SetterOrUpdater<IUser>
}

const Card = ({ product, user, setUser }: ICardProps) => {
  const t = useI18n()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (user && user.role === 1 && user?.likes) {
      const isLike = user.likes.some((value) => value?._id === product._id)
      setIsLiked(isLike)
    }
  }, [product._id, user])

  const handleClickLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || !setUser) return
    if (!user.id || user.id === 'admin') return
    store.remove('currentUser')

    setIsLiked((prev) => !prev)
    const likes = changeLikesList(user.likes ?? [], isLiked, product)
    const likesIdList = likes.map((value) => value._id)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user.id}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likesIdList }),
        method: 'PATCH',
      })
      const result = await response.json()
      if (!result.success) {
        setIsLiked((prev) => !prev)
      }
      setUser({ ...user, likes })
    } catch (error) {
      setIsLiked((prev) => {
        return !prev
      })
    }
  }

  return (
    <Link href={`/product/${product._id}`}>
      <li className={styles.card} title={product.title}>
        <h3 className={styles.header}>
          <div className={styles.title}>{product.title}</div>
          <button type='button' className={styles.likeButton} onClick={handleClickLike}>
            {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
          </button>
        </h3>

        <img src={product.image} alt={product.title} className={styles.productImage} />

        <dl>
          <div>
            <dt>{`${t('common:owner')}`}</dt>
            <dd>{product.owner.name}</dd>
          </div>
          <div>
            <dt>{`${t('common:price')}`}</dt>
            <dd>{product.price} 만원</dd>
          </div>
          <div>
            <dt>{`${t('common:date')}`}</dt>
            <dd>{dayjs(product.createdAt).format('YY-MM-DD')}</dd>
          </div>
        </dl>
      </li>
    </Link>
  )
}

export default Card
