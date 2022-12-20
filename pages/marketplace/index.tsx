import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ProductList from 'components/ProductList'
import { dbConnect } from 'lib/dbConnect'
import { getAllProduct } from 'lib/controllers'
import { useEffect, useState } from 'react'
import ScrollDetecor from 'components/_shared/ScrollDetecor'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

const HomePage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { initialProducts } = pageProps
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState(initialProducts)
  const { setTarget, isEnd } = useIntersectionObserver({ rootMargin: '10px', threshold: 0 }, setIsLoading, setProducts)

  useEffect(() => {
    const { query } = router
    if (query?.text) setSearchText(query?.text?.toString())
  }, [router])

  useEffect(() => {
    setIsLoading(true)
    if (searchText)
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?text=${searchText}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=31536000',
        },
      }).then(async (response) => {
        const data = await response.json()
        if (data.success) {
          setProducts(data.product)
        }
        setIsLoading(false)
      })
    else setIsLoading(false)
  }, [searchText])

  return (
    <>
      <Head>
        <title>MarketPlace</title>
        <meta name='description' content='You can buy a variety of amazing toys!.' />
      </Head>
      <ProductList products={products} isLoading={isLoading} />
      {!isEnd && !isLoading && <ScrollDetecor setTarget={setTarget} />}
    </>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  await dbConnect()
  const responseProducts = await getAllProduct(1)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
      initialProducts: JSON.parse(JSON.stringify(responseProducts || [])),
    },
    revalidate: 10,
  }
}

export default HomePage
