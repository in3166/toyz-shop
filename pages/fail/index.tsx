import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { NextPageContext } from 'next/types'
import { useRouter } from 'next/router'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { currencyFormatter } from 'src/utils'
import styles from './fail.module.scss'

interface IFailedfailedBuyInfo {
  seller?: string
  buyer?: string
  price?: string
  orderId?: string
  paymentKey?: string
}

const Fail: NextPage = () => {
  const router = useRouter()
  const [failedBuyInfo, setFailedBuyInfo] = useState<IFailedfailedBuyInfo>({})

  useEffect(() => {
    if (router) {
      setFailedBuyInfo(router.query)
    }
  }, [router, router.query])

  return (
    <section className={styles.content}>
      <header>
        <h2>상품 구매를 실패하였습니다.</h2>
      </header>

      <dl>
        <div>
          <dt>Order ID</dt>
          <dd>{failedBuyInfo?.orderId}</dd>
        </div>
        <div>
          <dt>판매자</dt>
          <dd>{failedBuyInfo?.seller}</dd>
        </div>
        <div>
          <dt>구매자</dt>
          <dd>{failedBuyInfo?.buyer}</dd>
        </div>
        <div>
          <dt>price</dt>
          <dd>
            {currencyFormatter(failedBuyInfo?.price || 0)} <sub>(원)</sub>
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

export default Fail
