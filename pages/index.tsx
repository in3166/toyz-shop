import { useState } from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useIntersectionObserver } from 'hooks'
import { IProductItem } from 'types/product'
import { dbConnect } from 'lib/dbConnect'
import { getAllBanner, getAllProducts } from 'lib/controllers'
import { ScrollDetecor } from 'components/_shared'
import Banner from 'components/Banner'
import ProductList from 'components/ProductList'

const HomePage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { initialProducts, banners } = pageProps
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<IProductItem[]>(initialProducts)

  const { setTarget, isEnd } = useIntersectionObserver(
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    setProducts,
    { status: 1 }
  )

  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='You can buy a variety of amazing toys!' />
      </Head>
      <Banner banners={banners} />
      <ProductList products={products} isLoading={isLoading} setProducts={setProducts} />
      {!isEnd && !isLoading && <ScrollDetecor setTarget={setTarget} />}
    </>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  await dbConnect()

  const responseProducts = await getAllProducts({ page: 1, status: 1 })
  const responseBanners = await getAllBanner()
  const existedBanner = responseBanners.filter((value) => value.item !== null)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
      initialProducts: JSON.parse(JSON.stringify(responseProducts || [])),
      banners: JSON.parse(JSON.stringify(existedBanner || [])),
    },
    revalidate: 10,
  }
}

export default HomePage
