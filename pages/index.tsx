import type { NextPage } from 'next'
import Head from 'next/head'
import nextI18nextConfig from 'next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MongoClient } from 'mongodb'

import { IProductItem } from 'types/product'
import Banner from 'components/Banner'
import ProductList from 'components/ProductList'

const pro = [
  {
    id: 'B7N0IjiIJYo',
    name: 'white and black lego toy',
    owner: 'Daniel K Cheung',
    description: 'desc',
    image: 'products/bare3.jpg',
    price: 578,
    createdAt: '2020-03-27T23:28:57-04:00',
  },
  {
    id: 'YpNf6ATniQA',
    name: 'blue red and yellow lego blocks',
    owner: 'Nick Nice',
    description: 'desc',
    image: 'products/bare2.jpg',
    price: 58,
    createdAt: '2020-10-24T12:54:41-04:00',
  },
  {
    id: 'zoyBqT7ytLU',
    name: 'assorted-colored toys on table',
    owner: 'Huy Hung Trinh',
    description: 'desc',
    image: 'products/bare1.jpg',
    price: 217,
    createdAt: '2019-05-16T22:33:06-04:00',
  },
]
const HomePage: NextPage<IProductItem[]> = () => {
  return (
    <>
      <Head>
        <title>Toyz</title>
        <meta name='description' content='You can buy a wide variety of amazing toys!.' />
      </Head>
      <Banner products={pro} />
      <ProductList products={pro} />
    </>
  )
}

export const getServerSideProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['app', 'common'], nextI18nextConfig)),
      locales,
    },
  }
}

// export async function getStaticProps() {
// fetch data from an API
// const client = await MongoClient.connect(
//   'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
// )
// const db = client.db()
// const meetupsCollection = db.collection('meetups')
// const meetups = await meetupsCollection.find().toArray()
// client.close()
// return {
//   props: {
//     products:
//   },
//   revalicreatedAt: 1,
// }
// }

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await MongoClient.connect(
//     'mongodb+srv://maximilian:TU6WdZF2EjFWsqUt@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
//   )
//   const db = client.db()

//   const meetupsCollection = db.collection('meetups')

//   const meetups = await meetupsCollection.find().toArray()

//   client.close()

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         name: meetup.name,
//         address: meetup.address,
//         image: meetup.image,
//       })),
//     },
//     revalicreatedAt: 1,
//   }
// }

export default HomePage
