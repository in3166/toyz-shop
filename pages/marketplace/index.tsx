import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useI18n } from 'hooks'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { dbConnect } from 'lib/dbConnect'
import { getAllProducts } from 'lib/controllers'
import ScrollDetecor from 'components/_shared/ScrollDetecor'
import ProductList from 'components/ProductList'
import SearchBar from 'components/_shared/SearchBar'
import styles from './marketPlace.module.scss'
import DropDown from 'components/_shared/DropDown'
import fetchToAPI from 'src/utils/fetchToAPI'

const MarketPlace: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const t = useI18n()
  const statusSelectList = [
    `${t('common:filter:status:all')}`,
    `${t('common:filter:status:onSale')}`,
    `${t('common:filter:status:reserved')}`,
    `${t('common:filter:status:sold')}`,
  ]

  const sortSelectList = [
    `${t('common:filter:sort:latest')}`,
    `${t('common:filter:sort:oldest')}`,
    `${t('common:filter:sort:highPrice')}`,
    `${t('common:filter:sort:lowPrice')}`,
  ]

  const { initialProducts } = pageProps
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [status, setStatus] = useState(1)
  const [sort, setSort] = useState(0)
  const [products, setProducts] = useState(initialProducts)

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

  const { setTarget, isEnd, setIsEnd, setCurrentPage } = useIntersectionObserver(
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    setProducts,
    `/api/products?text=${searchText}&status=${status}&sort=${sort}&`
  )

  const handleChangedFilter = async ({
    selectedSort,
    selectedStatus,
  }: {
    selectedSort: number
    selectedStatus: number
  }) => {
    setIsLoading(true)

    let url = `/api/products?page=1&status=${selectedStatus}&sort=${selectedSort}`
    if (searchText) url += `&text=${searchText}`

    const response = await fetchToAPI(url, 'GET')
    if (response) {
      setProducts(response?.products)
      setCurrentPage(1)
      setIsEnd(false)
    }
    setIsLoading(false)
  }
  return (
    <>
      <Head>
        <title>MarketPlace</title>
        <meta name='description' content='You can buy a variety of amazing toys!.' />
      </Head>
      <header className={styles.header}>
        <div className={styles.filterWrapper}>
          <DropDown
            title='Status'
            currentValue={status}
            selectList={statusSelectList}
            setCurrentValue={setStatus}
            handleChangedFilter={(selectedStatus) => handleChangedFilter({ selectedSort: sort, selectedStatus })}
          />
          <DropDown
            title='Sort'
            currentValue={sort}
            size='medium'
            selectList={sortSelectList}
            setCurrentValue={setSort}
            handleChangedFilter={(selectedSort) => handleChangedFilter({ selectedStatus: status, selectedSort })}
          />
        </div>
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
