import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { IProductItem } from 'types/product'
import { useI18n } from 'hooks'
import styles from './searchCard.module.scss'

interface ISearchCardProps {
  item: IProductItem
}

const SearchCard = ({ item }: ISearchCardProps) => {
  const t = useI18n()

  return (
    <Link to={`/item/${item.id}`} state={item}>
      <li className={styles.card} title={item.title}>
        <h3 className={styles.header}>
          <div className={styles.title}>{item.title}</div>
        </h3>
        <img src={item.url} alt={item.title} className={styles.itemImage} />

        <dl>
          <div>
            <dt>{`${t('front:title')}`}</dt>
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

export default SearchCard
