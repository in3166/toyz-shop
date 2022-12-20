import { MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { SetterOrUpdater } from 'recoil'
import dayjs from 'dayjs'

import { useI18n } from 'hooks'
import { IProductItem } from 'types/product'
import { IUser } from 'types/user'
import { changeLikesList } from './changeLikesList'
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs'
import styles from './productItem.module.scss'
import { currencyFormatter } from 'src/utils/currencyFormatter'

interface ICardProps {
  product: IProductItem
  user: IUser | undefined
  likes: IProductItem[]
  setLikes: SetterOrUpdater<IProductItem[]>
}

const ProductItem = ({ product, user, likes, setLikes }: ICardProps) => {
  const t = useI18n()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (user && user.role === 1 && likes.length > 0) {
      const isLike = likes.some((value) => value?._id === product._id)
      setIsLiked(isLike)
    }
  }, [likes, product._id, user])

  const handleClickLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user || !user.id || user.id === 'admin') return
    if (product.owner.id === user.id) return

    setIsLiked((prev) => !prev)
    const tempLikes = changeLikesList(likes, isLiked, product)
    const likesIdList = tempLikes.map((value) => value._id)
    try {
      const response = await fetch(`/api/users/likes/${user.id}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likesIdList }),
        method: 'PATCH',
      })

      const result = await response.json()
      if (!result.success) {
        setIsLiked((prev) => !prev)
      }
      setLikes(tempLikes)
    } catch (error) {
      setIsLiked((prev) => {
        return !prev
      })
    }
  }

  return (
    <li className={styles.card} title={product.title}>
      <Link href={`/product/${product._id}`} aria-label='link to product detail page'>
        <h3 className={styles.header}>
          <div className={styles.title}>{product.title}</div>
          <button
            type='button'
            aria-label='Add a product to like'
            className={styles.likeButton}
            onClick={handleClickLike}
          >
            {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
          </button>
        </h3>

        <img src={product.image} alt={product.title} className={styles.productImage} />

        <dl>
          <div>
            <dt>{`${t('common:owner')}`}</dt>
            <dd>{product.owner?.name}</dd>
          </div>
          <div>
            <dt>{`${t('common:price')}`}</dt>
            <dd>{currencyFormatter(product.price, 'tenThousand')} 만원</dd>
          </div>
          <div>
            <dt>{`${t('common:date')}`}</dt>
            <dd>{dayjs(product.createdAt).format('YY-MM-DD')}</dd>
          </div>
        </dl>
      </Link>
    </li>
  )
}

export default ProductItem
