import { useState } from 'react'
import dayjs from 'dayjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { IProductItem } from 'types/product'
import { useI18n } from 'hooks'
import SnackBar from 'components/_shared/SnackBar'
import Container from 'components/_shared/Container'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import BuyItemModal from './BuyItemModal/indedx'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage = () => {
  const t = useI18n()
  const data = {
    url: '',
    title: 'userrouter state 변경',
    price: 100,
    owner: '',
    date: '11-11-11',
  }

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
              <dt>{`${t('common:title')}`}</dt>
              <dd>{data.title}</dd>
            </div>
            <div>
              <dt>{`${t('common:price')}`}</dt>
              <dd>{data.price} 만원</dd>
            </div>
            <div>
              <dt>{`${t('common:owner')}`}</dt>
              <dd>{data.owner}</dd>
            </div>
            <div>
              <dt> {`${t('common:date')}`}</dt>
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

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default ItemDetailPage
