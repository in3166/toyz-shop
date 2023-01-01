import { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useIntersectionObserver } from 'hooks'
import { IAuthToken } from 'types/auth'
import { getProductByUserId } from 'lib/controllers'
import { ScrollDetecor, SearchBar } from 'components/_shared'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'
import styles from './marketPlace.module.scss'

const MyListPage = ({ pageProps }: AppProps) => {
  const { initialProducts, userId } = pageProps
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState(1)
  const [sort, setSort] = useState(0)
  const [products, setProducts] = useState(initialProducts)
  console.log('mylist :', userId)
  const { setTarget, isEnd, handleChangedFilter } = useIntersectionObserver(
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    setProducts,
    { status, sort, userId }
  )

  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='A list of your favorite products.' />
      </Head>
      <header className={styles.header}>
        <ProductFilter
          handleChangedFilter={handleChangedFilter}
          sort={sort}
          setSort={setSort}
          status={status}
          setStatus={setStatus}
        />
        <div>
          <SearchBar />
        </div>
      </header>
      <ProductList products={products} setProducts={setProducts} />
      {!isEnd && !isLoading && <ScrollDetecor setTarget={setTarget} />}
    </>
  )
}
interface IGetServerSideProps {
  locale: string
  locales: string[]
  req: NextRequest
}

export const getServerSideProps = async (context: IGetServerSideProps) => {
  const { locale, locales, req } = context
  const token: IAuthToken | null = await getToken({ req })
  let initialProducts: Omit<any, never>[] = []

  if (token) {
    initialProducts = await getProductByUserId(token?._id || '')
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
      locale,
      userId: token?._id,
      initialProducts: JSON.parse(JSON.stringify(initialProducts)),
    },
  }
}

export default MyListPage
