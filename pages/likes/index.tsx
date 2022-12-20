import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ProductList from 'components/ProductList'

const LikesPage = () => {
  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='A list of your favorite products.' />
      </Head>
      <ProductList products={[]} />
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
