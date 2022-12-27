import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useIntersectionObserver } from 'hooks'
import { dbConnect } from 'lib/dbConnect'
import { getAllProducts } from 'lib/controllers'
import { fetchToAPI } from 'src/utils'
import { ScrollDetecor, SearchBar } from 'components/_shared'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'
import styles from './marketPlace.module.scss'

const MarketPlace: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { initialProducts } = pageProps
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState(initialProducts)
  const [status, setStatus] = useState(1)
  const [sort, setSort] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    const { query } = router
    if (query?.text) {
      setSearchText(query?.text?.toString())
    }

    if (query?.text?.toString()) {
      fetchToAPI(`/api/products?text=${query?.text?.toString()}`, 'GET').then((response) => {
        if (response?.success && response.products.length) {
          setProducts(response?.products)
        }
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [router])

  const { setTarget, isEnd, handleChangedFilter } = useIntersectionObserver(
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    setProducts,
    { searchText, status, sort }
  )

  return (
    <>
      <Head>
        <title>MarketPlace</title>
        <meta name='description' content='You can buy a variety of amazing toys!.' />
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
      <ProductList products={products} isLoading={isLoading} />
      {!isEnd && !isLoading && <ScrollDetecor setTarget={setTarget} />}
    </>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  await dbConnect()
  const responseProducts = await getAllProducts({ page: 1, status: 1 })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
      initialProducts: JSON.parse(JSON.stringify(responseProducts || [])),
    },
    revalidate: 10,
  }
}

export default MarketPlace
