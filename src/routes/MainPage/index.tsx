import { useRef, useState } from 'react'

import { useAppSelector } from 'hooks'
import { getProductList } from 'states/product'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

import Container from 'components/Container'
import Card from './Card'
import Banner from './Banner'
import { LoadingSpinner } from 'assets/svgs'
import styles from './mainPage.module.scss'

const MainPage = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const products = useAppSelector(getProductList)

  const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading)

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
