import dayjs from 'dayjs'
import store from 'store'
import { MouseEvent } from 'react'

import { useRecoil } from 'hooks/state'
import styles from './card.module.scss'
import { HeartFillIcon, HeartOutlineIcon } from 'assets/svgs'
import { IProductItem } from 'types/product'

interface ICardProps {
  item: IProductItem
  likes: string[]
}

const Card = ({ item, likes }: ICardProps): JSX.Element => {
  const isLiked = likes?.indexOf(item.id) > -1

  return (
    <li className={styles.card} title={item.title}>
      <h3 className={styles.header}>
        <div className={styles.title}>{item.title}</div>
        <button type='button' className={styles.trashButton}>
          {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
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
    //   <button
    //     type='button'
    //     data-item={JSON.stringify(adsItem)}
    //     onClick={handleOpenModal}
    //     className={styles.updateButton}
    //   >
    //     수정하기
    //   </button>
  )
}

export default Card
