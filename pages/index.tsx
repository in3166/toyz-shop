import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Banner from 'components/Banner'
import ProductList from 'components/ProductList'
import { dbConnect } from 'lib/dbConnect'
import Users from 'lib/models/Users'
import Products from 'lib/models/Products'

const HomePage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const { products } = pageProps

  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='You can buy a variety of amazing toys!.' />
      </Head>
      <Banner products={products} />
      <ProductList products={products} />
    </>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  await dbConnect()
  const responseProducts = await Products.find({}).populate({ path: 'owner', model: Users, select: '-password' })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
      products: JSON.parse(JSON.stringify(responseProducts || [])),
    },
    revalidate: 10,
  }
}

export default HomePage
