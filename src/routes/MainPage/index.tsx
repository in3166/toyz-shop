import { useRef, useState } from 'react'

import { IProductItem } from 'types/product'
import { useAppDispatch, useAppSelector, useMount } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { getProductList, setProductList } from 'states/product'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

import Card from './Card'
import Banner from './Banner'
import Container from 'components/Container'
import { LoadingSpinner } from 'assets/svgs'
import styles from './mainPage.module.scss'
import { currentPageState } from 'states/page'
import { useGetProducts } from 'hooks/useGetProducts'
// /{ items  }: { items: IProductItem[] }
const MainPage = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const products = useAppSelector(getProductList)
  // const [products, setProducts] = useState<IProductItem[]>(items)

  const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading)

  // if (products.length < 1) return null

  const scrollDetecor = !isLoading && <li ref={setTarget} className={styles.scrollTargetLi} />

  const loading = isLoading && (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  )

  return (
    <main className={styles.main}>
      <Banner />
      <Container>
        <ul className={styles.cardContainer}>
          {products.map((value) => {
            return <Card key={value.id} item={value} />
          })}
        </ul>
        {scrollDetecor}
        {loading}
      </Container>
    </main>
  )
}

export default MainPage
