import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'

import { IProductItem } from 'types/product'
import { useI18n } from 'hooks'
import Container from 'components/Container'
import styles from './itemDetailPage.module.scss'
import BuyItemModal from './BuyItemModal/indedx'
import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'

const ItemDetailPage = () => {
  const t = useI18n()
  const location = useLocation()
  const data = location.state as IProductItem

  const [openModal, setOpenModal] = useState(false)
  const { message, setMessage } = useSnackbar(3000)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Container color='white'>
      <header className={styles.header}>상세 페이지</header>
      <main className={styles.main}>
        <div className={styles.image}>
          <img src={data.url} alt='items' />
        </div>

        <div>
          <dl className={styles.content}>
            <div>
              <dt>{`${t('front:title')}`}</dt>
              <dd>{data.title}</dd>
            </div>
            <div>
              <dt>{`${t('front:price')}`}</dt>
              <dd>{data.price} 만원</dd>
            </div>
            <div>
              <dt>{`${t('front:owner')}`}</dt>
              <dd>{data.owner}</dd>
            </div>
            <div>
              <dt> {`${t('front:date')}`}</dt>
              <dd>{dayjs(data.date).format('YYYY-MM-DD')}</dd>
            </div>
          </dl>
          <button type='button' className={styles.buyButton} onClick={handleOpenModal}>
            구매
          </button>
        </div>
      </main>
      {openModal && (
        <BuyItemModal onClose={handleCloseModal} title={data.title} price={data.price} setMessage={setMessage} />
      )}
      {message && <SnackBar message={message} setMessage={setMessage} />}
    </Container>
  )
}

export default ItemDetailPage
