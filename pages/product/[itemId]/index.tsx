import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dayjs from 'dayjs'
import { ParsedUrlQuery } from 'querystring'

import { useI18n } from 'hooks'
import { useUserLikes } from 'hooks/useUserLikes'
import SnackBar from 'components/_shared/SnackBar'
import Container from 'components/_shared/Container'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import BuyItemModal from 'components/BuyItemModal/indedx'
import Loading from 'components/_shared/Loding'
import Products from 'lib/models/Products'
import Users from 'lib/models/Users'
import { dbConnect } from 'lib/dbConnect'
import { currencyFormatter } from 'src/utils/currencyFormatter'
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { product, locale } = pageProps
  const t = useI18n()
  const [openModal, setOpenModal] = useState(false)
  const { message, setMessage } = useSnackbar(3000)
  const router = useRouter()
  const { likes, user, handleClickLike } = useUserLikes()
  const [isLiked, setIsLiked] = useState(false)

  const handleOpenModal = () => {
    if (!user || user?.role !== 1) {
      setMessage('로그인하세요.')
      return
    }
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    if (likes.some((value) => value._id === product?._id)) {
      setIsLiked(true)
    }
  }, [likes, product?._id])

  if (router.isFallback) {
    return <Loading />
  }
  const handleClickEdit = () => {
    router.push(`/product?id=${product._id}`)
  }
  const editButton = (
    <button type='button' onClick={handleClickEdit}>
      <Image className={styles.editButton} width={17} height={17} src='/svgs/edit.png' alt='edit product info button' />
    </button>
  )
  const likeButton = (
    <button
      type='button'
      aria-label='Add a product to like'
      className={styles.likeButton}
      onClick={(e) => handleClickLike(e, product, isLiked, setIsLiked)}
    >
      {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
    </button>
  )
  const headerButton = user?.id === product.owner.id ? editButton : likeButton

  return (
    <>
      <Head>
        <title>Toyz Item</title>
      </Head>
      <Container color='white' width='lg'>
        <header className={styles.header}>
          <h3>{product?.title}</h3>
          {user && headerButton}
        </header>
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
            buyer={user?._id}
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
