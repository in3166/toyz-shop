import type { NextPage } from 'next'
import Head from 'next/head'
import { MongoClient } from 'mongodb'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import MainPage from 'components/MainPage'
import { IProductItem } from 'types/product'

const pro = [
  {
    id: 'B7N0IjiIJYo',
    title: 'white and black lego toy',
    url: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxMXx8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2020-03-27T23:28:57-04:00',
    owner: 'Daniel K Cheung',
    price: 578,
  },
  {
    id: 'YpNf6ATniQA',
    title: 'blue red and yellow lego blocks',
    url: 'https://images.unsplash.com/photo-1603558431750-dfa36513aee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxM3x8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2020-10-24T12:54:41-04:00',
    owner: 'Nick Nice',
    price: 58,
  },
  {
    id: 'zoyBqT7ytLU',
    title: 'assorted-colored toys on table',
    url: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI4NzR8MHwxfHNlYXJjaHwxNHx8dG95fGVufDB8fHx8MTY1NDM0MzUwOQ&ixlib=rb-1.2.1&q=80&w=400',
    date: '2019-05-16T22:33:06-04:00',
    owner: 'Huy Hung Trinh',
    price: 217,
  },
]
const HomePage: NextPage<IProductItem[]> = () => {
  return <MainPage products={pro} />
}
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ko', 'en'],
    ns: ['common'],
    defaultNS: 'common',
  },
}
export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], config)),
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
//   revalidate: 1,
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
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//       })),
//     },
//     revalidate: 1,
//   }
// }

export default HomePage
