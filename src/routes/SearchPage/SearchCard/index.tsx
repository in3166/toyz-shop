import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { IProductItem } from 'types/product'
import styles from './searchCard.module.scss'

interface ISearchCardProps {
  item: IProductItem
}

const SearchCard = ({ item }: ISearchCardProps) => {
  return (
    <Link to={`/item/${item.id}`} state={item}>
      <li className={styles.card} title={item.title}>
        <h3 className={styles.header}>
          <div className={styles.title}>{item.title}</div>
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

export default SearchCard
