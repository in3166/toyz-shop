import Container from 'components/Container'
import { useLocation } from 'react-router-dom'
import { IProductItem } from 'types/product'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage = () => {
  const location = useLocation()
  const data = location.state as IProductItem
  console.log(data)
  return (
    <Container>
      <header>상세 페이지</header>
      <main>
        <div>
          <div>
            <img src={data.url} />
          </div>
          <div>
            <dl>
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
                <dd>{data.date}</dd>
              </div>
            </dl>
          </div>
        </div>
        <button type='button'>구매</button>
      </main>
    </Container>
  )
}

export default ItemDetailPage
