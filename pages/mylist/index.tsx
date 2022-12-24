import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getToken } from 'next-auth/jwt'
import ProductList from 'components/ProductList'
import ScrollDetecor from 'components/_shared/ScrollDetecor'
import fetchToAPI from 'src/utils/fetchToAPI'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import ProductFilter from 'components/ProductFilter'
import styles from './marketPlace.module.scss'
import SearchBar from 'components/_shared/SearchBar'
import type { NextRequest } from 'next/server'
import { getProductByUserId } from 'lib/controllers/products'
import { IAuthToken } from 'types/auth'

const MyListPage = ({ pageProps }: AppProps) => {
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

  const { setTarget, isEnd, handleChangedFilter } = useIntersectionObserver(
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    setProducts,
    { searchText, status, sort }
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
      initialProducts: JSON.parse(JSON.stringify(initialProducts)),
    },
  }
}

export default MyListPage
