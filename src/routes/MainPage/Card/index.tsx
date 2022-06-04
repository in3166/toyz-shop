import dayjs from 'dayjs'
import store from 'store'
import { MouseEvent } from 'react'

import { useRecoil } from 'hooks/state'
import styles from './card.module.scss'
import { HeartFillIcon } from 'assets/svgs'

interface ICardProps {
  id: string
  url: string
  description: string
}

const Card = ({ id, url, description }: ICardProps): JSX.Element => {
  return (
    <li className={styles.card}>
      <h3 className={styles.header}>
        <div className={styles.title}>{description}</div>
        <button type='button' className={styles.trashButton}>
          <HeartFillIcon />
        </button>
      </h3>
      <img src={url} alt={description} className={styles.itemImage} />

      <dl>
        <div>
          <dt>종류</dt>
          <dd>판매</dd>
        </div>
        <div>
          <dt>가격</dt>
          <dd>250,000 원</dd>
        </div>
        <div>
          <dt>등록일</dt>
          <dd>2022.2.21</dd>
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
