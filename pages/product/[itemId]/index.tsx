import { useState } from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dayjs from 'dayjs'
import { ParsedUrlQuery } from 'querystring'

import { useI18n } from 'hooks'
import SnackBar from 'components/_shared/SnackBar'
import Container from 'components/_shared/Container'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import BuyItemModal from 'components/BuyItemModal/indedx'
import Loading from 'components/_shared/Loding'
import Products from 'lib/models/Products'
import Users from 'lib/models/Users'
import { dbConnect } from 'lib/dbConnect'
import { currencyFormatter } from 'src/utils/currencyFormatter'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const t = useI18n()
  const [openModal, setOpenModal] = useState(false)
  const { message, setMessage } = useSnackbar(3000)
  const router = useRouter()
  const { data: session } = useSession()
  const { product, locale } = pageProps
  const handleOpenModal = () => {
    if (session?.user.role !== 1) {
      setMessage('로그인하세요.')
      return
    }
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Toyz Item</title>
      </Head>
      <Container color='white' width='lg'>
        <header className={styles.header}>{product?.title}</header>
        <main className={styles.main}>
          <div className={styles.image}>
            <img src={product?.image} alt='items' />
          </div>

          <div className={styles.content}>
            <dl>
              <div>
                <dt>{`${t('price')}`}</dt>
                <dd>
                  {currencyFormatter(product?.price)} <sub>(원)</sub>
                </dd>
              </div>
              <div>
                <dt>{`${t('owner')}`}</dt>
                <dd>{product?.owner.name}</dd>
              </div>
              <div>
                <dt> {`${t('date')}`}</dt>
                <dd>{dayjs(product?.createdAt).format('YYYY-MM-DD')}</dd>
              </div>
            </dl>
            <div className={styles.description}>
              <div>{product?.description}</div>
            </div>
            <div className={styles.buttonWrapper}>
              <button type='button' aria-label='open buy modal' className={styles.buyButton} onClick={handleOpenModal}>
                구매
              </button>
            </div>
          </div>
        </main>
        {openModal && (
          <BuyItemModal
            onClose={handleCloseModal}
            product={product}
            lang={locale}
            setMessage={setMessage}
            buyer={session?.user?._id}
          />
        )}
        {message && <SnackBar message={message} setMessage={setMessage} status='warning' />}
      </Container>
    </>
  )
}

interface IGetStaticProps {
  locale: string
  locales: string[]
  params: ParsedUrlQuery
}

export const getServerSideProps = async (context: IGetStaticProps) => {
  const { locale, locales, params } = context
  await dbConnect()
  const product = await Products.findOne({ _id: params.itemId }).populate({
    path: 'owner',
    model: Users,
    select: '-password',
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
      locale,
      product: JSON.parse(JSON.stringify(product)),
    },
  }
}

export default ItemDetailPage
