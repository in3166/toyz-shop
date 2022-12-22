import { useState } from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { IProductItem } from 'types/product'
import ProductList from 'components/ProductList'

const LikesPage = () => {
  const [products, setProducts] = useState<IProductItem[]>([])
  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='A list of your favorite products.' />
      </Head>
      <ProductList products={products} setProducts={setProducts} />
    </>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default LikesPage
