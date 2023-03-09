import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { NextPageContext } from 'next/types'
import { useRouter } from 'next/router'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { currencyFormatter } from 'utils'
import styles from './success.module.scss'

interface IBuyInfo {
  seller?: string
  buyer?: string
  price?: string
  orderId?: string
  paymentKey?: string
}

const Success: NextPage = () => {
  const router = useRouter()
  const [buyInfo, setBuyInfo] = useState<IBuyInfo>({})

  useEffect(() => {
    if (router) {
      setBuyInfo(router.query)
    }
  }, [router, router.query])

  useEffect(() => {
    if (buyInfo.buyer) {
      fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify(buyInfo),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
        .then((res) => {
          console.log('성공:', res)
        })
        .catch((err) => {
          console.log('실패: ', err)
        })
    }
  }, [buyInfo])

  return (
    <section className={styles.content}>
      <header>
        <h2>상품 구매를 성공하였습니다.</h2>
      </header>

      <dl>
        <div>
          <dt>Order ID</dt>
          <dd>{buyInfo?.orderId}</dd>
        </div>
        <div>
          <dt>판매자</dt>
          <dd>{buyInfo?.seller}</dd>
        </div>
        <div>
          <dt>구매자</dt>
          <dd>{buyInfo?.buyer}</dd>
        </div>
        <div>
          <dt>price</dt>
          <dd>
            {currencyFormatter(buyInfo?.price || 0)} <sub>(원)</sub>
          </dd>
        </div>
      </dl>
      <footer className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          type='button'
          aria-label='link to home page'
          onClick={() => router.push('/')}
        >
          Home으로 돌아가기
        </button>
      </footer>
    </section>
  )
}

export const getStaticProps = async (context: NextPageContext) => {
  const { locale, locales } = context
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ko', ['app', 'common'], nextI18nextConfig)),
      locales,
    },
    revalidate: 10,
  }
}

export default Success
