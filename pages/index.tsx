import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Banner from 'components/Banner'
import ProductList from 'components/ProductList'

const HomePage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { products } = pageProps

  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='You can buy a wide variety of amazing toys!.' />
      </Head>
      <Banner products={products} />
      <ProductList products={products} />
    </>
  )
}

export const getServerSideProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  const { products } = data
  // if (data.success)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
      products,
    },
  }
}

export default HomePage
