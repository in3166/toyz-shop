import Container from 'components/Container'
import dayjs from 'dayjs'
import { useLocation } from 'react-router-dom'
import { IProductItem } from 'types/product'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage = () => {
  const location = useLocation()
  const data = location.state as IProductItem
  console.log(data)
  return (
    <Container color='white'>
      <header className={styles.header}>상세 페이지</header>
      <main className={styles.main}>
        <div className={styles.image}>
          <img src={data.url} alt='item pic' />
        </div>

        <div>
          <dl className={styles.content}>
            <div>
              <dt>제목</dt>
              <dd>{data.title}</dd>
            </div>
            <div>
              <dt>가격</dt>
              <dd>{data.price} 만원</dd>
            </div>
            <div>
              <dt>소유자</dt>
              <dd>{data.owner}</dd>
            </div>
            <div>
              <dt>등록일</dt>
              <dd>{dayjs(data.date).format('YYYY-MM-DD')}</dd>
            </div>
          </dl>
          <button type='button' className={styles.buyButton}>
            구매
          </button>
        </div>
      </main>
    </Container>
  )
}

export default ItemDetailPage
