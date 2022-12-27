import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dayjs from 'dayjs'
import { ParsedUrlQuery } from 'querystring'

import { useI18n, useUserLikes } from 'hooks'
import { Products, Users } from 'lib/models'
import { dbConnect } from 'lib/dbConnect'
import { currencyFormatter, fetchToAPI } from 'src/utils'
import { SnackBar, Container, Loading, DropDown } from 'components/_shared'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import BuyItemModal from 'components/BuyItemModal'
import ItemStatusModal from 'components/ItemStatusModal'
import { HeartFillIcon, HeartOutlineIcon } from 'public/svgs'
import styles from './itemDetailPage.module.scss'

const ItemDetailPage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { product, locale } = pageProps
  const t = useI18n()
  const statusSelectList = [
    `${t('common:filter:status:onSale')}`,
    `${t('common:filter:status:reserved')}`,
    `${t('common:filter:status:sold')}`,
  ]
  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [openStatusModal, setOpenStatusModal] = useState(false)
  const { message, setMessage } = useSnackbar(3000)
  const [status, setStatus] = useState((product?.status || 1) - 1)
  const router = useRouter()
  const { likes, user, handleClickLike } = useUserLikes()
  const [isLiked, setIsLiked] = useState(false)

  const handleOpenBuyModal = () => {
    if (!user || user?.role !== 1) {
      setMessage('로그인하세요.')
      return
    }
    setOpenBuyModal(true)
  }

  const handleCloseModal = () => {
    setOpenBuyModal(false)
  }

  useEffect(() => {
    if (likes.some((value: { _id: string }) => value._id === product?._id)) {
      setIsLiked(true)
    }
  }, [likes, product?._id])

  if (router.isFallback) {
    return <Loading />
  }

  const handleClickEdit = () => {
    router.push(`/product?id=${product._id}`)
  }

  const handleClickDelete = async () => {
    const result = await fetchToAPI(`/api/products/${product?._id}`, 'DELETE')
    if (result.success) {
      router.push(`/`)
    }
  }

  const editButton = (
    <div className={styles.editButtonWrapper}>
      <button type='button' onClick={handleClickEdit} className={styles.editButton}>
        <Image width={17} height={17} src='/svgs/edit.png' alt='edit product info button' />
      </button>
      <button type='button' onClick={handleClickDelete} className={styles.deleteButton}>
        <Image width={17} height={17} src='/svgs/bin.png' alt='edit product info button' />
      </button>
    </div>
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

  const handleStatusOnConfirm = async (selectedStatus: number) => {
    const url = `/api/products/${product?._id}`
    const response = await fetchToAPI(url, 'PATCH', { status: selectedStatus + 1 })
    if (!response?.success) {
      setStatus(product?.status)
    }
    setOpenStatusModal(false)
  }

  const handleChangedStatus = async (selectedStatus: number) => {
    if (user?._id !== product?.owner?._id) return
    if (!selectedStatus) {
      setOpenStatusModal(true)
      return
    }
    await handleStatusOnConfirm(selectedStatus)
  }

  const productStatus =
    user?.id === product.owner.id ? (
      <DropDown
        currentValue={status}
        selectList={statusSelectList}
        setCurrentValue={setStatus}
        handleChangedFilter={handleChangedStatus}
      />
    ) : (
      statusSelectList[(product?.status || 1) - 1]
    )

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
              <div>
                <dt> {`${t('Status')}`}</dt>
                <dd>{productStatus}</dd>
              </div>
            </dl>
            <div className={styles.description}>
              <div>{product?.description}</div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                type='button'
                aria-label='open buy modal'
                className={styles.buyButton}
                onClick={handleOpenBuyModal}
              >
                구매
              </button>
            </div>
          </div>
        </main>
        {openBuyModal && (
          <BuyItemModal
            onClose={handleCloseModal}
            product={product}
            lang={locale}
            setMessage={setMessage}
            buyer={user?._id}
          />
        )}
        {openStatusModal && (
          <ItemStatusModal
            onClose={() => {
              setOpenStatusModal(false)
              if (product?.status >= 1) setStatus(product.status - 1)
            }}
            onConfirm={() => handleStatusOnConfirm(0)}
          />
        )}
        {message && <SnackBar message={message} setMessage={setMessage} status='warning' />}
      </Container>
    </>
  )
}

interface IGetServerSideProps {
  locale: string
  locales: string[]
  params: ParsedUrlQuery
}

export const getServerSideProps = async (context: IGetServerSideProps) => {
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
